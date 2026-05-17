 import React, { useEffect, useState } from "react";
 
function UserForm({ addUser, editUser, updateUser }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
 
  useEffect(() => {
    if (editUser) {
      setUser(editUser);
    }
  }, [editUser]);
 
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (editUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
 
    setUser({
      name: "",
      email: "",
      phone: "",
    });
  };
 
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={user.name}
        onChange={handleChange}
        required
      />
 
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={handleChange}
        required
      />
 
      <input
        type="text"
        name="phone"
        placeholder="Enter Phone"
        value={user.phone}
        onChange={handleChange}
        required
      />
 
      <button type="submit">
        {editUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
}
 
export default UserForm