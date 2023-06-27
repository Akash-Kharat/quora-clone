import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function MainPage() {

  const  [inputValue, setInputValue] = useState({
          name:"",
          email:"",
          password:"",
  },)

  const [data, setdata] = useState([]);
  const history = useNavigate();
  const getData= (e)=>{
    // console.log(e.target.value);

    const{value,name} = e.target;
    // console.log(value, name);

    setInputValue(()=>{
    return {
      ...inputValue,
      [name]:value
    }
    })
  
  }

  const addData = (e)=> {
    e.preventDefault();
    // console.log(inputValue);
    const{name, email,password} = inputValue;

    if(name === ""){
      alert("Name field is required");
    }
    else if(email ===""){
      alert("email field is required");
    }
    else if(!email.includes("@")){
      alert("Please enter valid Email Address");
    }
    else if(password ===""){
      alert("password field is required");
    }
    else if(password.length <8){
       alert("Password should atleast 8 charactor");
    }
    else{
      console.log("Data added succesfully");
      // const readData = JSON.parse(localStorage.getItem("user_Quora"));
      // setdata(readData));
      // setdata(localStorage.de)
      localStorage.setItem("user_Quora",JSON.stringify([...data,inputValue]));
      history("/")
    }


  }

  return (
    <>
      <div className='container mt-3 '>
        <section>
          <div className="leftData col-lg-6">
            <h3 className='mb-3'style={{textAlign:"center"}}>Sign Up</h3>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name='name' onChange={getData} placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={addData} style={{backgroundColor:"rgb(185, 43, 39)"}}>
                Submit
              </Button>
            </Form>
            <p className='mt-3'> Already Have an Account? <span > <NavLink to="/login">Sign In</NavLink></span></p>
          </div>
          <div className="rightData col-lg-6">
            <div className="sign_img">

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MainPage

