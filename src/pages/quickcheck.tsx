import { Typography, Box, TextField, Button } from "@mui/material";
import quickSearch from "../../public/search-icon2.svg";
import Image from "next/image";

const Quickcheck = () => {
  return (
      <><Typography variant="h1" className="pt-1">
          Quickcheck
      </Typography><Typography className="pt-4 text-white text-opacity-[.68] max-w-[880px]">
              It is worth noting that the feature of advertising promotes the
              associated dictate of the consumer, being placed in all media. Targeting
              is not trivial. The advertising block, of course, inductively produces a
              media plan
          </Typography><Box className="mt-8">
              <form action="#" className="flex items-end gap-6 w-full">
                  <Box className="w-full">
                      <Typography className="address-form">Address</Typography>
                      <TextField
                          id="standard-basic"
                          label=""
                          variant="standard"
                          className="input w-full"
                          placeholder="Input blockchain address..." />
                  </Box>
                  <Button className="btn-style">Send</Button>
              </form>
          </Box><Box className="no-result">
              <Image src={quickSearch} alt="search " />
              <Typography className="style2 pt-6">No result</Typography>
          </Box></>
  );
};
export default Quickcheck;
