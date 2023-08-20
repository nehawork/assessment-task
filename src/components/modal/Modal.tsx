import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

type ModalProps = {
  titleLeft: string;
  titleRight?: string;
  isOpen: boolean;
  onClose: () => void;
  maxWidth: string;
  maxHeight: string;
  children: React.ReactNode;
};

const Modal = ({
  titleLeft,
  titleRight,
  isOpen,
  onClose,
  maxWidth,
  maxHeight,
  children
}: ModalProps): JSX.Element => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto  rounded-large"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="min-h-screen px-4 text-center">
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className="inline-block w-full p-8 overflow-hidden text-left align-middle transition-all transform bg-cream shadow-xl border border-gray-600 rounded-large"
            style={{ maxWidth: maxWidth, height: maxHeight }}
          >
            <Dialog.Title className="font-normal text-black flex justify-between items-center">
              <div className="text-xl">{titleLeft}</div>
              <div className="text-base font-medium">{titleRight ?? ""}</div>
            </Dialog.Title>

            {children}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
