import { Dialog } from "@headlessui/react";

const Modal = ({ isOpen, setIsOpen, title, children }) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Background overlay */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>

        {/* Modal content */}
        <div className="relative bg-white rounded-md shadow-lg p-6">
          <Dialog.Panel>
            <Dialog.Title className="text-lg font-semibold">
              {title}
            </Dialog.Title>
            {children}
            <button
              className="mt-4 btn btn-secondary"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Modal;
