import { useState } from "react";

const SignUpPage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(data.message);
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup sign-screens"> 
        <h1>Sign Up</h1>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="mb-4" required />
          <br />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" required />
          <br />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
