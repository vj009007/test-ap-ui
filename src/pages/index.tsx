import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.svg";
import profile from "../../public/profile.svg";
import { Poppins } from "next/font/google";
import tick from "../../public/tick.svg";
import english from "../../public/en.svg";
import es from "../../public/es.svg";
import dt from "../../public/dt.svg";
import deleteIcon from "../../public/delete.svg";
import override from "../../public/override.svg";
import download from "../../public/download.svg";
import TabList from "@mui/lab/TabList";
import SearchIcon from "../../public/search-icon.svg";
import FilterIcon from "../../public/filter.svg";
import TabPanel from "@mui/lab/TabPanel";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  IconButton,
  InputBase,
  Link,
  List,
  ListItem,
  Menu,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { TabContext } from "@mui/lab";

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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //POPUp Model
  const [openModel, setOpen] = React.useState(false);
  const popupClickOpen = () => {
    setOpen(true);
  };
  const popupClose = () => {
    setOpen(false);
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
                  <Image src={english} alt="englisg" /> EN
                </MenuItem>
                <MenuItem value={es}>
                  <Image src={es} alt="englisg" /> ES
                </MenuItem>
                <MenuItem value={dt}>
                  <Image src={dt} alt="englisg" /> DT
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
            <TabPanel value="1" className="p-0">
              Quickcheck
            </TabPanel>

            <TabPanel value="2" className="p-0">
              <Box className="flex items-center justify-between">
                <Typography variant="h1">Dataset</Typography>

                <Box className="search-wrapper w-full ps-[74px] max-w-[620px]">
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <IconButton sx={{ p: "10px" }} aria-label="menu">
                      <Image src={SearchIcon} alt="Searchicon" />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search Google Maps"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <Image src={FilterIcon} alt="FilterIcon" />
                    </IconButton>
                  </Paper>
                </Box>
                <Box className="ms-8">
                  <Link className="btn-style">Upload</Link>
                </Box>
              </Box>
              <Box className="table-wrapper mt-6">
                <TableContainer component={Paper} className="border-none">
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="ps-6">Name</TableCell>
                        <TableCell>Source</TableCell>
                        <TableCell>Columns</TableCell>
                        <TableCell>Rows</TableCell>
                        <TableCell>Cells</TableCell>
                        <TableCell>Created</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell className="pe-6"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="ps-6" onClick={popupClickOpen}>
                          test-2023029.csv
                        </TableCell>
                        <TableCell>S3</TableCell>
                        <TableCell>13</TableCell>
                        <TableCell>11, 700</TableCell>
                        <TableCell>152, 900</TableCell>
                        <TableCell>03.29.2023 05:12 AM</TableCell>
                        <TableCell>
                          <Box className="status">
                            <Image src={tick} alt="alt" />
                            <Typography className="">Ready</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className="pe-10">
                          <Box
                            className="active-btn"
                            aria-controls={openMenu ? "table-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </Box>
                          <div>
                            <Menu
                              id="table-menu"
                              aria-labelledby="demo-positioned-button"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Image src={override} alt="icon" /> Download
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={download} alt="icon" /> Override{" "}
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Image src={deleteIcon} alt="icon" /> Delete
                              </MenuItem>
                            </Menu>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </TabPanel>
            <TabPanel value="3" className="p-0">
              Item Three
            </TabPanel>
          </Box>
        </TabContext>
      </Box>

      {/* POPUP Model  */}
      <Dialog
        open={openModel}
        onClose={popupClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={popupClose}>Disagree</Button>
        </DialogActions>
      </Dialog>
      {/* POPUP Model  */}
    </main>
  );
}
