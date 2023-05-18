import React from "react";
import { Stack, Box, Typography, Divider, TextField } from "@mui/material";
import IconGeneral from "../icons/IconGeneral.svg";

export const GeneralInfoComponent = () => {
  return (
    <Stack spacing={4}>
      <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <img
          src={IconGeneral}
          alt=""
          style={{ width: "32px", height: "32px", marginRight: "10px" }}
        />
        <Typography variant="body1" sx={{ color: "#172326", fontSize: "18px", fontWeight: "bold" }}>
          General info
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "#F0F0F0" }} />

      <Box style={{ display: "flex", gap: "16px" }}>
        {[
          { label: "Invoice number", value: "HG-2659874113", inputColor: "#172326", labelColor: "#8B9092" },
          { label: "Contract", value: "Rapid To ICL Audiocods Contracts", inputColor: "#568793", labelColor: "#8B9092", inputStyle: { fontStyle: "italic", width: "140%" } },
        ].map((field, index) => (
          <TextField
            key={index}
            variant="standard"
            InputProps={{
              disableUnderline: true,
              readOnly: true,
              sx: {
                color: field.inputColor,
                marginBottom: "8px",
                ...field.inputStyle,
              },
            }}
            InputLabelProps={{
              sx: {
                color: field.labelColor,
              },
            }}
            label={field.label}
            defaultValue={field.value}
          />
        ))}
      </Box>
    </Stack>
  );
};
