import { useEffect, useState } from "react";
import { FaSortDown } from "react-icons/fa";

export function Category() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
      fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json()).then(res => setCategories(res))
  
    }, [])
    return <div className="dropdown">
    <div className="drop">
      <div >Categories<FaSortDown /></div>
      <div className="dropdown-list">
        {
          categories.map(category => <a key={category}>{category}</a>)
        }
      </div>
    </div>
  </div>
    
}