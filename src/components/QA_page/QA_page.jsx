import React from 'react'
import { useEffect, useState } from 'react'
import QA_Array from '../../QA_Array';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Q_array from '../../Q_array';
// import QA_Array from '../../QA_Array';
function QA_page({ setLogIn, setLogOut, loginData, setLoginData }) {

  const history = useNavigate();
  const [qa_Array, setqa_Array] = useState(QA_Array);
  const [q_Array, setq_Array] = useState(Q_array);
  // const [loginData, setLoginData] = useState([]);
  const getuserData = () => {
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);
    }

  }
  useEffect(() => {
    setLogIn();
    getuserData();
  }, [])


  return (
    <>

      {
        loginData.length === 0 ? "Error" :
          <>
          <div className="container mt-3">
            <section>
          <div className='leftData col-md-6'>
            <h1>QA....</h1>
            {qa_Array.slice(0).reverse().map((el, index) => {
              return (

                <div className="d-flex justify-content-center" key={index}>

                  <Card style={{ width: '38rem', margin: '1rem' }}>
                    <Card.Header>Q: {el.question}</Card.Header>
                    <Card.Body className='mt-3 w-200'>
                      <Card.Title></Card.Title>
                      <Card.Text>
                        A: {el.answer}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

              )
            })
            }
            </div>
            
            <div className='rightData col-md-6'>
              <Card>
                {q_Array.map((el, index) => {
                  return (
                    <Card.Header key={index}>
                      Q: {el.question}
                    </Card.Header>
                  )
                })}</Card>
            </div>
            </section>
            </div>
          </>
      }

    </>
  )
}

export default QA_page