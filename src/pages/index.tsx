import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.svg";
import profile from "../../public/profile.svg";
import { Poppins } from "next/font/google";
import english from "../../public/en.svg";
import esIcon from "../../public/es.svg";
import dtIcon from "../../public/dt.svg";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, FormControl, Link, List, ListItem, MenuItem, Select, SelectChangeEvent, Tab, Typography,} from "@mui/material";
import React from "react";
import { TabContext } from "@mui/lab";
import Quickcheck from "./quickcheck";
import Dataset from "./dataset";
import Settings from "./setting";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "600"],
});

export default function Home() {
  const [age, setAge] = React.useState("10");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState("1");

  const tabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <main className={` ${poppins.className} `}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header flex items-center justify-between">
        <Box className="flex items-center gap-16">
          <Box className="logo">
            <Image src={logo} alt="logo" className="block img-full mx-auto" />
          </Box>
          <List className="m-0 p-0">
            <ListItem className="p-0">
              <Link className="link">Home page</Link>
            </ListItem>
          </List>
        </Box>
        <Box className="flex items-center gap-10">
          <Box className="country-dropdown">
            <FormControl
              sx={{ m: 0, minWidth: 70 }}
              size="small"
              className="text-white"
            >
              <Select
                labelId="language"
                id="language"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>
                  <Image src={english} alt="english" /> EN
                </MenuItem>
                <MenuItem value={esIcon}>
                  <Image src={esIcon} alt="english" /> ES
                </MenuItem>
                <MenuItem value={dtIcon}>
                  <Image src={dtIcon} alt="english" /> DT
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="flex items-center gap-6">
            <Typography className="text-base font-medium text-white">
              VinoCosta
            </Typography>
            <Image
              src={profile}
              alt="Profile"
              className="block img-full mx-auto"
            />
          </Box>
        </Box>
      </header>
      <Box className="mt-8 flex items-start gap-10">
        <TabContext value={value}>
          <Box className="aside-nav max-w-[220px] w-full">
            <TabList
              onChange={tabChange}
              aria-label="lab API tabs example"
              className="menu-list"
            >
              <Tab label="Quickcheck" value="1" className="quickcheck" />
              <Tab label="Dataset" value="2" className="dataset" />
              <Tab label="Settings" value="3" className="setting" />
            </TabList>
          </Box>
          <Box className="main-content w-full p-0">
            
            {/* First Screen */}
            <TabPanel value="1" className="p-0">
              <Quickcheck />
            </TabPanel>

            {/* Second Screen */}
            <TabPanel value="2" className="p-0">
              <Dataset />
            </TabPanel>

            {/* Third Screen */}
            <TabPanel value="3" className="p-0">
              <Settings />
            </TabPanel>

          </Box>
        </TabContext>
      </Box>

     
    </main>
  );
}
