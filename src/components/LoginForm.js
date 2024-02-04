import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const [showPasword,setShowPassword] = useState(false)

    function changeHandler(event){
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");

        const accountData = {
            ...formData
          };
          
        const finalData = {
            ...accountData,
          }
          console.log("printing Final account data")
          console.log(finalData);
    }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-900
            mb-1 leading-[1.375rem]'>
            Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder='Enter email'
                name="email"
                className='bg-richblack-500 rounded-[0.5rem]
                 text-richblack-900 w-full p-[6px]'
            />

        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-900
            mb-1 leading-[1.375rem]'>
            Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type={showPasword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name="password"
                className='bg-richblack-500 rounded-[0.5rem]
                 text-richblack-900 w-full p-[6px]'
            />

            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPasword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :   
                               (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

        </label>

        <Link to="#"> 
            <p className='text-xs mt-0 text-richblack-900 max-w-max ml-auto'>
                Forgot Password
            </p>
        </Link>

        <button className='bg-blue-500 rounded-[8px] font-medium text-richblack-5 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm;
