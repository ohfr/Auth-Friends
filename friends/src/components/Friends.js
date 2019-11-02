import React, {useState, useEffect } from 'react';
import {api} from '../utils/api';
import AddFriend from './AddFriend';

const Friends = (props) => {
    const [data, setData] = useState();
    const [friend, setFriend] = useState(false);
    const [reload, setReload] = useState(false)
    useEffect(() => {
        api().get('/friends')
            .then(res => {
                setData(res.data)
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [reload])
    const handleClick = () => {
        setFriend(!friend)
    }

    const handleReload = () => {
        setReload(!reload)
    }
    return (
        <div>
            <button onClick={handleClick}>Add Friend</button>
            {friend && <AddFriend handleReload={handleReload} />}
            {data && data.map((cur, index) => {
                return <div key={index}>
                    <h1>{cur.name}</h1>
                    <p>{cur.email}</p>
                    <p>{cur.age}</p>
                    </div>
            })}
        </div>
    )
}

export default Friends;