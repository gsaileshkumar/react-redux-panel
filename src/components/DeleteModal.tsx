import { MouseEvent, useRef } from "react";

type DeleteModalProps = {
  isOpen: boolean;
  content: string;
  onClose: () => void;
  onConfirm: () => void;
};

const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  content,
}: DeleteModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center "
      onClick={handleOutsideClick}
    >
      <div
        className="w-[300px] bg-[#111] p-[20px] ml-[127px] shadow-lg border border-solid border-[#c8323c]"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-between items-center pb-2 ">
          <h5 className="font-medium text-[#c8323c]">DELETE EQ</h5>
          <p className="pt-4 mb-5">{content}</p>
          <button
            className="rounded bg-[#c8323c] p-1 text-sm"
            onClick={onConfirm}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
