import React from 'react'
import { useEffect, useState } from 'react'
import QA_Array from '../../QA_Array';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Q_array from '../../Q_array';
// import QA_Array from '../../QA_Array';
function QA_page({ setLogIn, setLogOut, loginData, setLoginData , isLoggedIn}) {

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

  const handleAddAnswer = (id) =>{

  } 

  return (
    <>

      {
        !isLoggedIn ? "Error" :
          <>
            <div className=" mt-3">
              <section className='d-flex'>
                <div className='leftData col-md-6'>
                  <h1 style={{marginLeft:'8rem'}}>QA....</h1>
                  {qa_Array.slice(0).reverse().map((el, index) => {
                    return (
                      <div className="d-flex justify-content-center" key={index}>
                        <Card style={{ width: '38rem', margin: '1rem' }}>
                          <Card.Header style={{ backgroundColor: "#dc3545", color: "white" }}>Q: {el.question}</Card.Header>
                          <Card.Body className='mt-3 w-200'>
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

                <div className='rightData col-md-6 mt-5'>
                  <h3>Want to answer this questions</h3>

                  {q_Array.slice(0).reverse().map((el, index) => {
                    return (
                    <Card key={index} style={{ width: '38rem', margin: '1rem' ,borderBottom:"3px solid #dc3545" }}>
                      <Card.Header style={{ marginTop: "10px" }}>
                        Q: {el.question}
                      </Card.Header>
                    </Card>)
                  })}
                </div>
              </section>
            </div>
          </>
      }

    </>
  )
}

export default QA_page

// import React, { useState, useEffect } from 'react';

// const TodoList = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const items = localStorage.getItem('items');

//     if (items) {
//       setItems(JSON.parse(items));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('items', JSON.stringify(items));
//   }, [items]);

//   const handleAddItem = (event) => {
//     event.preventDefault();

//     const newItem = event.target.elements.item.value;

//     if (newItem) {
//       setItems([...items, newItem]);

//       event.target.elements.item.value = '';
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleAddItem}>
//         <input type="text" name="item" />
//         <button>Add Item</button>
//       </form>
//       <ul>
//         {items.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
