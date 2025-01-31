import React, { useEffect, useState } from 'react'
import style from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [signupUser, setSignupUser] = useState([]);
  const navigate = useNavigate();

  const getExistingUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:6060/users");
      setSignupUser(data);
    } catch (error) {
      alert("Error Occured while fetching Data: ", error)
    }
  }
  const validateUser = () => {
    const validatedUser = signupUser.find((user) => (formData.email === user.email && formData.password === user.password));
    console.log(validatedUser)
    if (validatedUser) {
      toast.success("User Logged in SucceFully....");
      localStorage.setItem("userid", validatedUser.id);
      navigate("/allproducts");
    }else{
      toast.error("Invalid credentials")
    }
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit =  (e) => {
    e.preventDefault();
    validateUser();
    setFormData({ email: "", password: "" })
  }


  useEffect(() => {
    getExistingUser();
  }, [])
  return (
    <div id={style.login_container}>
      <h1>Welcome Login</h1>
      <form onSubmit={handleSubmit} className={style.form_container}>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" id="email" value={formData.email} name='email' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="text" id="password" value={formData.password} name='password' onChange={handleChange} />
        </div>
        <div className={style.button_container}>
          <button type='submit'>Login</button>
        </div>
      </form>
      <section className={style.signup_link}>
        <p>Don't have account <Link to="/signup">signup</Link></p>
      </section>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default Login