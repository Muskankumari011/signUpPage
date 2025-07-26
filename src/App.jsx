import React, { useState } from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MySite</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function UserCard({ name, email }) {
  return (
    <div className="user-card">
      <h3>User Details</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

function SignUpForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, email });
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar />
      <div className="container">
        {!user ? (
          <SignUpForm onSubmit={setUser} />
        ) : (
          <UserCard name={user.name} email={user.email} />
        )}
      </div>
    </>
  );
}

export default App;
