/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import {
  PRODUCT_STATUS_INACTIVE,
  PRODUCT_STATUS_PUBLISHED,
} from "constants/index";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import ActiveProducts from "pages/inventory/activeProducts";
import InactiveProducts from "../../pages/inventory/inActiveProducts/index";
import {
  getInactiveProductsThunk,
  getProductsThunk,
} from "../../redux-store/slices/inventory/index";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <MDTypography variant="button" fontWeight="medium">
          {children}
        </MDTypography>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Inventory() {
  const dispatch = useDispatch();
  const brandId = localStorage.getItem("brandId");
  const req = {
    brandId,
    status: PRODUCT_STATUS_PUBLISHED,
  };

  dispatch(getProductsThunk(req));
  req.status = PRODUCT_STATUS_INACTIVE;
  dispatch(getInactiveProductsThunk(req));

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const loading = useSelector((state) => state.root?.loading, shallowEqual);
  // if (loading) {
  //   return <MDBackdrop show />;
  // }
  return (
    <MDBox>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example">
          <Tab
            label={
              <MDTypography variant="button" fontWeight="medium">
                Active Products
              </MDTypography>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <MDTypography variant="button" fontWeight="medium">
                Inactive Products
              </MDTypography>
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ActiveProducts />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InactiveProducts />
      </TabPanel>
    </MDBox>
  );
}

export default Inventory;
