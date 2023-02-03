import React ,{ useEffect, useState }from "react";


type ProductPropsType={
  product:ProductType
}

export function Product ({product}:ProductPropsType): JSX.Element{
  return <div key={product.id} className="products">
  <h5>{product.title}</h5>
  <p>{product.category}</p>
  <img src={product.image}  alt="" />
</div>







}
