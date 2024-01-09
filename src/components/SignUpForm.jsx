import { useState, useEffect } from "react";
import { useClientStore } from "../state store/userStateStore";
import { useClientStoreActions } from "../state store/userStateStore";
import { useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";
import logoPng from "../assets/logo/logoPng.png";
import statesArray from "../assets/data/statesArray";

const SignUpForm = ({ onClick }) => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		successMessage: "",
	});
	const [formData, setFormData] = useState({
		company: "",
		repFirstName: "",
		repLastName: "",
		phone: "",
		address: "",
		city: "",
		state: "",
		zip: "",
		country: "",
		repEmail: "",
		website: "",
		industry: "",
		logo: {
			imageName: "",
			imageUrl: logoPng,
		},
	});
	const resetForm = () => {
		setFormData({
			company: "",
			repFirstName: "",
			repLastName: "",
			phone: "",
			address: "",
			city: "",
			state: "",
			zip: "",
			country: "",
			repEmail: "",
			website: "",
			industry: "",
			logo: {
				imageName: "",
				imageUrl: logoPng,
			},
			password: "",
		});
	};

	useEffect(() => {
		setState({ ...state, loading: true });
	}, []);

	useEffect(() => {
		if (state.success) {
			setTimeout(() => {
				setState({ ...state, success: false });
			}, 3000);
			resetForm();
		} else if (state.error) {
			setTimeout(() => {
				setState({ ...state, error: false });
			}, 3000);
		}
	}, [state.success, state.error]);

	const onChangePhoto = (e) => {
		const newImage = e.target.files[0];
		const imageName = e.target.files[0].name;
		const imageUrl = URL.createObjectURL(newImage);
		setFormData({ ...formData, logo: { imageName, imageUrl } });
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	// flex flex-col justify-center items-center w-full h-fit z-10 transition-all ease-in  duration-900'

	return (
		<div
			className={classNames(
				state.loading
					? "opacity-100 transition-all ease-in-out duration-1000 delay-400 flex flex-col justify-center items-center w-full h-fit z-10 "
					: "opacity-0 transition-all ease-in-out duration-1000 delay-400"
			)}
		>
			<div
				className={
					state.error ? "fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full space-y-10 bg-black bg-opacity-50" : "hidden"
				}
			>
				<div className='flex flex-col justify-center items-center h-fit w-fit space-y-10 bg-red-200 px-8 py-6 border-2 border-red-700 shadow-black shadow-2xl rounded-md'>
					<p className='text-red-500 text-2xl'>{state.errorMessage}</p>
				</div>
			</div>
			<div
				className={
					state.success ? "fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full space-y-10 bg-black bg-opacity-50" : "hidden"
				}
			>
				<div className='flex flex-col justify-center items-center h-fit w-fit space-y-10 bg-green-200 px-8 py-6 border-2 border-green-600 shadow-green-400 shadow-2xl rounded-md'>
					<p className='text-red-500 text-2xl'>{state.successMessage}</p>
				</div>
			</div>
			<div className='flex flex-row justify-center items-center w-fit h-full py-12 space-x-12 px-12 '>
				<div className='flex flex-col justify-center items-center w-full h-full space-y-4 bg-blue-600 py-10 px-10 rounded-lg bg-opacity-90 shadow-green-400 shadow-2xl'>
					<h1 className='text-white text-4xl font-bold'>Sign Up</h1>
					<p className='text-white text-2xl'>Create your account</p>
					<input
						onChange={(e) => setFormData({ ...formData, company: e.target.value })}
						className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='text'
						placeholder='Company Name'
					/>
					<input
						onChange={(e) => setFormData({ ...formData, repFirstName: e.target.value })}
						className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='text'
						placeholder='First Name'
					/>
					<input
						onChange={(e) => setFormData({ ...formData, repLastName: e.target.value })}
						className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='text'
						placeholder='Last Name'
					/>
					<input
						onChange={(e) => setFormData({ ...formData, email: e.target.value })}
						className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='text'
						placeholder='Email'
					/>
					<input
						onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
						className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='number'
						placeholder='Phone'
					/>
					<textarea
						onChange={(e) => setFormData({ ...formData, address: e.target.value })}
						className='w-72 h-20 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='text'
						placeholder='Address'
					/>
					<input
						onChange={(e) => setFormData({ ...formData, city: e.target.value })}
						className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='text'
						placeholder='City'
					/>
					<select
						onChange={(e) => setFormData({ ...formData, state: e.target.value })}
						className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='text'
						placeholder='State'
					>
						{statesArray.map((state, index) => (
							<option
								className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
								key={index}
							>
								{state}
							</option>
						))}
					</select>
					<input
						onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
						className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='number'
						placeholder='Zip Code'
					/>
					<select
						onChange={(e) => setFormData({ ...formData, country: e.target.value })}
						className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='text'
						placeholder='Country'
					>
						<option className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:shadow-outline'>United States</option>
						<option className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:shadow-outline'>United Kingdom</option>
						<option className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:shadow-outline'>Canada</option>
						<option className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:shadow-outline'>Australia</option>
					</select>
				</div>
				<div className='flex flex-col justify-center items-center w-full h-full space-y-6 bg-blue-600 py-2 px-10 rounded-lg bg-opacity-90 shadow-green-400 shadow-2xl '>
					<img className='w-72 h-72' src={formData.logo.imageUrl} />
					<h1 className='text-white text-xl font-bold'>Company Logo</h1>
					<input
						onChange={onChangePhoto}
						className='w-full h-full px-2 py-4 placeholder-gray-600 border rounded-lg font-semibold text-center   text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='file'
						placeholder='Upload Logo'
					/>
					<input
						onChange={(e) => setFormData({ ...formData, website: e.target.value })}
						className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='url'
						placeholder='Website'
					/>
					<input
						onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
						className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='text'
						placeholder='Industry'
					/>
					<input
						onChange={(e) => setFormData({ ...formData, password: e.target.value })}
						className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='password'
						placeholder='Password'
					/>
					<button
						// onClick={handleFormSubmit}
						className='w-72 h-10  placeholder-gray-600 px-4 py-2 border rounded-lg font-semibold text-white focus:shadow-outline hover:bg-white hover:text-black hover:font-bold shadow-lg shadow-white hover:shadow-black'
						type='submit'
					>
						Submit
					</button>
					<div className='flex flex-col justify-center items-center w-full h-full '>
						<h1 className='text-white animate-pulse'>Already Have An Account?</h1>
						<button
							onClick={onClick}
							className='w-72 h-10  text-gray-400  font-semibold  hover:text-white hover:font-bold hover:scale-125 hover:transition-all ease-in-out'
						>
							Click Here
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
