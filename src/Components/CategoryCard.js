import React from "react";
import category1 from '../assets/shoppage/card-item-1.png';
import category2 from '../assets/shoppage/card-item-2.png';
import category3 from '../assets/shoppage/card-item-3.png';
import category4 from '../assets/shoppage/card-item.png';
import category5 from '../assets/shoppage/col-md-4.png';

const categories = [
    { img: category1 },
    { img: category2 },
    { img: category3 },
    { img: category4 },
    { img: category5 },
];

function CategoryCard() {
  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="max-w-xs bg-white shadow-md overflow-hidden m-4">
          <img className="w-full h-auto" src={category.img} alt={`Category ${index + 1}`} />
        </div>
      ))}
    </>
  );
}

export default CategoryCard;
