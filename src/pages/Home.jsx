import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User"
import { Link } from "react-router-dom";


function Home() {
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // const {data} destructs the object and extracts the 'data' property from the api
    setUsers(data);
    // Sets the variable "users" to 'data' which is an object
  }
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 2000);
  });

  function renderUsers() {
    return users.map((user) => (
            <Link to = {`/users/${user.id}`} key = {user.id}>
              <User
              id={user.id}
              name={user.name}
              email={user.email}
              username={user.username}
              //username is the prop, {user.username} is the data that needs to be passed in
              />
            </Link>  
            )) 
  }

  function renderSkeletonLoading() {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {users.length ? renderUsers() : renderSkeletonLoading()
    }
    </div>
  );

  /* 
    
    Shorter:
    return <h1>{users?[0].name}</h1>
    // this means when it might be undefined

    Longer:
    return <h1>{users.length > 0 ? users[0].name : null}</h1>
    
    
    */
}

export default Home;
