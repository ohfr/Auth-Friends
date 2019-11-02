import React, {useState, useEffect} from 'react';
import { api } from '../utils/api';

const Login = (props) => {
    const [error, setError] = useState();
    const [data, setData] = useState({
        username:'',
        password: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        api()
        .post('/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
            })
            .catch(err => console.log(err))
    }
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={data.username}  onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

            <button type="submit">Log In</button>
        </form>
    )
}

export default Login;