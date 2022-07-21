import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function NewTodoForm({isOpen,setIsOpen}) {
 

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-12">
          <Dialog.Title>Create New Todo</Dialog.Title>
        <div>
            <form className="flex flex-col">
                <input type="text" className="border border-2 mt-4 rounded" placeholder="Add New Todo Title"/>
                <input type="textarea" className="border border-2 mt-4 rounded" placeholder="Add New Todo Description"/>
                <select className="mt-4 border border-2 rounded">
                    <option>Work</option>
                    <option>Personal</option>
                    <option>Other</option>
                </select>
                <button className="bg-blue-300 px-4 py-2 mt-4 rounded shadow">Add New Todo</button>
            </form>
        </div>
    
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
