import React, { useState } from 'react';
import UserCard from './UserCard';

function SignUpForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [showUserCard, setShowUserCard] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      setShowUserCard(true);
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <>
      {!showUserCard ? (
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <UserCard name={formData.name} email={formData.email} />
      )}
    </>
  );
}

export default SignUpForm;
