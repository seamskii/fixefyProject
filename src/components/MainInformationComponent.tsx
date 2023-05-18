import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import IconButton from "../icons/IconButton.svg";
import IconOpen from "../icons/IconOpen.svg";
import IconTotal from "../icons/IconTotal.svg";
import { CircularProgressWithPercentage } from "../tools/CircularProgressWithPercentage";
import { TotalTitle } from "../tools/TotalTitle";

interface MainInformationComponentProps {
  productName: string;
}

export const MainInformationComponent: React.FC<MainInformationComponentProps> = ({ productName }) => {
  return (
    <Stack spacing={7}>
      <img src={IconButton} alt="" style={{ width: "40px", height: "40px" }} />
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h4" sx={{ marginLeft: "10px" }}>
            Charge: {productName}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ECC631",
              width: "110px",
              height: "30px",
              borderRadius: "60px",
              padding: "6px 10px",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Open Sans",
              textTransform: "capitalize",
              marginLeft: "30px",
              boxShadow: "none",
            }}
          >
            Pending
          </Button>
        </Box>
        <img src={IconOpen} alt="" style={{ width: "40px", height: "40px" }} />
      </Box>
      <Box sx={{ display: "flex", gap: "15px" }}>
        <Box sx={{ backgroundColor: "#F6F9FA", width: 130, height: 150, boxShadow: "none", borderRadius: "12px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <CircularProgressWithPercentage value={58} />
            <Typography variant="body2" sx={{ color: "#8B9092", marginTop: "2px", fontSize: "16px" }}>
              Score
            </Typography>
          </Box>
        </Box>
        <Box sx={{ backgroundColor: "#F6F9FA", width: 600, height: 150, borderRadius: "12px", paddingLeft: "30px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
            <img src={IconTotal} alt="" style={{ width: "32px", height: "32px", marginBottom: "10px", marginRight: "5px" }} />
            <Typography variant="body1" sx={{ color: "#8B9092", marginBottom: "8px", fontSize: "13px" }}>
              Total Title
            </Typography>
          </Box>
          <Box sx={{ marginTop: "18px" }}>
            <TotalTitle />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
