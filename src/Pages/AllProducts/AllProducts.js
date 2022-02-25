import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuthContexts from '../../hooks/useAuthContexts';
import Footer from '../Shared/Footer/Footer';
import HeaderNavbar from '../Shared/Header/HeaderNavbar/HeaderNavbar';
import LoadingStatus from '../Shared/LoadingStatus/LoadingStatus';
import ProductCard from '../Shared/ProductCard/ProductCard';

const AllProducts = () => {
	const [products, setProducts] = useState([]);
	const [productsItems, setProductItems] = useState(9);
	const { isLoading, setIsLoading } = useAuthContexts();

	// load all products
	useEffect(() => {
		setIsLoading(true);
		const url = `https://guarded-beach-83428.herokuapp.com/products`;
		axios
			.get(url)
			.then(res => {
				// console.log(res.data);
				setProducts(res.data);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => setIsLoading(false));
	}, []);
	const slicedProducts = products.slice(0, productsItems);
	const loadItems = () => {
		setProductItems(productsItems + productsItems);
	}
	return (
		<>
			<HeaderNavbar />
			<main id="all_products_page" className="all-products-page pt-16 md:pt-20">
				<section id="all_products" className="py-8 lg:py-12">
					<div className="text-center mb-8">
						<h2 className="text-4xl">Our Products</h2>
					</div>
					{isLoading && <LoadingStatus />}
					<div className="container">
						<div className="products-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-4 md:gap-x-6 xl:gap-x-12">
							{slicedProducts.map((product, index) => <ProductCard
								key={product._id}
								product={product}
								index={index}
							/>)}
						</div>
						<div className='text-center mt-10'>
							{
								productsItems >= (products.length) ? ' ' : <button className='border-2 p-3 font-my-title tracking-my-tiny btn-regular' onClick={loadItems}>Load More</button>
							}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default AllProducts;