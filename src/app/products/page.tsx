"use client"

import Header from "./components/Header";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Navbar from "../navbar";

type Producs = {
  id:number,
  title: string, 
  description: string,
  price: number
}

// const products:Producs[] = [
//   { id: 1 , title: "Snowboard" , text: "for pro users", price: 788 },
//   { id: 2 , title: "Snow Glases" , text: "See your futur bright", price: 299 },
//   { id: 3 , title: "Pets" , text: "for pro users", price: 68 },
//   { id: 4 , title: "Snowmaschine" , text: "for pro users", price: 2788 },
// ]


export default function ProductsPage() {
  const [products, setProducts] = useState<Producs[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=8')
      .then(response => response.json())
      .then(data => setProducts(data.products) )
      .catch(error => console.error('Error fetching products:', error));
  
  },[]);


  return (
    <>
        <div className="flex flex-col justify-center w-[1200px] mx-auto">
            <Navbar />
            <Header />
            <Search />
            <div className="flex flex-row  justify-start py-5">


              <div className="grid grid-cols-4 gap-5">    
                {products.map((item) => {
                  return <Cards key={item.id} title={item.title} text={item.description} price={item.price} />;
                })};
              </ div >    
              
            </div>
        </div>
    </>
  );
}
