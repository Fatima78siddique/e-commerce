import { title } from 'process'
import React from 'react'
import ProductCard from './productCard';
const productsData=[
{
    img: "/shirt1.jpg",
    title: "Shirt",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price:"45.00",
},
{
    img: "/sports1.jpg",
    title: "Sports",
    desc: "Tracking and Running Shoes",
    rating: 43,
    price:"58.00",

},
{
    img: "/watch2.jpg",
    title: "Watches",
    desc: "Smart Watches Vital plus",
    rating: 4,
    price:"100.00",

},
{
    img: "/watch3.jpg",
    title: "Watches",
    desc: "Leather Watch",
    rating: 4,
    price:"130.00",

},
];

const NewProducts = () => {
  return (
    <div><div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4 '> New Products
            </h2>
            
         <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>

            {productsData.map((item , index) => (
            <ProductCard key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}

            
            
            
            />))}
            
            </div>   
            
            </div>
            </div>
  );
};

export default NewProducts