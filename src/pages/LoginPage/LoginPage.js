import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate()
  const [requestResponse, SetRequestResponse] = useState({
    textMessage: '',
    alertClass: ''
  })
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Email should be a valid email'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password should be at least 6 characters')
  });

  const onSubmit = (values) => {
    axios.post('https://orca-app-jhg4l.ondigitalocean.app/api/auth/login', values,)
      .then((response) => {
        SetRequestResponse({
          textMessage: 'login successfull',
          alertClass: 'alert alert-success'
        })
        localStorage.setItem('token' , response.data.token)
        localStorage.setItem('user' ,JSON.stringify(response.data.user) )
        navigate('/')
      }, (error) => {
        SetRequestResponse({
          textMessage: error.response.data.message,
          alertClass: 'alert alert-danger'
        })
      })
      .catch(error => console.log(error))
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
            <div className={requestResponse.alertClass}>
              {requestResponse.textMessage}
            </div>
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      className={
                        formik.touched.email && formik.errors.email
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                    />
                    <ErrorMessage name="email" component="small" className="text-danger" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={
                        formik.touched.password && formik.errors.password
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                    />
                    <ErrorMessage name="password" component="small" className="text-danger" />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block btn-light btn-outline-dark"
                    disabled={!formik.isValid}
                  >
                    Login
                  </button>
                </Form>
              )}
            </Formik>
            <br />
            <p className="text-center">
              Not registered? <Link to="/register">Go To Registration</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default LoginPage;
