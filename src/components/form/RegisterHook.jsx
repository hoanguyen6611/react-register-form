import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          name="username"
          placeholder="Enter your username"
          id="username"
          control={control}
          type="text"
        />
        <p className="text-red-500 text-sm">Please enter your username</p>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <InputHook
          name="email"
          placeholder="Enter email address"
          id="email"
          control={control}
          type="email"
        />
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="Enter your password"
          id="password"
          control={control}
          type="password"
        />
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="male" />
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="female" />
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you</label>
        <DropdownHook control={control} setValue={setValue} name="job" />
      </div>
      <div>
        <CheckboxHook
          control={control}
          text="I accept the terms and conditions"
          name="term"
        />
      </div>
      <button className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold">
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;
