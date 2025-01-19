import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/task/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    console.log(data);
    onCancel();
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add task Form">
        {/* add form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mt-4 justify-items-center gap-6">
            <div className="flex flex-col justify-items-center">
              <label htmlFor="title" className="text-blue-700">
                Name
              </label>
              <input
                type="text"
                id="title"
                {...register("firstName", { required: true, maxLength: 100 })}
              />
            </div>

            <button
              onClick={() => onCancel()}
              className="bg-red-600 text-white px-3 py-2"
            >
              cancel
            </button>

            <input type="submit" className="bg-blue-600 text-white px-3 py-2" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
