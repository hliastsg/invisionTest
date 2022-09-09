import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadusers } from "../store/reducers/usersReducer.js";
import { useEffect, useState } from "react";
import axios from 'axios';

 const Users = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.list);
  const [count, setCount] = useState(0);
  useEffect(() => {
      dispatch(loadusers());
  }, [dispatch]);

  const handleToggle = (e, user) => {
    console.log(user);
    axios.put(`https://ilias.users.challenge.dev.monospacelabs.com/users/${user.id}`, {
      active: !user.active
    })
    .then((res) => {
      console.log(res.data);
      setCount(count + 1)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  console.log(count);
  return (
    <div className="invision">
      <div className="header">
        <i className="fa-solid fa-users"></i>
       <h1>Users</h1>
      </div>
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">TYPE</th>
          <th scope="col">NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">TELEPHONE</th>
          <th scope="col">STATUS</th>
        </tr>
      </thead>
      <tbody>
          {users.map((user) => (
            <tr >
            <th scope="row" key={user.id} style={{display: "inline-flex", alignItmes:"center", padding:"5px"}}>
              <input type="checkbox" 
              onChange={(e) => handleToggle(e, user)}
              value={user}
              /><div className={( 
                user.type=== "Stakeholder" ? "stakeholder" 
                : user.type=== "Guest" ? "guest"
                : user.type=== "Employee" ? "employee"
                : user.type === "Supervisor" ? "supervisor"
                : "")}></div></th>
              <td>{user.name}</td>
              <td >{user.email.toLowerCase()}</td>
              <td >{user.phone}</td>
              <td style={{width:"20px",textAlign: "center"}}>
                {(user.active ? <i style={{fontSize: "larger"}}  
                className="fa-solid fa-toggle-on"></i> : 
                <i style={{fontSize: "larger"}} 
                className="fa-solid fa-toggle-off"></i>)}
              </td>
          </tr>
          
        ))}
      </tbody>
    </table>
  </div>
   );
 }
  
 export default Users;