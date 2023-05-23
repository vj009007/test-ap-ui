import { useState } from "react";
import Image from "next/image";
import googleIcon from "../../public/google-icon.svg";
import { Typography, Box } from "@mui/material";
import Link from "next/link";

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
          <input id="password" type="password" className="mb-4" required />
          <br />
          <label htmlFor="password">Confirm password</label>
          <input id="password" type="password" required />
          <br />
          <button type="submit" className="btn-style mt-8 w-full">
            Sign up
          </button>

          <button className="google-btn">
            <Image src={googleIcon} alt="Google Icon" /> <span>Use Google</span>
          </button>
          <hr />
          <Typography>Have an account?</Typography>
          <Box className="text-center mt-2">
            <Link href="#" className="sign-link text-right">
              Sign in
            </Link>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
