
import axios from "axios";
import { useEffect, useState } from "react";
export default function Api(){
const [value,setValue]=useState([]);

        axios
        .get('https://fakestoreapi.com/products')
        .then(res=>setValue(res.data)) 

    return(
        <>
        
        <div className="grid grid-cols-3 gap-10 p-20"> 
            {value.map((item,index)=>(
                <div key={index.id} className="border-2 grid grid-row-3 justify-center"> 
                <img src={item.image} alt="" className="w-fit"/>
                 <p className="text-xs">{item.description}</p>
        <p>{item.price}</p></div>
       
            ))
        }</div>
       
        </>
    )
}