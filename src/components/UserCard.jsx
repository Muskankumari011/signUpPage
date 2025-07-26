import React from 'react';

function UserCard({ name, email }) {
  return (
    <div className="user-card">
      <h3>User Information</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default UserCard;
