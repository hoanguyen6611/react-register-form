import React from "react";
import { useField } from "formik";

const RadioFormik = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center gap-x-3">
      <label className="cursor-pointer custom-radio">
        <input
          {...field}
          type="radio"
          value={props.value}
          className="hidden"
          checked={props.checked}
        />
        <div className="bg-white w-full h-full rounded-lg"></div>
      </label>
      <span>{props.label}</span>
    </div>
  );
};

export default RadioFormik;
