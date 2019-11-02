import React, { useState } from 'react';
import { api } from '../utils/api';


const AddFriend = (props) => {
    const [data, setData] = useState({
        name: '',
        age: '',
        email: '',
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        api()
            .post('/friends', data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        
        setData({
            name: '',
            age: '',
            email: '',
        })
        props.handleReload();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={handleChange} name="name" />
            <input type="number" placeholder="Age" onChange={handleChange} name="age" />
            <input type="email" placeholder="Email" onChange={handleChange} name="email" />

            <button type="submit">Submit</button>
        </form>
    )
}

export default AddFriend;
