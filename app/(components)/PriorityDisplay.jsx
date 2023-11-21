import React from "react";
import { HiFire } from "react-icons/hi2";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <HiFire
        className={`pr-1 ${priority > 0 ? "text-red-400" : "text-slate-400"}`}
      />

      <HiFire
        className={`pr-1 ${priority > 1 ? "text-red-400" : "text-slate-400"}`}
      />

      <HiFire
        className={`pr-1 ${priority > 2 ? "text-red-400" : "text-slate-400"}`}
      />

      <HiFire
        className={`pr-1 ${priority > 3 ? "text-red-400" : "text-slate-400"}`}
      />

      <HiFire
        className={`pr-1 ${priority > 4 ? "text-red-400" : "text-slate-400"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
