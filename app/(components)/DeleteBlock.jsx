"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <div>
      <MdOutlineClose
        className="text-red-400 hover:cursor-pointer hover:text-red-200 "
        onClick={deleteTicket}
      />
    </div>
  );
};

export default DeleteBlock;
