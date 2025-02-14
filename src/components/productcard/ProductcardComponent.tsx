/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";
import '../../styles/globals.css';
import React, { ReactNode } from 'react'

interface ProductCardProps {
    productName: string;
    price: number;
    img: string;
}


const ProductCard: React.FC<ProductCardProps> = ({ productName, price, img }) => {


    return (

        <>
            
                <div  className="group" >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img src={img} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{productName}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
                </div>
            
        </>

    );
}
export default ProductCard
