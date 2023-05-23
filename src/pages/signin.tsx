import { Box, Link, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import Image from "next/image";
import googleIcon from "../../public/google-icon.svg";

const LoginPage = () => {
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await signIn("cognito", {
      redirect: false,
      email,
      password,
    });

    // if (result.error) {
    //   console.error(result.error);
    // } else {
    //   window.location.href = "/dashboard";
    // }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup sign-screens">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="vinoCosta@gmail.com"
            className="mb-4"
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" required />
          <br />
          <Box className="text-right">
            <Link href="#" className="sign-link text-right">
              Forgot password
            </Link>
          </Box>
          <button type="submit" className="btn-style w-full mt-8">
            Sign in
          </button>
          <button className="google-btn">
            <Image src={googleIcon} alt="Google Icon" /> <span>Use Google</span>
          </button>
          <hr />
          <Typography>Don’t have an account?</Typography>
          <Box className="text-center mt-2">
            <Link href="#" className="sign-link text-right">
              Sign up
            </Link>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
