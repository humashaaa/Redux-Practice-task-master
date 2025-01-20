import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { CompleteStatus } from '../../redux/features/task/taskSlice';

const MyTasks = () => {
  const {tasks} = useSelector(state=>state.taskSlice)
  const {name} = useSelector(state=>state.userSlice)
  console.log(tasks)
const dispatch = useDispatch()

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
       {
        tasks?.filter(item=>item.firstName === name).map(item=> ( <div
          key={item.id}
          className="bg-secondary/10 rounded-md p-3 flex justify-between"
        >
          <h1>{item.firstName}</h1>
          <div className="flex gap-3">
            <button className="grid place-content-center" title="Details">
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
