import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'


const HomePage = () => {

    const [value, setValue] = useState('one');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const myYupSchema = Yup.object({
        userName: Yup.string().required('Username is required').max(40,"username cannot be Greater than 40 Charcters"),
        password: Yup
            .string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters long'),
        confirmPassword: Yup
            .string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        siteName : Yup.string().required("enter site name"),
        siteUrl : Yup.string().required("enter site url"),
        notes : Yup.string().required('Notes is required'),
        email : Yup
            .string()
            .email('Invalid email format')
            .required('Email ID is required'),
    })

    const myform = useFormik(
        {
            initialValues : {
                userName : '',
                email : '',
                siteName : '',
                siteUrl : '',
                password : '',
                confirmPassword : '',
                notes : ''
            },
            validationSchema : myYupSchema,
            onSubmit : (values) =>{
                console.log(values)
            }
            
        }
    );

  return (

    <div className='' >
           <div className='' style={{marginTop : '1rem', marginLeft : '1rem'}}>
            <Box sx={{ width: '100%' }} columnGap={2} >
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    variant='scrollable'
                    >
                    <Tab value="one" label="Web Apps" />
                    <Tab value="two" label="Cloud db" />
                    <Tab value="three" label="C panel" />
                    <Tab value="four" label="Desktop" />
                    <Tab value="five" label="API" />
                    </Tabs>
                </Box>
           </div>

            <div className='flex items-center justify-center mt-8 mb-16 '>
                <div className='bg-gray-dark frm-width brd-radis'>
                    <div className='flex justify-center items-center'>
                        <h2 className='text-blue'>Password Store</h2>
                    </div>
                    <div className='flex items-center justify-center'>
                        <form className='frm-width mb-10' onSubmit={myform.handleSubmit} >
                            <div className="grid gap-8 mb-6 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
                                <div>
                                    <label htmlFor="userName" className="block mb-2 text-sm font-bold text-green">User Name :</label>
                                    <input type="text" name="userName" className=" border border-gray-300 text-albin text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={myform.handleChange} placeholder="John" />
                                    <div style={{ color: 'red' }}>
                                        {myform.touched.userName && myform.errors.userName}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-green">Email Id :</label>
                                    <input type="email" name="email" className=" border border-gray-300 text-albin text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" onChange={myform.handleChange} />
                                    <div style={{ color: 'red' }}>
                                        {myform.touched.email && myform.errors.email}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="siteName" className="block mb-2 text-sm font-bold text-green">Site Name :</label>
                                    <input type="text" name="siteName" className=" border border-gray-300 text-albin text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" onChange={myform.handleChange} />
                                    <div style={{ color: 'red' }}>
                                        {myform.touched.siteName && myform.errors.siteName}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="siteUrl" className="block mb-2 text-sm font-bold text-green">Site URL :</label>
                                    <input type="text" name="siteUrl" className=" border border-gray-300 text-albin text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" onChange={myform.handleChange} />
                                    <div style={{ color: 'red' }}>
                                        {myform.touched.siteUrl && myform.errors.siteUrl}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-bold text-green">Password :</label>
                                    <input type="password" name="password" className=" border border-gray-300 text-albin text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" onChange={myform.handleChange} />
                                    <div style={{ color: 'red' }}>
                                        {myform.touched.password && myform.errors.password}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-bold text-green">Confirm Password :</label>
                                    <input type="password" name="confirmPassword" className=" border border-gray-300 text-albin text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" onChange={myform.handleChange} />
                                    <div style={{ color: 'red' }}>
                                        {myform.touched.confirmPassword && myform.errors.confirmPassword}
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="notes" className="block mb-2 text-sm font-bold text-green">Key Notes :</label>
                                    <textarea name="notes" className=" border border-gray-300 text-albin text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" onChange={myform.handleChange} />
                                    <div style={{ color: 'red' }}>
                                        {myform.touched.notes && myform.errors.notes}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                </div>
                                <label htmlFor="remember" className="ms-2 text-sm font-bold text-blue dark:text-gray-300"><a href="#" className="text-yellow hover:underline dark:text-blue-500">I deserve that the given password is created by me!!</a></label>
                            </div>
                            <div className="flex items-center justify-center">
                                <button type="submit" className="text-white pntr bg-[#059e14] hover:bg-[#059e14]/90 focus:ring-4 focus:outline-none focus:ring-[#059e14]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                                Save Password
                                </button>
                                <button type="button" className="text-white pntr bg-[#d91309] hover:bg-[#d91309]/90 focus:ring-4 focus:outline-none focus:ring-[#d91309]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                                Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomePage