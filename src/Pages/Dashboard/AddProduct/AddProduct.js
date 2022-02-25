import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { RiAsterisk } from 'react-icons/ri';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// initialize Swal (sweet alert)
const MySwal = withReactContent(Swal);

const AddProduct = () => {

	// add new product on form submit
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		console.log(data);
		axios
			.post('https://guarded-beach-83428.herokuapp.com/products', data)
			.then(res => {
				// console.log(res);
				if (res.data.insertedId) {
					reset();
					MySwal.fire({
						icon: 'success',
						title: `<span class="inline-block font-medium text-xl md:text-2xl tracking-normal md:tracking-normal leading-normal md:leading-normal">Product ADDED successfully!</span>`,
						confirmButtonText: `OK`,
						buttonsStyling: false,
						customClass: {
							confirmButton: 'btn-regular py-2',
						},
					});
				}
			})
			.catch(err => console.log(err));

		// MySwal.fire({
		// 	icon: 'warning',
		// 	title: ``,
		// 	html: `<span class="inline-block font-medium text-sm">For security purpose add product system is disabled currently.</span>`,
		// 	confirmButtonText: `OK`,
		// 	buttonsStyling: false,
		// 	customClass: {
		// 		confirmButton: 'btn-regular py-2',
		// 	},
		// });
	};

	return (
		<section id="add_product" className="add-product">
			<h3 className="uppercase font-semibold text-lg lg:text-2xl leading-none lg:leading-none mb-6">
				Add a Product
			</h3>
			<div className="max-w-2xl">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-4"
				>
					<div>
						<label className="block mb-1">
							Product name{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
						</label>
						<input
							className="form-field"
							{...register('name', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Brand name{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
						</label>
						<input
							className="form-field"
							{...register('brandName', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Product Image{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
						</label>
						<input
							className="form-field"
							{...register('image', { required: true })}
						/>
						<span className="text-xs text-gray-400 px-2">
							Recommended image ratio 16:9, size 1024x576
						</span>
					</div>

					{/* Gallery Image Add */}

					<div>
						<label className="block mb-1">
							Thumbnail Gallery Image 1{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
						</label>
						<input
							className="form-field"
							{...register('gallaryImage.gimg1', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Thumbnail Gallery Image 2{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
						</label>
						<input
							className="form-field"
							{...register('gallaryImage.gimg2', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Thumbnail Gallery Image 3{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
						</label>
						<input
							className="form-field"
							{...register('gallaryImage.gimg3', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Thumbnail Gallery Image 4{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
						</label>
						<input
							className="form-field"
							{...register('gallaryImage.gimg4', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Thumbnail Gallery Image 5{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
						</label>
						<input
							className="form-field"
							{...register('gallaryImage.gimg5', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Thumbnail Gallery Image 6{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
						</label>
						<input
							className="form-field"
							{...register('gallaryImage.gimg6', { required: true })}
						/>
					</div>


					{/* Description Section */}

					<div>
						<label className="block mb-1">
							Category{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"
							defaultValue="Description"
							readOnly
							className="form-field"
							{...register('description.category', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Description{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<textarea
							className="form-field h-36 py-2"
							{...register('description.desc', { required: true })}
						></textarea>
					</div>
					<div>
						<label className="block mb-1">
							Question One{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"
							className="form-field"
							{...register('description.desc_feature.question.ques1', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Question Two{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"

							className="form-field"
							{...register('description.desc_feature.question.ques2', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Question Three{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"

							className="form-field"
							{...register('description.desc_feature.question.ques3', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Answer One{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"

							className="form-field"
							{...register('description.desc_feature.answer.ans1', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Answer Two{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"

							className="form-field"
							{...register('description.desc_feature.answer.ans2', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Answer Three{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"

							className="form-field"
							{...register('description.desc_feature.answer.ans3', { required: true })}
						/>
					</div>


					{/* Features Section */}
					<div>
						<label className="block mb-1">
							Catergory{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"
							readOnly
							defaultValue="Features"
							className="form-field"
							{...register('features.category', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Feature One{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"
							className="form-field"
							{...register('features.fea1', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Feature Two{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"
							className="form-field"
							{...register('features.fea2', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Feature Three{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"
							className="form-field"
							{...register('features.fea3', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Feature Four{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"
							className="form-field"
							{...register('features.fea4', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Feature Five{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"
							className="form-field"
							{...register('features.fea5', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Feature Six{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
						</label>
						<input
							type="text"
							className="form-field"
							{...register('features.fea6', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Price{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />{' '}
							<span className="opacity-70 text-sm">(in USD)</span>
						</label>
						<input
							type="number"
							min="1"
							className="form-field"
							{...register('price', { required: true, min: 1 })}
						/>
					</div>
					{/* <div>
						<label className="block mb-1">
							Description{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
						</label>
						<textarea
							className="form-field h-36 py-2"
							{...register('description', { required: true })}
						></textarea>
					</div> */}
					<div>
						<label className="block mb-1">
							Color{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
						</label>
						<input
							className="form-field"
							{...register('specs.color', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Engine capacity-type{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
						</label>
						<input
							className="form-field"
							{...register('specs.engine', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Horsepower{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
							<span className="opacity-70 text-sm">(in HP)</span>
						</label>
						<input
							className="form-field"
							{...register('specs.horsepower', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Acceleration{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
							<span className="opacity-70 text-sm">(in Seconds)</span>
						</label>
						<input
							className="form-field"
							{...register('specs.acceleration', { required: true })}
						/>
					</div>
					<div>
						<label className="block mb-1">
							Top speed{' '}
							<RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />
							<span className="opacity-70 text-sm">(in MPH)</span>
						</label>
						<input
							className="form-field"
							{...register('specs.topSpeed', { required: true })}
						/>
					</div>
					<div className="mt-6">
						{(errors.name ||
							errors.brandName ||
							errors.image ||
							errors.price ||
							errors.description ||
							errors.specs?.color ||
							errors.specs?.engine ||
							errors.specs?.horsepower ||
							errors.specs?.acceleration ||
							errors.specs?.topSpeed) && (
								<p className="text-sm text-red-600 leading-loose">
									Please fill up every field properly.
								</p>
							)}
						<input
							type="submit"
							value="Add Product"
							className="btn-regular text-sm leading-none px-4 sm:px-6 mr-4"
						/>
						<input
							type="reset"
							value="Clear fields"
							className="btn-regular bg-my-secondary-light text-sm leading-none px-4 sm:px-6"
						/>
					</div>
				</form>
				{/* <div className="status">
					<p className="mt-4 text-sm text-gray-400 text-my-primary-dark">
						For security purpose add product system is disabled currently.{' '}
					</p>
					<p className="mt-4 text-sm text-gray-400">
						For more product info{' '}
						<a
							href="https://github.com/FazleRabbiRana?tab=repositories"
							target="_blank"
							rel="noreferrer"
							className="text-blue-500 underline hover:text-blue-700"
						>
							Click here
						</a>
					</p>
				</div> */}
			</div>
		</section>
	);
};

export default AddProduct;
