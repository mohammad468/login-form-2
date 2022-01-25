import React, { useEffect, useState } from "react";
import { Formik } from "formik";

// * icons
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";

// *global class

const Login = () => {
  const [singUp, setSignUp] = useState(0);

  return (
    <div
      className={
        singUp > 0 ? "container py-5 right-panel-active" : "container py-5"
      }
      id="container"
    >
      <div className="form-container sing-up-container">
        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
            invalidClass: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
              errors.invalidClass = "is-invalid";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
              errors.invalidClass = "is-invalid";
            }
            if (!values.name) {
              errors.name = "Required";
              errors.invalidClass = "form-control is-invalid";
            }
            if (!values.password) {
              errors.password = "Required";
              errors.invalidClass = "form-control is-invalid";
            }
            if (values.password.length < 3 && values.password.length > 0) {
              errors.password = "is short";
              errors.invalidClass = "form-control is-invalid";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="py-3" action="">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="" className="social">
                  <FaGoogle />
                </a>
                <a href="" className="social">
                  <FaFacebookF />
                </a>
                <a href="" className="social">
                  <FaGithub />
                </a>
              </div>
              <span>Or use your email for Registration</span>
              {/* // !name */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={
                  errors.name && touched.name && errors.name
                    ? errors.invalidClass
                    : "form-control is-valid"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              {/* // !email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={
                  errors.email && touched.email && errors.email
                    ? errors.invalidClass
                    : "form-control is-valid"
                }
              />
              {errors.email && touched.email && errors.email}
              {/* // !password */}
              <input
                className={
                  errors.password && touched.password && errors.password
                    ? errors.invalidClass
                    : "form-control is-valid"
                }
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" className="my-2" disabled={isSubmitting}>
                Sing Up
              </button>
            </form>
          )}
        </Formik>
      </div>
      <div className="form-container sing-in-container">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
              errors.invalidClass = "is-invalid";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
              errors.invalidClass = "is-invalid";
            }
            if (!values.password) {
              errors.password = "Required";
              errors.invalidClass = "form-control is-invalid";
            }
            if (values.password.length < 3 && values.password.length > 0) {
              errors.password = "is short";
              errors.invalidClass = "form-control is-invalid";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form action="" onSubmit={handleSubmit}>
              <h1>Sign In</h1>
              <div className="social-container">
                <a href="" className="social">
                  <FaGoogle />
                </a>
                <a href="" className="social">
                  <FaFacebookF />
                </a>
                <a href="" className="social">
                  <FaGithub />
                </a>
              </div>
              <span>or use your account</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={
                  errors.email && touched.email && errors.email
                    ? errors.invalidClass
                    : "form-control is-valid"
                }
              />
              {errors.email && touched.email && errors.email}
              <input
                className={
                  errors.password && touched.password && errors.password
                    ? errors.invalidClass
                    : "form-control is-valid"
                }
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button className="my-2">Sing In</button>
            </form>
          )}
        </Formik>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connectied with up please login with your personal info
            </p>
            <button
              className="devingine"
              onClick={() => {
                setSignUp(singUp - 1);
              }}
              id="signIn"
            >
              Sign In
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your parsonal details and start journey with us.</p>
            <button
              className="devingine"
              onClick={() => {
                setSignUp(singUp + 1);
              }}
              id="signUp"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
