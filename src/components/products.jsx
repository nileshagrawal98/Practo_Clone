import { useParams } from "react-router-dom";
import React from "react";
export const Products = () => {
    const { id } = useParams();

    return (
        <div>product details of id : {id}</div>
    )
}