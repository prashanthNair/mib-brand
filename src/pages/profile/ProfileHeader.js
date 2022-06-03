/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// Images
import brand from "assets/images/brand.png";
// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";
import MDAvatar from "components/MDAvatar";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useEffect, useState } from "react";

function ProfileHeader({ data }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);

    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  return (
    <MDBox position="relative" mb={4}>
      <Card
        sx={{
          position: "relative",
          mt: 5,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <MDAvatar src={brand} alt="profile-image" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                {data.BusinessDetails?.BrandName || ""}
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                {data.BusinessDetails?.Category || ""}
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </Card>
    </MDBox>
  );
}

export default ProfileHeader;
