import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../../redux/features/task/taskSlice';

const TaskCard = ({task}) => {

  const dispatch = useDispatch()
  const updateTask =()=>{
    dispatch(updateStatus(task.id))

  }

  const remove=()=>{
    dispatch(removeTask(task.id))
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === 'high' ? 'text-red-500' : ''
        } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${
          task.priority === 'low' ? 'text-green-500' : ''
        }`}
      >
        {task?.title}
      </h1>
      <p className="text-sm">Assigned to - {task?.firstName}</p>
      <div className="flex justify-between mt-3">
        <div className="flex gap-3">
          <button onClick={remove} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            title="Update Status"
            onClick={updateTask}
            className='border border-green-500'
          >
            <ArrowRightIcon className={`h-5 w-5 ${task.status === "pending" && "text-yellow-500"} ${task.status === "In Progress" && "text-green-600"} text-primary`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
