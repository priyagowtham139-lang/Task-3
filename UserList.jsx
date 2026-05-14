                                                                                                                                                                                         import React from "react";
import useUsers from "../hooks/useUsers";
import UserCard from "./UserCard";

const UserList = () => {
  const { users, loading, error } = useUsers();

  if (loading) {
    return <h2 className="status">Loading...</h2>;
  }

  if (error) {
    return <h2 className="status">{error}</h2>;
  }

  return (
    <div className="container">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;