import React, { useState } from 'react'

function Form() {
    // const [name, setName]= useState("");
    // const [email, setEmail]= useState("");
    // const [password, setPassword]= useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    // const handleName = (e)=> {
    //     setName(e.target.value)
    // }
    // const handleEmail = (e)=> {
    //     setEmail(e.target.value)
    // }
    // const handlePassword = (e)=> {
    //     setPassword(e.target.value)
    // }
    const handleSubmit = (e) => {
          e.preventDefault();
    }
    const handleForm = (e)=> {
        const {name, value} = e.target;
        setFormData({...formData,[name]:value})
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name: 
            <input type='text' value={formData.name} name={"name"} onChange={handleForm} />
        </label>
        <label>
            Email: 
            <input type='email' value={formData.email} onChange={handleForm} name={"email"} />
        </label>
        <label>
            password: 
            <input type='password' value={formData.password} onChange={handleForm} name={"password"} />
        </label>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form