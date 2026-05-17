 import React from "react";
 
function UserTable({ users, deleteUser, editSelectedUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
      </thead>
 
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
 
            <td>
              <button
                className="edit-btn"
                onClick={() => editSelectedUser(user)}
              >
                Edit
              </button>
 
              <button
                className="delete-btn"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
 
export default UserTable;