import React from "react";
import ProductCard from "../Components/ProductCard";
import Categories from "../Components/Categories";
import Companies from "../Layouts/Companies";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import imageee from "../assets/homepage/product-cover-5productPage1.png";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      image: imageee,
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex w-3/4 px-12 justify-between flex-wrap items-center py-6">
        <div className="text-[#252B42] flex items-center flex-grow gap-24">
          <h3 className="text-2xl font-bold">Shop</h3>
        </div>
        <p className="text-sm text-gray-300 font-bold ">Home -- Shop</p>
      </div>
      <Categories />
      <div className="flex w-3/4 px-16 justify-between flex-wrap items-center py-6">
        <div className="text-[#252B42] flex items-center flex-grow gap-24">
          <h3 className="text-sm  text-gray-600 font-bold">
            showing all 36 results
          </h3>
        </div>
      </div>
      <div className="flex w-3/4 justify-center flex-wrap py-10 gap-10">
        {products.map((product) => (
          <Link to="/productpage" key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <Companies />
    </div>
  );
};

export default Shop;
