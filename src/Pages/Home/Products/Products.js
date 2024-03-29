import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuthContexts from "../../../hooks/useAuthContexts";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { setIsLoading } = useAuthContexts();
  const homeProducts = products.slice(0, 6);

  // load all products
  useEffect(() => {
    setIsLoading(true);
    const url = `https://car-nation-server-side-production.up.railway.app/products`;
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section id="home_products" className="py-16 md:py-20 bg-my-yellow-cream">
      <div className="container">
        <div className="text-center mb-12">
          <p className="uppercase font-medium text-gray-700 font-my-title text-sm tracking-widest mb-2 md:mb-3">
            Find Best Cars
          </p>
          <h2 className="text-4xl">Our Best Products</h2>
        </div>
        {/* {isProductsLoading && <LoadingStatus />} */}
        <div className="products-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-4 md:gap-x-6 xl:gap-x-12">
          {homeProducts.map((product, index) => (
            <ProductCard key={product._id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
