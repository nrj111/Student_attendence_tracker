import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();
 const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
 })

 const [showPassword, setShowPassword] = useState(false)
 const [showConfirmPassword, setshowConfirmPassword] = useState(false)

 const [accountType,setAccountType] = useState(false);

 function changeHandler(event){
  setFormData( (prevData) =>(
      {
          ...prevData,
          [event.target.name]:event.target.value
      }
  ))
}

function submitHandler(event) {
  event.preventDefault();
  if(formData.password !== formData.confirmPassword) {
    toast.error("Passwords Do not Match");
    return;
  }
  setIsLoggedIn(true);
  toast.success("Account Created Successfully")
  const accountData = {
    ...formData
  };

  const finalData = {
    ...accountData,
    accountType
  }
  console.log("printing Final account data")
  console.log(finalData);
  
  navigate("/dashboard")
}

  return (
    <div>
      {/* Roles */}
        <div className='flex bg-blue-500 p-1 
        gap-x-1 my-3 rounded-full max-w-max'>
          <button 
          className={`${accountType === "coordinator"
          ?
          "bg-richblack-5 text-richblack-900":
          "bg-transparent text-richblack-5"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("coordinator")}>
            Coordinator
          </button>

          <button 
           className={`${accountType === "HOD"

          ?
          "bg-richblack-5 text-richblack-900":
          "bg-transparent text-richblack-5"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("HOD")}>
            HOD
          </button>

          <button 
          className={`${accountType === "Dean"
          ?
          "bg-richblack-5 text-richblack-900":
          "bg-transparent text-richblack-5"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("Dean")}>
            Dean
          </button>

          <button 
          className={`${accountType === "Director"
          ?
          "bg-richblack-5 text-richblack-900":
          "bg-transparent text-richblack-5"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("Director")}>
            Director
          </button>
        </div>

        <form  onSubmit={submitHandler}>
        {/* Firstname and Lastname */}
          <div className='flex gap-x-4'>
              <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-900
            mb-1 leading-[1.375rem]'>
            First Name<sup className='text-pink-200'>*</sup></p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder='Enter First Name'
              value={formData.firstName}
              className='bg-richblack-500 rounded-[0.5rem]
                 text-richblack-900 w-full p-[6px] border border-slate-200'
            />
              </label>

              <label  className='w-full'>
            <p className='text-[0.875rem] text-richblack-900
            mb-1 leading-[1.375rem]'
            >Last Name<sup className='text-pink-200'>*</sup></p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder='Enter Last Name'
              value={formData.lastName}
              className='bg-richblack-500 rounded-[0.5rem]
                 text-richblack-900 w-full p-[6px] border border-inherit'
            />
              </label>

          </div>

          {/* Department */}
          {accountType !== "Dean" && accountType !== "Director" && (
          <label className="w-1/2">
            Department<sup className="text-pink-200">*</sup>
            <select
              required
              className="bg-richblack-500 rounded-[0.5rem] text-richblack-900 w-full p-[6px] border border-inherit"
            >
              <option selected>Choose a Department</option>
              <option>CSE</option>
              <option>CSE-IT</option>
              <option>CSE-AIML</option>
              <option>CSE-DS</option>
            </select>
          </label>
        )}

          
        {/* Year and Section */}
        {accountType !== "HOD" && accountType !== "Dean" && accountType !== "Director" && (
          <div className="flex">
            <label className="w-1/2">
              Year<sup className="text-pink-200">*</sup>
              <select
                required
                className="bg-richblack-500 rounded-[0.5rem] text-richblack-900 w-full p-[6px] border border-inherit"
              >
                <option selected>Select Year</option>
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
                <option>5th</option>
              </select>
            </label>
            <label className="w-1/2">
              Section<sup className="text-pink-200">*</sup>
              <select
                required
                className="bg-richblack-500 rounded-[0.5rem] text-richblack-900 w-full p-[6px] border border-inherit"
              >
                <option selected>Select Section</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </label>
          </div>
        )}

        {/* Email Address */}
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-900
            mb-1 leading-[1.375rem]'
            >Email Address<sup className='text-pink-200'>*</sup></p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder='Enter Email Address'
              value={formData.email}
              className='bg-richblack-500 rounded-[0.5rem]
                 text-richblack-900 w-full p-[6px] border border-inherit'
            />
          </label>

          {/* createPassword and Confirm Password */}
          <div className='flex gap-x-4'>
            <label className='w-full relative'>
              <p className='text-[0.875rem] text-richblack-900
            mb-1 leading-[1.375rem]'
            >Create Password<sup className='text-pink-200'>*</sup></p>
              <input
                required
                type={showPassword ? ("text"):("password")}
                name="password"
                onChange={changeHandler}
                placeholder='Enter Password'
                value={formData.password}
                className='bg-richblack-500 rounded-[0.5rem]
                 text-richblack-900 w-full p-[6px] border border-inherit'
              />
                <span className='absolute right-3 top-[38px] cursor-pointer'
                 onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
                                  (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
              </span>
            </label>

            <label className='w-full relative'>
              <p className='text-[0.875rem] text-richblack-900
            mb-1 leading-[1.375rem]'
            >Confirm Password<sup className='text-pink-200'>*</sup></p>
              <input
                required
                type={showConfirmPassword ? ("text"):("password")}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder='Enter Password'
                value={formData.confirmPassword}
                className='bg-richblack-500 rounded-[0.5rem]
                 text-richblack-900 w-full p-[6px] border border-inherit'
              />
                <span className='absolute right-3 top-[38px] cursor-pointer'
                 onClick={() => setshowConfirmPassword((prev) => !prev)}>
                  {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                                  (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
              </span>
            </label>

          </div>

          {/* Create Account button */}
          <button className='w-full bg-blue-500 rounded-[8px] font-medium text-richblack-5 px-[12px] py-[8px] mt-6'>
            Create Account
          </button>

        </form>

    </div>
  )
}

export default SignupForm;
