import { Typography, Box, Link, Button, TextField } from "@mui/material";
import ProfilePic from "../../public/profile-pic.svg";
import downloadIcon from "../../public/download-2.svg";
import deleteIcon from "../../public/delete-color.svg";
import Image from "next/image";
import { useState } from "react";

const Settings = () => {


//     const [image, setImage] = useState({ preview: "", raw: "" });

//   const handleChange = e => {
//     if (e.target.files.length) {
//       setImage({
//         preview: URL.createObjectURL(e.target.files[0]),
//         raw: e.target.files[0]
//       });
//     }
//   };

//   const handleUpload = async e => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("image", image.raw);

//     await fetch("YOUR_URL", {
//       method: "POST",
//       headers: {
//         "Content-Type": "multipart/form-data"
//       },
//       body: formData
//     });
//   };

  
  return (
    <>
      <Typography variant="h1" className="pt-1">
        Settings
      </Typography>
      <Box className="table-wrapper mt-7 setting-screen">
        <Box className="p-6">
            <Box className="flex items-start justify-between">
                <Box className="profile-details">
                  <Image src={ProfilePic} alt="profile pic" className="rounded-full min-w-[100px] max-w-[100px] min-h-[100px]" />
                    {/* <label htmlFor="upload-button"> {image.preview ? (
                        <img src={image.preview} alt="dummy" width="300" height="300" className="rounded-full min-w-[100px] max-w-[100px] min-h-[100px]" />
                        ) : (
                        <>
                            <Image src={ProfilePic} alt="profile pic" className="rounded-full min-w-[100px] max-w-[100px] min-h-[100px]" />
                        </>
                        )}
                     </label> */}
                    
                    <Box>
                        <Typography className="user-pic">User photo</Typography>
                        <Box className="flex items-center gap-3 mt-3">
                            <input  type="file" id="upload-button" style={{ display: "none" }}  />
                            <Button className="" ><Image src={downloadIcon} alt="Download" /> <span className="text-green-gradient font-medium">Upload new</span> </Button>
                            <Button><Image src={deleteIcon} alt="Download" /> <span className="text-[#F65374] underline font-medium">Delete</span> </Button>
                        </Box>
                        <Typography className="text-white text-opacity-70 formate-text">
                            Format .png or .jpg <br />
                            The maximum size is 5Mb
                        </Typography>
                    </Box>

                </Box>
                <Link className="logout">Log out</Link>
            </Box>

            <Box className="mt-8 max-w-[501px]">
                <form action="#" className="form">
                    <Box className="w-full">
                        <Typography className="address-form">API key</Typography>
                        <TextField  id="standard-basic" variant="standard"  className="input w-full input-copy"   value="AIzaSyB_о6aE0W-cKjzpXHSxolDoxh0L9kgil-I" />
                    </Box>
                    <Box className="w-full mt-6">
                        <Typography className="address-form">Email</Typography>
                        <Box className="w-full flex items-center gap-6">
                            <TextField  id="standard-basic" variant="standard" type="mail" className="input w-full"   value="vinocosta@gmail.com" />
                            <Button className="underline"><span className="text-green-gradient font-medium">Change</span></Button>
                        </Box>
                    </Box>
                    <Box className="w-full mt-6">
                        <Typography className="address-form">Password</Typography>
                        <Box className="w-full flex items-center gap-6">
                            <TextField  id="standard-basic" variant="standard" type="password"  className="input w-full"   value="***************************" />
                            <Button className="underline"><span className="text-green-gradient font-medium">Change</span></Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
      </Box>
    </>
  );
};

export default Settings;

