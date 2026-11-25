import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";


function Products() {
 const [products, setProducts] =
   useState([]);

 useEffect(() => {
   getProducts();
 }, []);

 async function getProducts() {
   try {
     const response = await api.get(
       "/products"
     );

     setProducts(response.data);
   } catch (error) {
     console.log(error);
   }
 }
 async function deleteProduct(id) {

 await api.delete(
   `/products/${id}`
 );

 setProducts(
   products.filter(
     product =>
     product.id !== id
   )
 );
}


 return (
   <>
     <h1>Popular Products</h1>
    <Link to="/add-product">
 Add Product
</Link>


     <div className="products">
       {products.map((product) => (
         <ProductCard
         onDelete={deleteProduct}
           key={product.id}
           product={product}
         />
       ))}
     </div>
   </>
 );
}

export default Products;
