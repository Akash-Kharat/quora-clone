import { useState } from 'react'
import './App.css'
import { NavBar ,MainPage, QA_page, Error404, Add_Question, Answer_Question} from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
function App() {
  // const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  const [loginData, setLoginData] = useState([]);
  const setLogIn =()=>{
    setIsLoggedIn(true);
  }

  const setLoggedOut=()=>{
    setIsLoggedIn(false);
  }



  return (
    <>

     <NavBar isLoggedIn={isLoggedIn} loginData={loginData}setLogOut={setLoggedOut}/>
     <Routes>
      <Route path='/' element={<MainPage isLoggedIn={isLoggedIn}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logs' element={<QA_page isLoggedIn={isLoggedIn} setLogIn={setLogIn}  loginData={loginData} setLoginData={setLoginData}/>}/>
      <Route path='/addquestion' element={<Add_Question/>}/>
      <Route path='/answer' element={<Answer_Question/>}/>
      <Route path='*' element={<Error404/>}/>
     </Routes>

    </>
  )
}

export default App
