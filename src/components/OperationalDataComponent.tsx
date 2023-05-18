import React from "react";
import { Stack, Box, Typography, Divider, TextField } from "@mui/material";
import IconOpData from "../icons/IconOpData.svg"

export const OperationalDataComponent = () => {
  return (
    <Stack spacing={4}>
      <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <img
          src={IconOpData}
          alt=""
          style={{
            width: "32px",
            height: "32px",
            marginRight: "10px",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "#172326",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Operational Data
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "#F0F0F0" }} />
      <Box style={{ display: "flex" }}>
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            sx: {
              color: "#172326",
              marginBottom: "8px",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#8B9092",
            },
          }}
          label="Created At"
          defaultValue="13.02.2022"
        />
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            sx: {
              color: "#172326",
              marginBottom: "8px",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#8B9092",
            },
          }}
          label="Created By"
          defaultValue="Lior"
        />
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            sx: {
              color: "#172326",
              marginBottom: "8px",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#8B9092",
            },
          }}
          label="Operation Date"
          defaultValue="04.11.2021"
        />
      </Box>
      <Box style={{ display: "flex" }}>
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            sx: {
              color: "#172326",
              marginBottom: "8px",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#8B9092",
            },
          }}
          label="Invoice number"
          defaultValue="HG-2659874113"
        />
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            sx: {
              color: "#568793",
              marginBottom: "8px",
              fontStyle: "italic",
              width: "100%",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#8B9092",
            },
          }}
          label="Event"
          defaultValue="Transportation"
        />
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            sx: {
              color: "#568793",
              marginBottom: "8px",
              fontStyle: "italic",
              width: "100%",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#8B9092",
            },
          }}
          label="Service"
          defaultValue="Shop2Address"
        />
      </Box>
      <Box style={{ display: "flex" }}>
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            sx: {
              color: "#568793",
              marginBottom: "8px",
              marginRight: "70px",
              fontStyle: "italic",
              width: "120%",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#8B9092",
            },
          }}
          label="Transmission"
          defaultValue="Transmission-sgewwoes2i"
        />
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            sx: {
              color: "#568793",
              marginBottom: "8px",
              fontStyle: "italic",
              width: "100%",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#8B9092",
            },
          }}
          label="Transaction"
          defaultValue="4ayk2mui8m"
        />
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            sx: {
              color: "#172326",
              marginBottom: "8px",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#8B9092",
            },
          }}
          label="Transmission Type"
          defaultValue="No value found"
        />
      </Box>
    </Stack>
  );
};

