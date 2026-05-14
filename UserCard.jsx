
const UserCard = ({ user }) => {
  return (
    <div className="card">
      <h2>{user.name}</h2>

      <p>
        <strong>User ID:</strong> {user.id}
      </p>

      <p>
        <strong>Username:</strong> {user.username}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <p>
        <strong>Website:</strong> {user.website}
      </p>

      <p>
        <strong>Company:</strong> {user.company.name}
      </p>

      <p>
        <strong>Address:</strong> {user.address.street}
      </p>

      <p>
        <strong>City:</strong> {user.address.city}
      </p>

      <p>
        <strong>Zipcode:</strong> {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;