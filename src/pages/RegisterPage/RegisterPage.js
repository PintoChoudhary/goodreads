import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import './styles.css'
function RegisterPage() {
    const [requestResponse, SetRequestResponse] = useState({
        textMessage: '',
        alertClass: ''
    })
    const initialValues = {
        fullname: '',
        mobile: '',
        email: '',
        password: ''

    }
    const onSubmit = (values) => {
        axios.post('https://orca-app-jhg4l.ondigitalocean.app/api/auth/register', values,)
            .then((response) => {
                console.log('Submit button clicked');
                SetRequestResponse({
                    textMessage: response.data.message,
                    alertClass: 'alert alert-success'
                })
            }, (error) => {
                SetRequestResponse({
                    textMessage: error.response.data.message,
                    alertClass: 'alert alert-danger'
                })
            })
            .catch(error => console.log(error))
    };
    const validationSchema = Yup.object({
        fullname: Yup.string().required('Full Name is required '),
        mobile: Yup.string().required('Mobile is required '),
        email: Yup.string().required('Email is required ').email('Email should be valid email'),
        password: Yup.string().required('Password is required ').min(6, 'Password should be atleast 6 characters'),
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <div className={requestResponse.alertClass}>
                            {requestResponse.textMessage}
                        </div>
                        <h2>Register</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="">Full Name</label>
                                <input type="text" className={formik.touched.fullname && formik.errors.fullname ? "form-control is-invalid" : "form-control"} name='fullname' value={formik.values.fullname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.fullname && formik.errors.fullname ? <span className='text-danger'>{formik.errors.fullname}</span> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mobile</label>
                                <input type="text" className={formik.touched.mobile && formik.errors.mobile ? "form-control is-invalid" : "form-control"} name='mobile' value={formik.values.mobile} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.mobile && formik.errors.mobile ? <span className='text-danger'>{formik.errors.mobile}</span> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email Address</label>
                                <input type="text" className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"} name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.email && formik.errors.email ? <span className='text-danger'>{formik.errors.email}</span> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"} name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.password && formik.errors.password ? <span className='text-danger'>{formik.errors.password}</span> : null}
                            </div>
                            <button type='submit' className="btn btn-block btn-light btn-outline-dark" disabled={!formik.isValid} ><b>Register</b></button>
                        </form>
                        <br />
                        <p className="text-center">
                            Already Registered? <Link to='/login'>Go To Login</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default RegisterPage
