import Modal from "../ui/Modal";

const MyTaskModal = ({isOpen, setIsOpen, selectedTask}) => {
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Detailed Task">
        <p>{selectedTask?.firstName}</p>

      </Modal>
    </div>
  );
};

export default MyTaskModal;