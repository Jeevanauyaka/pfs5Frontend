
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import AddProduct from "../Pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import ProtectedRoute from "./ProtectedRoute";
import Wishlist from "../Pages/wishlist";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/add-product"
        element={<ProtectedRoute><AddProduct/></ProtectedRoute>}
      />
 <Route
 path="/edit-product/:id"
 element={<EditProduct />}
/>

<Route
  path="/register"
  element={<Register />}
/>
<Route
  path="/login"
  element={<Login/>}
/>
<Route
  path="/logout"
  element={<Logout />}
/>

<Route
path='/wishlist'
element={<Wishlist/> }/>

    </Routes>
  );
}

export default AppRoutes;