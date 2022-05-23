import React from "react";
import { useField } from "formik";

const InputFomik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={props.id} className="cursor-pointer">
        {label}
      </label>
      <input
        className="p-4 border border-gray-100 rounded-lg bg-white outline-none transition-all focus:border-blue-500"
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm">{meta.error}</p>
      )}
    </div>
  );
};

export default InputFomik;
