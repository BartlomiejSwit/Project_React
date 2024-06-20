import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const GradientAppBar = styled(AppBar)`
  background: linear-gradient(45deg, #673ab7 30%, #4caf50 90%);
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredTypography = styled(Typography)`
  text-align: center;
`;

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <GradientAppBar position="static">
        <Toolbar>
          <CenteredTypography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            Przepisy Online
          </CenteredTypography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </GradientAppBar>
    </Box>
  );
}