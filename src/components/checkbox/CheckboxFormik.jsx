import React from "react";
import { useField } from "formik";

const CheckboxFormik = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-3">
      <label className="cursor-pointer custom-checkbox">
        <input
          type="checkbox"
          {...field}
          {...props}
          className="hidden"
          id={props.name}
          checked={field.value}
        />
        <div className="flex items-center gap-x-3">
          <div className="bg-white transition-all w-full h-full rounded-md flex items-center justify-center custom-checkbox-square">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7453 4.89733L5.93178 12.7109L2.25482 9.03391L3.17132 8.11741L5.93178 10.8714L12.8288 3.98083L13.7453 4.89733Z"
                fill="white"
              />
            </svg>
          </div>
          <label htmlFor={props.name} className="text-sm cursor-pointer">
            {children}
          </label>
        </div>
      </label>
      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm">{meta.error}</p>
      )}
    </div>
  );
};

export default CheckboxFormik;
