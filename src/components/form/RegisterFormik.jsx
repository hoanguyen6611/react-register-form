import React from "react";
import InputFomik from "../input/InputFomik";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import RadioFormik from "./../radio/RadioFormik";
import CheckboxFormik from "./../checkbox/CheckboxFormik";
import DropdownFormik from "./../dropdown/DropdownFormik";
const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "Doctor",
  },
  {
    id: 4,
    value: "tester",
    text: "Tester",
  },
];

const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
        gender: "male",
        job: "",
        term: false,
      }}
      validationSchema={yup.object({
        username: yup.string().required("Please enter a username"),
        email: yup
          .string()
          .email("Please enter valid email address")
          .required("Please enter a email address"),
        password: yup
          .string()
          .min(8, "Your password must be at least 8 characters or greater")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            {
              message:
                "Your password must have at least 1 uppercase, 1 lowercase, 1 special character",
            }
          )
          .required("Please enter a password"),
        gender: yup
          .string()
          .required("Please select your gender")
          .oneOf(["male", "female"], "Your can only select male or female"),
        job: yup.string().required("Please select your job"),
        term: yup
          .boolean()
          .oneOf([true], "Please check the term and conditions"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 5000);
      }}
    >
      {(formik) => {
        const watchGender = formik.values.gender;
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-[300px] mx-auto my-10"
            autoComplete="off"
          >
            <InputFomik
              name="username"
              placeholder="Enter your username"
              id="username"
              label="Username"
              type="text"
            />
            <InputFomik
              name="email"
              placeholder="Enter your email address"
              id="email"
              label="Email address"
              type="email"
            />
            <InputFomik
              name="password"
              placeholder="Enter your password"
              id="password"
              label="Password"
              type="password"
            />
            <div className="flex flex-col gap-3 mb-5">
              <label className="cursor-pointer">Gender</label>
              <div className="flex items-center gap-5">
                <RadioFormik
                  name="gender"
                  value="male"
                  checked={watchGender === "male"}
                  label="Male"
                />
                <RadioFormik
                  name="gender"
                  value="female"
                  checked={watchGender === "female"}
                  label="Female"
                />
              </div>
            </div>
            <DropdownFormik
              labelText="Are you"
              data={dropdownData}
              name="job"
              setValue={formik.setFieldValue}
            />
            <div className="flex flex-col gap-3">
              <CheckboxFormik name="term">
                I accept the terms and conditions
              </CheckboxFormik>
            </div>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold"
            >
              {formik.isSubmitting ? (
                <div className="w-5 h-5 rounded-full border-2 border-t-2 border-white border-t-transparent mx-auto animate-spin"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;
