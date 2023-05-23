import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material";
import ProblemasLogo from "../assets/problemas_Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const pages = ["OSRS Gold", "RS3 Gold", "Sell RS Gold"];

const MenuItems = styled(Typography)`
  text-transform: capitalize !important;
`;

function Pricecalculator() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#142241" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ textTransform: "normal" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 0, m: 2 }}>
            <img width="130" src={ProblemasLogo} alt="logo" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <ul key={page} onClick={handleCloseNavMenu}>
                  <MenuItems textAlign="center">{page}</MenuItems>
                </ul>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, m: 2, display: { xs: "flex", md: "none" } }}>
            <img width="130" src={ProblemasLogo} alt="logo" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <MenuItems> {page}</MenuItems>
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex" },
            }}
          >
            <Button
              sx={{
                color: "#ffffff",
                textTransform: "capitalize",
                marginRight: "12px",
                display: { xs: "none", md: "flex" },
              }}
              variant="text"
            >
              Sign Up
            </Button>
            <Button
              sx={{
                background: "#e9b109",
                color: "#000000",
                textTransform: "capitalize",
              }}
              variant="contained"
            >
              Log In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Pricecalculator;
