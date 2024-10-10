// pages/products/[id].js
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState, useEffect, useCallback} from 'react';
import LoaderUI from '@/components/Loader';
import ErrorUI from '@/components/Error';
import axios from 'axios';


// Dynamically import ProductDetails component with a loading indicator
const ProductDetails = dynamic(() => import('../../../components/ProductDetails'), {
  loading: () => <LoaderUI/>,
  ssr: false,  // Disable SSR if this component is large and client-side only
});

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchProduct = useCallback(async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      // console.log(response.data)
      setProduct(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      // console.log(error);
      setError(error.message || "An error occurred while fetching products.");
      setProduct({});
      setLoading(false);
    }
  }, [id])

  useEffect(() => {
   
      if(id) {
        fetchProduct();
      }

  }, [id, fetchProduct]);

  if (loading) {
    return <LoaderUI />;
  }

  if (error) {
    return <ErrorUI message={error} handleReload={fetchProduct}/>;
  }

  return (
    <div className='container mx-auto p-4 sm:p-6 md:p-8 lg:p-16 w-[600px]'>
        <ProductDetails product={product}/>
    </div>
  );
};

export default ProductPage;
