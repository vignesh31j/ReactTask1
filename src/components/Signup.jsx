import React, { useState } from 'react'
import '../CSS/Signup.css'

const Signup = () => {
    const [IsLogin,setCount] = useState("Login")

  return (
    <>
        <div className="Container">
            <h1 className='Heading'>{IsLogin} Page</h1>
            {IsLogin === "Login" ? <div>
                <form action="" className='form'>
                    <label htmlFor="">UserName :</label>
                    <input type="text" required/>
                    <label htmlFor="">Password :</label>
                    <input type="password" required/>
                    <a href="">Forget Password?</a>
                </form>
            </div> : <div>
                <form action="" className='form'>
                    <label htmlFor="">Name :</label>
                    <input type="text" required/>
                    <label htmlFor="">Email :</label>
                    <input type="email" required/>
                    <label htmlFor="">UserName :</label>
                    <input type="text" required/>
                    <label htmlFor="">Create Password :</label>
                    <input type="password" required/>
                    <label htmlFor="">Confirm Password :</label>
                    <input type="password" required/>
                </form>
            </div> }
            <div className='buttons'>
                <button className={IsLogin === "Login" ? "BlueButton" : "WhiteButton"} onClick={()=>setCount("Login" )}>Login</button>
                <button className={IsLogin === "Signup" ? "BlueButton" : "WhiteButton"} onClick={()=>setCount("Signup")}>Signup</button>
            </div>
        </div>    
    </>
  )
}

export default Signup
