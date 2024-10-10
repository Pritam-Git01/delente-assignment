import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react'

export default function ProductDetails({ product = {
  id: 1,
  title: "Sample Product",
  price: 99.99,
  category: "Electronics",
  image: "/placeholder.svg",
  rating: {
    rate: 4.0,
    count: 500
  }
} }){

  const fullStars = Math.floor(product.rating.rate)
  const hasHalfStar = product.rating.rate % 1 !== 0;

  return (
    <div className="max-w-sm mx-auto bg-cardBg rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="relative my-4 h-48 mx-auto w-48">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="contain"
          className="transition-opacity duration-300 ease-in-out group-hover:opacity-75"
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-bold">
          New
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-foreground dark:text-white mb-2 ">
          {product.title}
        </h2>
        <p className="text-sm text-primary font-medium mb-2">
          {product.category}
        </p>
        <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => {
            if (i < fullStars) {
              return <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />;
            } else if (i === fullStars && hasHalfStar) {
              return <StarHalf key={i} className="w-5 h-5 text-yellow-400 fill-current" />;
            } else {
              return <Star key={i} className="w-5 h-5 text-gray-300 dark:text-gray-600" />;
            }
          })}
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-foreground ">
            ${product.price.toFixed(2)}
          </span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}