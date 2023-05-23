import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import Image from "next/image";
import googleIcon from "../../public/google-icon.svg";
import close from "../../public/Close.svg";
import React from "react";

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

//     if (result.error) {
//       console.error(result.error);
//     } else {
//       window.location.href = "/dashboard";
//     }
//   };
  //POPUP Model
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <input id="password" type="password" className="error" required />
          <br />
          <Box className="text-right flex items-center justify-between">
            <Typography className="error-text">Incorrect value</Typography>
            <Link
              href="#"
              className="sign-link text-right"
              onClick={handleClickOpen}
            >
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
      {/* POPUP Model */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="signup-popup"
        aria-describedby="alert-dialog-description"
        className="sign-popup w-full"
      >
        <DialogTitle id="signup-popup">{"Forgot password?"}</DialogTitle>
        <DialogContent className="sign-screens px-0 pb-8">
          <form action="#">
            <label htmlFor="email">Write your email:</label>
            <input
              id="email"
              type="email"
              placeholder="vinoCosta@gmail.com"
              required
            />
            <button type="submit" className="btn-style mt-8">
              Sign in
            </button>
          </form>
        </DialogContent>
        <Button onClick={handleClose} className="popup-close">
          <Image src={close} alt="alt" />
        </Button>
      </Dialog>
      {/* POPUP Model */}
    </div>
  );
};

export default LoginPage;
