import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError('Please fill out all fields.');
      return;
    }
    alert('Form submitted successfully!');
    setForm({ name: '', email: '', password: '' });
    setError('');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" />
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
