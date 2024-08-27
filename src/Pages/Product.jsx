import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/productdisplay";

const Product = () => {
    const {all_product}=  useContext(ShopContext);
    const {productid} = useParams();
    const Product = all_product.find((e) => e.id === Number(productid))
    return(
        <div>
            <Breadcrum product={Product}/> 
            <ProductDisplay product={Product}/>
        </div>
    )
}

export default Product