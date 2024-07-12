import React, { useState } from 'react'
import { useForm } from "react-hook-form"

function FormVal() {
  const {register, handleSubmit, formState: {errors}, watch} = useForm();
  const password = watch("password")
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [age, setAge] = useState('');
    // const [gender, setGender] = useState('');
    // const [error, setError] = useState('');

    // const validateForm = () => {
    //     const errors = {};
    //     if(!name){
    //         errors.name = 'name is required'
    //     }
    //     if(!email){
    //         errors.email = 'email is required'
    //     }else if(!/\$+@\$\S+\.\S+/.test(email)){
    //         errors.email = "email is invalid"
    //     }
    //     if(!password){
    //         errors.password = 'password is required'
    //     }else if(password.length <6){
    //         errors.password = 'password must be 6 characters'
    //     }
    //     if(!confirmPassword){
    //         errors.confirmPassword = 'password is required'
    //     }else if(password !== confirmPassword){
    //         errors.confirmPassword = 'password do not match'
    //     }
    //     if(!age){
    //          errors.age = 'age is required'
    //     }
    //     if(!gender){
    //         errors.gender = 'gender is required'
    //    }
    //    return errors;
    // }
    // function handleSubmit(e) {
    //     e.preventDefault()
    //     const validationError = validateForm();
    //     if(Object.keys(validationError).length >0){
    //         setError(validationError);
    //     }else{
    //         console.log('form submitted');
    //     }
    // }
    const onSubmit = data => console.log(data);
  return (
    <div>  <h1>Form Validation</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input type='text' name='name' {...register('name',{required:'name is required', })} /> {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type='email' name='email' {...register('email',{required:'email is required', pattern:{value:/\S+@\S+\.\S+/, message:"email is invalid"}})}/>{errors.email && <span>{errors.email.message}</span>}
      </div>
        <div>
        <label>Password:</label>
        <input type='password' name='password'{...register('password',{required:'password is required', minLength:{value:6, message:'password must be 6 character' }})} />{errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label>confirm Password:</label>
        <input type='password' name='confirmpassword'{...register('confirmpassword',{required:'confirmpassword is required', validate: value => value === password || 'password do not match'})}/>{errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </div>
      <div>
        <label>age:</label>
        <input type='text' name='age' {...register('age',{required:'age is required', })} />{errors.age && <span>{errors.age.message}</span>}
      </div>
      <div>
        <label>gender:</label>
        <select name='gender' {...register('gender',{required:'gender is required', })} >
        <option value="">Select Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        </select>{errors.gender && <span>{errors.gender.message}</span>}
      </div>
      <button type='submit'>Submit</button>
    </form></div>
  )
}

export default FormVal