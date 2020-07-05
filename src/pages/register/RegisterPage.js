import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import yupValidPassword from '../../shared/validations/password';

import Logo from '../../assets/img/sample-logo.png';
import './RegisterPage.css';

Yup.addMethod(Yup.string, 'password', yupValidPassword);

export default function RegisterPage() {
  const formInitialValues = { login: '', password: '' };

  const SignupSchema = Yup.object().shape({
    login: Yup.string()
      .min(3, 'Too short!')
      .max(15, 'Too Long!') 
      .required("This field is required."),

    password: Yup.string()
      .required("This field is required.")
      .password(),
  });
  
  function handleFormSubmit(values, { setSubmitting }) { 
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }

  return (
    <div className="LoginPage">
      <div className="OuterContainer">
        <div className="InnerContainer">
          <div className="FormContainer">
            <img src={Logo} alt="Your logo goes here" />

            <Formik
              initialValues={formInitialValues}
              validationSchema={SignupSchema}
              onSubmit={handleFormSubmit}
            >
              {({ errors, touched, isValid, dirty }) => (
                <Form>
                  <div className="FormGroup">
                    <label className="Label" htmlFor="login">
                      Login
                    </label>

                    <div className="InputContainer">
                      <Field
                        type="text" 
                        name="login"
                        id="login"
                        placeholder="type your login"
                        autoComplete="off"
                      />
                    </div>

                    {(errors.login && touched.login) && (
                      <p className='ErrorMessage'>{errors.login}</p>
                    )}
                  </div>

                  <div className="FormGroup">
                    <label className="Label" htmlFor="password">
                      Password
                    </label>

                    <div className="InputContainer">
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="type your password"
                        autoComplete="off"
                      />
                    </div>

                    {(errors.password && touched.password) && (
                      <p className='ErrorMessage'>{errors.password}</p>
                    )}
                  </div>

                  <div className="ButtonContainer">
                    <button
                      type="submit" 
                      disabled={!(isValid && dirty)}
                    >
                      Sign up
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
