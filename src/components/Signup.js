import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()

    useEffect(() => {
        const auth=localStorage.getItem('user')
        if (auth)
        {
            navigate('/')
        }
        // eslint-disable-next-line
    },[])
        
        

    const submit = async (e) => {
        e.preventDefault()
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        result = await result.json()
        console.log(result)
        localStorage.setItem('user',JSON.stringify(result.user))
        localStorage.setItem('token',JSON.stringify(result.auth))
        if(result){
            navigate('/')
        }

    }






    return (
        <>

            <div className="col-md-4 container justify-content-center">
                <div className="container my-5">
                    <h1>Register Here</h1>
                    <form>
                        <div className="form-group my-3">
                            <label htmlFor="name">Name</label>
                            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="name" placeholder="Enter name" value={name} onChange={(e) => { setName(e.target.value) }} />

                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Signup
