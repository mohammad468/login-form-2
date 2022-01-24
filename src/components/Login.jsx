import React, { useEffect, useState } from "react";
import { Formik } from "formik";

// * icons
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";

// *global class

const Login = () => {
  const [singUp, setSignUp] = useState(0);

  return (
    <div
      className={singUp > 0 ? "container right-panel-active" : "container"}
      id="container"
    >
      <div className="form-container sing-up-container">
        <Formik
          initialValues={{ email: "", password: "" , name: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
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
            <form onSubmit={handleSubmit} action="">
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

              <input type="text" className="form-control" placeholder="Name" />

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={
                  (errors.email ? "form-control is-invalid" : "form-control",
                  touched.email ? "form-control is-invalid" : "form-control")
                }
              />
              {/* {errors.email && touched.email && errors.email} */}
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">please enter email</div>
              <input
                className={
                  (errors.password ? "form-control is-invalid" : "form-control",
                  touched.password ? "form-control is-invalid" : "form-control")
                }
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {/* {errors.password && touched.password && errors.password} */}
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">please enter email</div>
              <button type="submit" className="mt-2" disabled={isSubmitting}>
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
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
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
                className="form-control"
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <button>Sing In</button>
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
