
import { Stack } from "@mui/material";
import { MainInformationComponent } from "../components/MainInformationComponent";
import { GeneralInfoComponent } from "../components/GeneralInfoComponent";
import { OperationalDataComponent } from "../components/OperationalDataComponent";
import { ExceptionComponent } from "../components/ExceptionComponent";


export const MuiSidePanel = () => {
  const productName = "Charge-2ymgek0iy6";

  return (
    <Stack
      sx={{
        width: "770px",
        paddingTop: "40px",
        paddingRight: "32px",
        paddingBottom: "32px",
        paddingLeft: "32px",
        gap: "48px",
      }}
      spacing={3}
    >
      <MainInformationComponent productName={productName} />
      <GeneralInfoComponent />
      <OperationalDataComponent />
      <ExceptionComponent />
    </Stack>
  );
};
