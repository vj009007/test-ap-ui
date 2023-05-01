import {
  Box,
  Typography,
  Paper,
  IconButton,
  InputBase,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "../../public/search-icon.svg";
import FilterIcon from "../../public/filter.svg";
import tick from "../../public/tick.svg";
import override from "../../public/override.svg";
import download from "../../public/download.svg";
import deleteIcon from "../../public/delete.svg";
import close from "../../public/Close.svg";
import React from "react";

const Dataset = () => {
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
    <>
      <Box className="flex items-center justify-between">
        <Typography variant="h1">Dataset</Typography>

        <Box className="search-wrapper w-full ps-[74px]">
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
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <Image src={FilterIcon} alt="FilterIcon" />
            </IconButton>
          </Paper>
        </Box>
        <Box className="ms-8">
          <Button className="btn-style">Upload</Button>
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
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* POPUP Model  */}
      <Dialog
        open={openModel}
        onClose={popupClose}
        aria-labelledby="table-details-title"
        aria-describedby="table-details-description"
        className="table-details"
      >
        <DialogTitle id="table-details-title">{"Test-2023029.csv"}</DialogTitle>
        <DialogContent className="p-0 pb-0 mt-8 overflow-hidden">
          <Box className="table-wrapper">
            <TableContainer component={Paper} className="border-none">
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell className="ps-6">Prediction (botFlag)</TableCell>
                    <TableCell>Probability</TableCell>
                    <TableCell>Timestamp</TableCell>
                    <TableCell>Discord</TableCell>
                    <TableCell>Twitter</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Wallet balance</TableCell>
                    <TableCell className="pe-6">Twitter folowwers</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className="ps-6" onClick={popupClickOpen}>
                      0
                    </TableCell>
                    <TableCell>93,2%</TableCell>
                    <TableCell>03.29.2023 05:12 AM</TableCell>
                    <TableCell>Siswadesu#89...</TableCell>
                    <TableCell>LuckySo886206</TableCell>
                    <TableCell>siswadesu@g...</TableCell>
                    <TableCell>0.005090907304</TableCell>
                    <TableCell>98</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="ps-6" onClick={popupClickOpen}>
                      0
                    </TableCell>
                    <TableCell>93,2%</TableCell>
                    <TableCell>03.29.2023 05:12 AM</TableCell>
                    <TableCell>Siswadesu#89...</TableCell>
                    <TableCell>LuckySo886206</TableCell>
                    <TableCell>siswadesu@g...</TableCell>
                    <TableCell>0.005090907304</TableCell>
                    <TableCell>98</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="ps-6" onClick={popupClickOpen}>
                      0
                    </TableCell>
                    <TableCell>93,2%</TableCell>
                    <TableCell>03.29.2023 05:12 AM</TableCell>
                    <TableCell>Siswadesu#89...</TableCell>
                    <TableCell>LuckySo886206</TableCell>
                    <TableCell>siswadesu@g...</TableCell>
                    <TableCell>0.005090907304</TableCell>
                    <TableCell>98</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box className="mt-6">
            <Button className="btn-style">Download CSV</Button>
          </Box>
          <Button onClick={popupClose} className="popup-close">
            <Image src={close} alt="alt" />
          </Button>
        </DialogContent>
        <DialogActions className="p-0"></DialogActions>
      </Dialog>
      {/* POPUP Model  */}
    </>
  );
};
export default Dataset;
