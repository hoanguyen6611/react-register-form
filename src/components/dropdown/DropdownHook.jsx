import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownHook = ({control}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 flex items-center justify-between cursor-pointer bg-white"
        onClick={() => setShow(!show)}
      >
        <span>Select your job</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        <div className="p-5">Teacher</div>
        <div className="p-5">Developer</div>
        <div className="p-5">Doctor</div>
      </div>
    </div>
  );
};

export default DropdownHook;
