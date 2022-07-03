import React from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import {setProducts} from "../redux/actions/productAction"

const ProductListing = () => {
    //const products = useSelector((state)=> state)
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("error",err);
        })
        dispatch(setProducts(res.data));
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    //console.log(products);
return(
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
