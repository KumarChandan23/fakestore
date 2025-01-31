import React, { useState } from 'react'
import style from './SignUp.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {

  const [formData , setFormData]  = useState({username:"", email:"", password:"", gender:"", mobile:"", dob: ""})
  function handleChange(e){
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  const  handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.post("http://localhost:6060/users", formData);
      alert("Data Sumitted SucceFully");
      setFormData({username:"", email:"", password:"", gender:"", mobile:"", dob:""})
    } catch (error) {
      alert("Error Occured: ", error);
    }
  }

  return (
    <div id={style.signup_container}>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit} className={style.signup_form_container}>
        <div>
          <label htmlFor="username">user name</label>
          <input type="text" name="username" value={formData.username} id="username" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" value={formData.email} id="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="mobile">phone number</label>
          <input type="text" name="mobile" value={formData.mobile} id="mobile" maxLength="10" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="gender">gender</label>
          <div className={style.gender_container}>
            <input type="radio" name="gender" checked={formData.gender === "male"} id="male" value="male" onChange={handleChange} />
            <label htmlFor="male">male</label>
            <input type="radio" name="gender" checked={formData.gender === "female"} id="female" value="female" onChange={handleChange} />
            <label htmlFor="female">female</label>
            <input type="radio" name="gender" checked={formData.gender === "other"} id="other" value="other" onChange={handleChange} />
            <label htmlFor="other">other</label>
          </div>
        </div>
        <div>
          <label htmlFor="dob">date of birth</label>
          <input type="date" name="dob" value={formData.dob} id="dob" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" name="password" value={formData.password} id="password" onChange={handleChange} />
        </div>
        <div className={style.button_container}>
          <button>Submit</button>
        </div>
      </form>
      <section className={style.login_link_container}>
        <p>All ready have an Accout <Link to='/login'>login</Link></p>
      </section>
    </div>
  )
}

export default Signup