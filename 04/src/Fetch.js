import React, { useEffect, useState } from 'react'

function Fetch() {
    const [user, setUser] = useState([]);
    useEffect(()=> {
        fetch('https://api.github.com/users')
        .then(res=> res.json())
        .then(data => setUser(data))
        .catch(err => console.log(err));
    },[])
  return (
    <div>
        <h1>User List</h1>
        <ul>
            {
                user.map(user => {
                 return <li key={user.id}>
                   <a href={user.html_url}>{user.login}</a></li>
                })
            }
        </ul>
    </div>
  )
}

export default Fetch