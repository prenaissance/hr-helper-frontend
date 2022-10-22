import { Link } from "react-router-dom";
import { Box, Container, Divider, Paper, Theme, Typography, SxProps, useMediaQuery, Toolbar, Button, Tab, styled } from "@mui/material";
import { FC, ReactNode, useState } from "react";
import { Settings as SettingsIcon } from "@mui/icons-material";
import { colors } from "@common/theme/utils/consts";
import DrawerComp from "@common/components/ui/Drawer/Drawer";


type PageLinkProps = {
  to: string;
  title: string;
};

const PageLink: FC<PageLinkProps> = ({ to, title }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Typography variant="h6" color="#fff">
        {title}
      </Typography>
    </Link>
  );
};

const BootstrapButton = styled(Button)({
  borderRadius: "2rem",
  '&:hover': {
    backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
  },
});

const Navbar: FC = () => {
  const isMatch = useMediaQuery("(max-width:600px)");

  return (

    <>
      <Toolbar> {isMatch ? <>
        <DrawerComp />
        <Box sx={{ ml: "auto" }}>
          <Link to="/settings">
            <SettingsIcon sx={{ width: "3rem", height: "3rem", color: "primary.contrastText" }} />
          </Link>
        </Box>
      </> :
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "65px",
            gap: "1.5rem",
            p: "0 1rem",
            overflow: "hidden",
            zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
            bgcolor: colors.BACKGROUND_MAIN,
          }
          }
        >
          <> <Box
            component="img"
            sx={{ width: "3rem", height: "3rem" }}
            alt="logo"
            src={require("/assets/images/logo.png")}
          />
            <BootstrapButton variant="contained" disableRipple>
              <PageLink to="/" title="Home" />
            </BootstrapButton>

            <Button sx={{
              borderRadius: "2rem",
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}>
              <PageLink to="/metrics" title="Metrics" />
            </Button>

            <Button sx={{
              borderRadius: "2rem",
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}>
              <PageLink to="/statistics" title="Statistics" />
            </Button>

            <Button sx={{
              borderRadius: "2rem",
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}>
              <PageLink to="/login" title="Login" />
            </Button>

            <Box sx={{ ml: "auto" }}>
              <Link to="/settings">
                <SettingsIcon sx={{ width: "3rem", height: "3rem", color: "primary.contrastText" }} />
              </Link>
            </Box>
          </>
        </Box>
      }
      </Toolbar>

      <Divider sx={{ bgcolor: "primary.light", m: "0 5px" }} />
    </>
  );
};

export default Navbar;
