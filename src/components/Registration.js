import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const [getData, setData] = useState({
        name: '',
        email: '',
        password: '',
        appType: 'quora'
    })

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('https://academics.newtonschool.co/api/v1/user/signup',
            getData, {
            header: {
                'Content-Type': 'application/json',
            }
        }).then((Response) => {
            console.log(Response)
            navigate('/login')
        }).catch((err) => {
            console.log(err)
        })
    }

    const onChangerHandler = (e) => {
        setData({ ...getData, [e.target.name]: e.target.value });
    }
    return (
        <div id='registration_section'>
            <h1>Register</h1>

            <form onSubmit={onSubmitHandler}>
                <input type="text" name="name" value={getData.name} id="name" placeholder="Name" required autoComplete="off" onChange={onChangerHandler} />
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

export default Registration
