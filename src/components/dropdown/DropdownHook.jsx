import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useWatch } from "react-hook-form";

const DropdownHook = ({ control, setValue, name }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const jobValue = useWatch({
    control,
    name: "job",
    defaultValue: "",
  });
  const handleClickDropdown = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = React.useState("Select your job");
  console.log(
    "🚀 ~ file: DropdownHook.jsx ~ line 11 ~ DropdownHook ~ jobValue",
    jobValue
  );
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 flex items-center justify-between cursor-pointer bg-white"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdown}
          data-value="teacher"
        >
          Teacher
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdown}
          data-value="developer"
        >
          Developer
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdown}
          data-value="doctor"
        >
          Doctor
        </div>
      </div>
    </div>
  );
};

export default DropdownHook;
