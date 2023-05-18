import { Stack, Box, Typography, Divider, Button } from "@mui/material";
import IconException from "../icons/IconException.svg";

export const ExceptionComponent = () => {
  return (
    <Stack spacing={4}>
      <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <img
          src={IconException}
          alt=""
          style={{ width: "32px", height: "32px", marginRight: "10px" }}
        />
        <Typography variant="body1" sx={{ color: "#172326", fontSize: "18px", fontWeight: "bold" }}>
          Exception
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "#F0F0F0" }} />
      {[
        { number: "1", title: "Missing data", description: "Missing Priority Shipment Data", severityColor: "#EB5757", severityLabel: "Critical", buttonColor: "#FEF6F6" },
        { number: "2", title: "No pricing", description: "26 PLL To Sweden; Original Charge (€1,750.00) Is Above The Approximate Price (€1,539.00) For 26 PLL; 20 PLL (€1,485.00), Approximate Cost Per PLL (€9.00); (Including A Threshold Of 1%/€20.00)", severityColor: "#EB5757", severityLabel: "High", buttonColor: "#FEF6F6" },
        { number: "3", title: "Title", description: "Might Be Dedicated Truck", severityColor: "#EB5757", severityLabel: "Medium", buttonColor: "#F6FAEC" },
      ].map((exception, index) => (
        <Box
          key={index}
          sx={{
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="body1" style={{ marginLeft: "8px" }}>
              <b style={{ color: exception.severityColor, fontSize: "20px", marginRight: "10px" }}>{exception.number}</b>
              <b>{exception.title}</b>
            </Typography>
            <Typography variant="body1" style={{ marginLeft: "29px" }}>
              {exception.description}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: exception.buttonColor,
              height: "22px",
              borderRadius: "60px",
              padding: "6px 10px",
              fontSize: "14px",
              textTransform: "capitalize",
              boxShadow: "none",
              color: exception.severityColor,
            }}
          >
            {exception.severityLabel}
          </Button>
        </Box>
      ))}
    </Stack>
  );
};
