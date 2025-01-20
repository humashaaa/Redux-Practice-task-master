import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { CompleteStatus } from '../../redux/features/task/taskSlice';
import { useState } from 'react';
import MyTaskModal from './MyTaskModal';

const MyTasks = () => {
  const {tasks} = useSelector(state=>state.taskSlice)
  const {name} = useSelector(state=>state.userSlice)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)
  console.log(tasks)
const dispatch = useDispatch()

const handleSubmit = (item)=>{
  setIsOpen(true)
  setSelectedTask(item)


}

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <MyTaskModal isOpen={isOpen} setIsOpen={setIsOpen} selectedTask={selectedTask}></MyTaskModal>

      <div className=" h-[750px] overflow-auto space-y-3">
       {
        tasks?.filter(item=>item.firstName === name).map(item=> ( <div
          key={item.id}
          className="bg-secondary/10 rounded-md p-3 flex justify-between"
        >
          <h1>{item.firstName}</h1>
          <div className="flex gap-3">
            <button onClick={()=>handleSubmit(item)} className="grid place-content-center" title="Details">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
            </button>
            <button onClick={()=> dispatch(CompleteStatus({id : item.id, status : "Completed"}))} className="grid place-content-center" title="Done">
              <CheckIcon className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>))
       }
      </div>
    </div>
  );
};

export default MyTasks;
