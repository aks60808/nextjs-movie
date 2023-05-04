import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#1F2833",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Link href="https://www.linkedin.com/in/hengchuantommylin/">
                <LinkedInIcon sx={{ color: "#66fcf1" }} />
              </Link>
              <Link href="https://github.com/aks60808">
                <GitHubIcon sx={{ color: "#66fcf1" }} />
              </Link>
              <Link href="https://dev.to/tommyhenchuanlin">
                <LogoDevIcon sx={{ color: "#66fcf1" }} />
              </Link>
            </Box>

            <Typography color="#66fcf1" variant="subtitle1">
              {`${new Date().getFullYear()} | NextJs | Material UI | `}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
