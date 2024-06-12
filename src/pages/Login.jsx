import React, { useState } from 'react'
import {useFormik} from "formik"
import * as Yup from "yup"

const Login = () => {
   

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string()
            .required("Required")
            .min(6, "Password must be at least 6 characters")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/\d/, "Password must contain at least one number")
            .matches(/[@$!%*?&#]/, "Password must contain at least one special character")

        }), 
        onSubmit: (values) => {
            console.log(values);
        }
    })

    // console.log(formik.errors);

  return (
    <main className='min-h-screen bg-gray-500 flex justify-center items-center'>
      <form onSubmit={formik.handleSubmit} action="" className='border  bg-slate-100 w-[500px] p-10 rounded shadow'>
        <h1 className='text-center'>Login</h1>
        <div className="input-container flex flex-col justify-between my-4">
            <label htmlFor="">EmailAddress:</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='enter your email address'    
                className='min-w-[300px] border p-2 rounded outline-none focus:ring focus:ring-blue-100'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />

                {formik.touched.email && formik.errors.email ? <p className='text-red-600'>{formik.errors.email}</p> : null}
        </div>
        <div className="input-container flex flex-col justify-between mb-4">
            <label htmlFor="">Password:</label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='enter your email address' 
                className='min-w-[300px] border p-2 rounded outline-none focus:ring focus:ring-blue-100'   
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                
                {formik.touched.password && formik.errors.password ? <p className='text-red-600'>{formik.errors.password}</p> : null}
        </div>
        <div className="btn-container flex flex-col gap-3">
            <button type='submit' className='border p-2 rounded hover:bg-slate-200 active:bg-slate-300 active:outline-2 active:outline-red-950 hover:ring'>Login</button>
            <button className='border p-2 rounded hover:ring'>Login with google</button>
        </div>
      </form>

    </main>
  )
}

export default Login
