import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Icon from "@mui/material/Icon";
import ResetPassword from "layouts/authentication/reset-password/index";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import CancelledLayout from "layouts/cancelledOrders";
import Dashboard from "layouts/dashboard";
import layoutContainer from "layouts/layoutContainers";
import ProfileLayout from "layouts/profile";
import ReturnsLayout from "layouts/returnedOrders";
import MigoServices from "layouts/migo-services";
import Settlements from "layouts/settlements";
import AddProduct from "./layouts/addProduct/index";
import Inventory from "./layouts/inventory/index";
import OrderLayout from "./layouts/orderLayout/index";

const InventoryContainer = layoutContainer(Inventory)
const AddProductContainer = layoutContainer(AddProduct)
const OrderContainer = layoutContainer(OrderLayout)
const SettlementsContainer = layoutContainer(Settlements)
const ProfileContainer = layoutContainer(ProfileLayout)
const ReturnsContainer = layoutContainer(ReturnsLayout)
const MigoServicesContainer = layoutContainer(MigoServices)
const CancelledContainer = layoutContainer(CancelledLayout)
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Inventory",
    key: "inventory",
    icon: <Inventory2OutlinedIcon />,
    route: "/inventory",
    children: [
      {
        name: "Product List",
        path: "/admin/products",
        type: "collapse",
        key: "inventory",
        icon: <Inventory2OutlinedIcon />,
        route: "/inventory",
      },
      {
        name: "Create Product",
        type: "collapse",
        key: "inventory",
        icon: <Inventory2OutlinedIcon />,
        route: "/inventory",
        path: "/admin/products/create",
      },
    ],
    component: <InventoryContainer />,
  },
  {
    type: "collapse",
    name: "Add Product",
    key: "add-product",
    icon: <AddBoxOutlinedIcon>add-product</AddBoxOutlinedIcon>,
    route: "/add-product",
    component: <AddProductContainer />,
  },
  {
    type: "collapse",
    name: "Orders",
    key: "orders",
    icon: <ShoppingCartOutlinedIcon>Orders</ShoppingCartOutlinedIcon>,
    route: "/orders",
    component: <OrderContainer />,
  },

  {
    type: "collapse",
    name: "Settlements",
    key: "settlements",
    icon: <PaymentOutlinedIcon>Settlements</PaymentOutlinedIcon>,
    route: "/settlements",
    component: <SettlementsContainer />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <ProfileContainer />,
  },
  {
    type: "divider",
    name: "Sign In",
    key: "activeOrder",
    icon: <Icon fontSize="small">ActiveOrder</Icon>,
    route: "/orders/active-orders",
    component: <OrderContainer />,
  },
  {
    type: "title",
    name: "Sign In",
    key: "returns",
    icon: <Icon fontSize="small">Returns</Icon>,
    route: "/orders/returns",
    component: <ReturnsContainer />,
  },
  {
    type: "title",
    name: "Sign In",
    key: "cancellations",
    icon: <Icon fontSize="small">Cancellations</Icon>,
    route: "/orders/canceled",
    component: <CancelledContainer />,
  },
];
export const basicRoutes = [
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },

  {
    type: "collapse",
    name: "Reset Password",
    key: "sign-in",
    icon: <Icon fontSize="small">Reset Password</Icon>,
    route: "/authentication/reset-password",
    component: <ResetPassword />,
  },
  {
    type: "collapse",
    name: "Images",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];
export const companyRoutes = [
  {
    type: "collapse",
    name: "Migo Inventory",
    key: "MigoInventory",
    icon: <AddBoxOutlinedIcon>Migo Inventory</AddBoxOutlinedIcon>,
    route: "/services/migo-inventory",
    component: <MigoServicesContainer />,
  },
  {
    type: "collapse",
    name: "Brand Booster",
    key: "BrandBooster",
    icon: <MiscellaneousServicesIcon>Brand Booster</MiscellaneousServicesIcon>,
    route: "/services/brand-booster",
    component: <MigoServicesContainer />,
  },
  {
    type: "collapse",
    name: "Loyalty Program",
    key: "LoyaltyProgram",
    icon: <LoyaltyIcon>Loyalty Program</LoyaltyIcon>,
    route: "/services/loyalty-program",
    component: <MigoServicesContainer />,
  },
  {
    type: "collapse",
    name: "Voucher Management",
    key: "VoucherManagement",
    icon: <VisibilityOutlinedIcon>Voucher Management</VisibilityOutlinedIcon>,
    route: "/profile/voucher-management",
    component: <MigoServicesContainer />,
  },
];

export default routes;
