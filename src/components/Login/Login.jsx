import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from "react-router-dom";

function Login({}) {

  const history = useNavigate();
  const todayDate = new Date().toISOString().slice(0,10);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  })

  

  const getData = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value, name);

    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value
      }
    })

  }

  const addData = (e) => {
    e.preventDefault();
    // console.log(inputValue);

    const getUserArray = localStorage.getItem("user_Quora");
    // console.log(getUserArray);

    const {email, password } = inputValue;

    if (email === "") {
      alert("email field is required");
    }
    else if (!email.includes("@")) {
      alert("Please enter valid Email Address");
    }
    else if (password === "") {
      alert("password field is required");
    }
    else if (password.length < 8) {
      alert("Password should atleast 8 charactor");
    }
    else {
        if(getUserArray && getUserArray.length){
          const userData = JSON.parse(getUserArray);
          console.log(userData);

          const userLogin = userData.filter((el,k) =>{
            return el.email ===email && el.password== password
          });

          console.log(userLogin);

          if(userLogin.length ===0){
            alert("invalid details");
          }
          else{
            console.log("User login succesfully");

            localStorage.setItem("user_login", JSON.stringify(userLogin))

            history("/logs")
          }
        }
    }


  }
  return (
    <>
      <div className='container mt-3 '>
        <section>
          <div className="leftData col-lg-6">
            <h3 className='mb-3' style={{ textAlign: "center" }}>Sign IN</h3>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me!" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={addData} style={{ backgroundColor: "rgb(185, 43, 39)" }}>
                Submit
              </Button>
            </Form>
            <p className='mt-3'> Don't Have an Account? <span><NavLink to='/'>Sign UP </NavLink></span></p>
          </div>
          <div className="rightData col-lg-6">
            <div className="sign_img">

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
