"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import ErrorUI from "./Error";
import LoaderUI from "./Loader";
import { useRouter } from "next/router";



export default function Products() {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);





  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      // console.log(response.data)
      setProductsData(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      // console.log(error);
      setError(error.message || "An error occurred while fetching products.");
      setProductsData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <LoaderUI />;
  }

  if (error) {
    return <ErrorUI message={error} handleReload={fetchProducts}/>;
  }



  // console.log(productsData[0]);
  
  return (
    <div  className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-16">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        {productsData.map((product) => (
          <ElegantProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// function ModernProductCard({ product }) {
//   return (
//     <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
//       <div className="relative w-[100px] h-[100px] overflow-hidden">
//       <Image
//         src={product.image}
//         alt={product.title}
//         loading="lazy"
//         // fill
//         // sizes="(max-width: 768px) 100vw, 
//         //        (max-width: 1200px) 50vw, 
//         //        5vw"
//         objectFit="contain" // Use 'cover' to maintain aspect ratio
//         className="transition-transform duration-300 group-hover:scale-110"
//       />
//     </div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//       <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
//         <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
//         <div className="flex items-center justify-between">
//           <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
//           <button className="bg-background text-foreground rounded-full p-2 hover:bg-gray-200 transition-colors duration-300">
//             <ShoppingCart size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

export function ElegantProductCard({ product }) {

  const router = useRouter();
  return (
    <div onClick={() => router.push(`/products/${product.id}`)} className="bg-cardBg rounded-lg overflow-hidden shadow-md transition-all duration-400 hover:shadow-xl hover:scale-105 cursor-pointer border-t-4 border-primary">
      <div className="relative h-36 w-36 my-4 mx-auto">
        <Image
          src={product.image}
          alt={product.title}
          loading="lazy"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"    
          className="transition-transform duration-300 group-hover:scale-110 object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2 truncate">
          {product.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <button className="bg-primary text-background px-4 py-2 rounded-full hover:bg-accent transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
