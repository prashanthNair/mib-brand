/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useSelector, shallowEqual } from "react-redux";
import React from "react";
import MDBackdrop from "components/MDBackDrop";
import ProductCard from "./card";

const CustomTabPanel = styled(TabPanel)({
  paddingLeft: 0,
  paddingTop: 0,
  padding: `${0} !important`,
});

export default function ExclusiveTab(props) {
  if (!props) return React.Fragment;

  const loading = useSelector((state) => state.root?.loading, shallowEqual);
  const [value, setValue] = React.useState("1");
  const { tabs, data, isActive } = props;
  const products = data;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (loading) {
    return <MDBackdrop show />;
  }
  return (
    <MDBox>
      {tabs && tabs.length > 0 ? (
        <TabContext value={value} variant="standard">
          <MDBox sx={{ maxWidth: "100%" }}>
            <TabList
              variant="scrollable"
              scrollButtons="auto"
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ p: 1 }}
            >
              {tabs.map((x) => (
                <Tab
                  label={
                    <MDTypography variant="button" fontWeight="medium">
                      {x.label}
                    </MDTypography>
                  }
                  value={x.id}
                />
              ))}
            </TabList>
          </MDBox>
          {tabs.map((x) => (
            <CustomTabPanel sx={{ marginTop: 2 }} value={x.id}>
              <Grid container spacing={1} display="flex" flexDirection="row">
                {products ? (
                  products[x.label]?.map((info) => (
                    <Grid item xs={3}>
                      {info?.ImageLinks[0] ? (
                        <ProductCard
                          isActive={isActive || false}
                          brand={info?.ProductBrand || ""}
                          ratting={info?.Rating || 0}
                          price={info?.SellingPrice || 0}
                          mrp={info?.MRP || 0}
                          title={info?.Tittle || ""}
                          stock={info?.Stock || 0}
                          image={info?.ImageLinks[0]}
                          type={info?.ProductType || ""}
                          productId={info?.ProductId || ""}
                          category={info?.Category || ""}
                          productCategory={info?.ProductCategory || ""}
                        />
                      ) : (
                        <></>
                      )}
                    </Grid>
                  ))
                ) : (
                  <></>
                )}
              </Grid>
            </CustomTabPanel>
          ))}
        </TabContext>
      ) : (
        <MDTypography>You dont have any product in your inventory</MDTypography>
      )}
    </MDBox>
  );
}
