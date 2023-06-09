import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  Drawer,
  List,
  ListItem,
  IconButton,
  styled,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ProblemasLogo from "../assets/problemas_Logo.png";
import united from "../assets/united.png";
import Aud from "../assets/Aud.png";
import GBP from "../assets/GBP.png";
import Can from "../assets/Can.png";
import Euro from "../assets/Euro.png";
import CloseIcon from "@mui/icons-material/Close";

const currencyRates = {
  USD: 1,
  EUR: 1.1,
  GBP: 1.4,
  JPY: 1.6,
  AUD: 2,
};

function Pricecalculator() {
  const [currency, setCurrency] = useState("USD");
  const [quantity, setQuantity] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const pages = ["OSRS Gold", "RS3 Gold", "Sell RS Gold"];

  const CurrencyItem = styled(MenuItem)`
    color: #ffffff;
    font-family: Poppins !important;
    img {
      margin-right: 10px;
    }
  `;
  const CurrencySelect = styled(Select)`
    font-family: Poppins !important;
    border: 2px solid transparent;
    color: #ffffff;
    svg {
      color: #ffffff;
    }
  `;

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // currency

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const calculatePrice = () => {
    const itemPrice = 10;
    const price = quantity * (itemPrice * currencyRates[currency]);

    return price.toFixed(2);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#142241" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box
                  className="DrawerContainer"
                  role="presentation"
                  onClick={handleDrawerToggle}
                  onKeyDown={handleDrawerToggle}
                >
                  <IconButton onClick={handleDrawerToggle} color="inherit">
                    <CloseIcon sx={{ fontSize: "34px" }} />
                  </IconButton>
                  <List>
                    {pages.map((page) => (
                      <ListItem button key={page} className="listItems">
                        <a href={`#${page}`}>{page}</a>
                      </ListItem>
                    ))}
                  </List>
                  <Box className="CurrencySelecterBox">
                    <FormControl sx={{ marginLeft: 2 }}>
                      <CurrencySelect
                        style={{
                          "&:focus": {
                            boxShadow: "none",
                            border: "none",
                          },
                        }}
                        className="CurrencySelecter"
                        value={currency}
                        onChange={handleCurrencyChange}
                        color="secondary"
                      >
                        <CurrencyItem value="USD">
                          <img width={"20px"} src={united} alt="USD" />
                          USD
                        </CurrencyItem>
                        <CurrencyItem value="EUR">
                          <img width={"20px"} src={Euro} alt="USD" /> EUR
                        </CurrencyItem>
                        <CurrencyItem value="GBP">
                          <img width={"20px"} src={GBP} alt="USD" /> GBP
                        </CurrencyItem>
                        <CurrencyItem value="JPY">
                          <img width={"20px"} src={Aud} alt="USD" /> JPY
                        </CurrencyItem>
                        <CurrencyItem value="AUD">
                          <img width={"20px"} src={Can} alt="USD" /> AUD
                        </CurrencyItem>
                      </CurrencySelect>
                    </FormControl>
                  </Box>
                  <Box marginTop={"20px"}>
                    <Button
                      sx={{
                        color: "#ffffff",
                        textTransform: "capitalize",
                        marginRight: "12px",
                        background: "none",
                        border: "1px solid #ffffff",
                      }}
                      variant="contained"
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
                </Box>
              </Drawer>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <img width="130" src={ProblemasLogo} alt="logo" />
            </Box>
            <Box
              className="desktopMenu "
              sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <a href={`#${page}`}>{page}</a>
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
              }}
              className="CurrencySelecterBox"
            >
              <FormControl sx={{ marginLeft: 2 }}>
                <CurrencySelect
                  className="CurrencySelecter"
                  value={currency}
                  onChange={handleCurrencyChange}
                  color="secondary"
                >
                  <CurrencyItem value="USD">
                    <img width={"20px"} src={united} alt="USD" />
                    USD
                  </CurrencyItem>
                  <CurrencyItem value="EUR">
                    <img width={"20px"} src={Euro} alt="USD" /> EUR
                  </CurrencyItem>
                  <CurrencyItem value="GBP">
                    <img width={"20px"} src={GBP} alt="USD" /> GBP
                  </CurrencyItem>
                  <CurrencyItem value="JPY">
                    <img width={"20px"} src={Aud} alt="USD" /> JPY
                  </CurrencyItem>
                  <CurrencyItem value="AUD">
                    <img width={"20px"} src={Can} alt="USD" /> AUD
                  </CurrencyItem>
                </CurrencySelect>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex" }}>
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
      <Container maxWidth="sm">
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="h2">
            Price Calculator
          </Typography>
          <TextField
            type="number"
            label="Quantity"
            value={quantity}
            onChange={handleQuantityChange}
            fullWidth
            margin="normal"
          />
          <TextField
            type="text"
            label={`Price (${currency})`}
            value={calculatePrice()}
            disabled
            fullWidth
            margin="normal"
          />
        </Box>
      </Container>
    </>
  );
}

export default Pricecalculator;
