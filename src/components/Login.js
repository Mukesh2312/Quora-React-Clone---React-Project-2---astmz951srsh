import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserProvider'


function Login() {
    // const { singInUser } = useUser()
    const navigate = useNavigate()
    const [getData, setData] = useState({

        email: '',
        password: '',
        appType: 'quora'
    })


    const onSubmitHandler = async (e) => {
        e.preventDefault();

        await axios.post('https://academics.newtonschool.co/api/v1/user/login',
            getData, {
            header: {
                'Content-Type': 'application/json',
            }
        }).then((Response) => {
            navigate('/')
            localStorage.setItem('token', Response.data.token)
            console.log(Response.data.token, Response.data.status)
            singInUser({ token: Response.data.token, status: Response.data.status })
        }).catch((err) => {
            console.log(err)
        })
    }

    const onChangerHandler = (e) => {
        setData({ ...getData, [e.target.name]: e.target.value });
    }
    return (
        <div id='registration_section'>
            <h1>Login</h1>

            <form onSubmit={onSubmitHandler}>

                <input type="text" name="email" value={getData.email} id="email" placeholder="Email" required autoComplete="off" onChange={onChangerHandler} />
                <input type="password" name="password" value={getData.password} id="password" placeholder="Password" required autoComplete="off" onChange={onChangerHandler} />

                <label htmlFor="appType" >App Type</label>
                <select name="appType" onChange={onChangerHandler} id="appType" required>
                    <option value="music">quora</option>
                    <option value="album">album</option>
                </select>

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Login
