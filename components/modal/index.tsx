import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, ReactNode, useState } from "react";

interface props {
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
  children: ReactNode;
  title?: string;
  size?: string;
  className?: string;
}

const ModalComponent: React.FC<props> = ({
  children,
  isOpen,
  setIsOpen,
  className,
  size,
  title,
}) => {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`${size} ${className} transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
                >
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    <div className="flex justify-end"><button className="font-semibold">x</button></div>
                  </Dialog.Title> */}
                  <div className="overflow-auto">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

ModalComponent.defaultProps = {
  size: "w-full max-w-7xl",
};

export default ModalComponent;
