import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
 
function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
 
  // READ - Fetch API Data
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 
  // CREATE
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
 
  // DELETE
  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
 
  // UPDATE
  const updateUser = (updatedUser) => {
    const updatedList = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
 
    setUsers(updatedList);
    setEditUser(null);
  };
 
  // EDIT
  const editSelectedUser = (user) => {
    setEditUser(user);
  };
 
  return (
    <div className="container">
      <h1>User CRUD Application</h1>
 
      <UserForm
        addUser={addUser}
        editUser={editUser}
        updateUser={updateUser}
      />
 
      <UserTable
        users={users}
        deleteUser={deleteUser}
        editSelectedUser={editSelectedUser}
      />
    </div>
  );
}
 
export default App;