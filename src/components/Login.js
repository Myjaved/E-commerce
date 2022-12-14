import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()

    useEffect(() => {
        const auth=localStorage.getItem('user')
        if (auth)
        {
            navigate('/')
        }
        // eslint-disable-next-line
    },[])

    const handleLogin=async ()=>{
        let result=await fetch('http://localhost:5000/login',{
            method:"post",
            body:JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result=await result.json()
        console.log(result)
        if(result.auth){
            localStorage.setItem('user',JSON.stringify(result.user))
            localStorage.setItem('token',JSON.stringify(result.auth))
            navigate('/')
        }
        else{
            alert("Please enter correct details")
        }


    }

    return (
        <div>
            <form className='col-md-4 container my-5'>
                <h2>Login</h2>

                <div className="form-outline my-1">
                    <label htmlFor="name">Email address</label>
                    <input type="email" id="form2Example1" className="form-control" placeholder="Enter email" value={email}  onChange={(e)=>setEmail(e.target.value)} />
                </div>


                <div className="form-outline my-4">
                <label htmlFor="name">Password</label>
                    <input type="password" id="form2Example2" className="form-control" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="text-center">
                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleLogin}>Sign in</button>
                </div>

                <div className="text-center">
                    <p>Not a member? <a href="/signup">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login
