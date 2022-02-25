import React from 'react';
import { RiTimerFlashLine } from 'react-icons/ri';
import { MdOutlineElectricCar, MdOutlineSpeed } from 'react-icons/md';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';

import ProductDescription from './ProductDescription';
import ProductFeatures from './ProductFeatures';
import ProductGallaryImage from '../ProductGallary/ProductGallaryImage';



const ProductDetailInfo = ({ product }) => {

	const { name, image, gallaryImage, description, specs } = product;

	let { path, url } = useRouteMatch();

	const linkActiveStyle = {
		background: 'var(--clr-primary)',
		color: 'white',
	};


	return (
		<div className="product-detail-info h-full">
			{/* <div className="image bg-gray-200 w-full md:min-h-250px" style={{ aspectRatio: '16/9' }}>
				<img src={image} alt={name} className="w-full h-full object-cover object-center" />
			</div> */}

			<div className="mb-16">
				{gallaryImage &&
					<ProductGallaryImage product={product} gallaryImage={gallaryImage} />}
			</div>





			<div className="bg-white py-4 px-2 sm:p-4 flex flex-nowrap justify-evenly text-center space-x-4 border-t border-b my-8 sm:mt-24 font-my-title text-lg">
				<div title="horsepower">
					<p className="uppercase font-semibold text-xs text-true-gray-800 mb-2">Horsepower</p>
					<span>
						<MdOutlineElectricCar className="mx-auto text-5xl text-my-primary" />
					</span>
					<p className="mt-1">
						<span className="text-3xl text-true-gray-800">
							{specs?.horsepower}
						</span>
						hp
					</p>
				</div>
				<div title="acceleration">
					<p className="uppercase font-semibold text-xs text-true-gray-800 mb-2">Acceleration</p>
					<span>
						<RiTimerFlashLine className="mx-auto text-5xl text-my-primary" />
					</span>
					<p className="mt-1">
						<span className="text-3xl text-true-gray-800">
							{specs?.acceleration}
						</span>
						s
					</p>
				</div>
				<div title="top speed">
					<p className="uppercase font-semibold text-xs text-true-gray-800 mb-2">Top Speed</p>
					<span>
						<MdOutlineSpeed className="mx-auto text-5xl text-my-primary" />
					</span>
					<p className="mt-1">
						<span className="text-3xl text-true-gray-800">
							{specs?.topSpeed}
						</span>
						mph
					</p>
				</div>
			</div>
			<div className='flex mt-8'>
				<li>
					<NavLink
						exact
						to={`${url}`}
						title="Dashboard home"
						activeStyle={linkActiveStyle}
						className="py-2 px-1 xl:px-3 w-full"
					>
						<span className='p-4 text-true-gray-800 font-my-title tracking-my-tiny text-2xl'>Description</span>
					</NavLink>
				</li>
				<li >
					<NavLink
						to={`${url}/features`}
						title="Features"
						activeStyle={linkActiveStyle}
						className="py-2 px-1 xl:px-3 w-full"
					>
						<span className='p-4 text-true-gray-800 font-my-title tracking-my-tiny text-2xl'>Features</span>
					</NavLink>
				</li>
			</div>
			<div className="lg:container m-0 lg:m-0 p-0 lg:p-0">
				<Switch>
					<Route exact path={`${path}`}>
						<ProductDescription product={product} />
					</Route>
					<Route path={`${path}/features`}>
						<ProductFeatures product={product} />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default ProductDetailInfo;
