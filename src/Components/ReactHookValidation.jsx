import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const ReactHookValidation = () => {
  // 3 type of mode for form validation-----------
  // ----------------1.onSubmit-------------------
  // const { register, handleSubmit, watch, errors } = useForm();

  // ----------------2.onTouched-------------------
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onTouched",
  });

  // ----------------3.onChange-------------------
  // const { register, handleSubmit, watch, errors } = useForm({
  //   mode: "onChange",
  // });

  const onSubmit = (data) => console.log(data);
  
  return (
    <>
      {/* patterns
   email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   phone: /^\d{10}$/
   password: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
   Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)
   */}
      <div className="container py-3">
        <div className="card-border-0 shadow w-75 p-3 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.fullname,
                })}
                id="fullname"
                placeholder="Enter Your Full Name"
                name="fullname"
                ref={register({
                  required: "This field is required",
                  minLength: {
                    value: 4,
                    message: "User name must be more than 4 characters",
                  },
                })}
              />
              {errors.fullname && (
                <div className="invalid-feedback">
                  {errors.fullname.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.email,
                })}
                id="email"
                placeholder="Enter Your E-mail Address"
                name="email"
                ref={register({
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter correct e-mail address",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.phone,
                })}
                id="phone"
                placeholder="Enter Your Phone Number"
                name="phone"
                ref={register({
                  required: "This field is required",
                  pattern: {
                    value: /^\d{11}$/,
                    message: "Please enter 11 digit valid number",
                  },
                })}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone.message}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.password,
                })}
                id="password"
                placeholder="Enter Your Password"
                name="password"
                ref={register({
                  required: "This field is required",
                  pattern: {
                    value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message:
                      "Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)",
                  },
                })}
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="state">Choose Your State</label>
              <select
                className={classNames("form-control", {
                  "is-invalid": errors.state,
                })}
                id="state"
                name="state"
                ref={register({
                  required: "Please select a state",
                })}
              >
                <option value="">--- Select Your State ---</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Assam">Assam</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Punjab">Punjab</option>
              </select>
              {errors.state && (
                <div className="invalid-feedback">{errors.state.message}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="gender" className="mr-4">
                Choose Your Gender
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  ref={register({
                    required: "Please select a gender",
                  })}
                />
                <label className="form-check-label" htmlFor="male">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  ref={register({
                    required: "Please select a gender",
                  })}
                />
                <label className="form-check-label" htmlFor="female">
                  female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="other"
                  name="gender"
                  ref={register({
                    required: "Please select a gender",
                  })}
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
              {errors.gender && (
                <div className="form-text text-danger">
                  {errors.gender.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="tnc"
                  name="tnc"
                  ref={register({
                    required: "Please select our terms & conditions",
                  })}
                />
                <label className="form-check-label" htmlFor="tnc">
                  I agree all terms & conditions
                </label>
              </div>
              {errors.tnc && (
                <div className="form-text text-danger">
                  {errors.tnc.message}
                </div>
              )}
            </div>
            <button className="btn btn-primary">Create New Account</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReactHookValidation;
