import React ,{ useEffect, useState }from "react";

import '../../pages.css'
import { Product } from "./Product";




export function Shop (): JSX.Element {
        const [products, setProducts] = useState<ProductType[]>([]);
        useEffect(() => {
          fakestore();
        }, [])
            const fakestore=async () => {
              const response = await fetch('https://fakestoreapi.com/products');
              const jsonData = await response.json ();
              setProducts(jsonData)

            }
        return (
          <React.Fragment>
          <div className="container">
            {products.map ((product)=> {
              return(
             
                <Product key={product.id} product={product}/>
              
              )
             })}
          </div>
          </React.Fragment>
        )}