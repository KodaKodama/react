import React, { useEffect, useState } from 'react'

function MultiReturn() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]= useState(null);

    useEffect(()=> {
        async function fetchUser(){
            try{
                const response = await fetch('https://api.github.com/users');
                const data = await response.json();
                setUsers(data);
                setIsLoading(false);
            }
            catch(error){
                setError(error);
                setIsLoading(false)
            }
        }
        fetchUser()
    },[])
    if(isLoading){
        return <p>...loading</p>
    } 
    if(error){
        return <p>Error: {error.message}</p>
    }
  return (
    <div>
        <h1>users List</h1>
        <ul>
        {users.map(user=>{
            return <li key={user.id}>{user.login}</li>
        })}
        </ul>
    </div>
  )
}

export default MultiReturn