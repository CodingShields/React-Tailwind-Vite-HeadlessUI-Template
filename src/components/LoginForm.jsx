import { useState, useEffect } from "react";
import { useClientStore } from "../state store/userStateStore";
import { useClientStoreActions } from "../state store/userStateStore";
// import { UserAuth } from "../context/AuthContext";
import logoPng from "../assets/logo/logoPng.png";

const SignUpForm = ({ onClick }) => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		successMessage: "",
	});
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const resetForm = () => {
		setFormData({
			email: "",
			password: "",
		});
	};
	useEffect(() => {
		setState({ ...state, loading: true });
	}, []);

	const handleLogin = async (e) => {
		e.preventDefault();
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}
	return (
		<div
			className={classNames(
				state.loading
					? "opacity-100 transition-all ease-in-out duration-1000 delay-400 flex flex-col justify-center items-center w-full h-fit z-10 "
					: "opacity-0 transition-all ease-in-out duration-1000 delay-400"
			)}
		>
			{/* <div
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
			</div> */}
			<div className='flex flex-row justify-center items-center w-fit h-full py-12 space-x-12 px-12 '>
				<div className='flex flex-col justify-center items-center w-full h-full space-y-4 bg-blue-600 py-10 px-10 rounded-lg bg-opacity-90 shadow-green-400 shadow-2xl'>
					<h1 className='text-white text-4xl font-bold'>Client Login Portal</h1>
					<img className='w-72 h-72' src={logoPng} alt='Coding Shields Logo' />
					<input
						onChange={(e) => setFormData({ ...formData, email: e.target.value })}
						className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='text'
						placeholder='User Email'
					/>
					<input
						onChange={(e) => setFormData({ ...formData, password: e.target.value })}
						className='w-72 h-10 placeholder-gray-600 border rounded-lg font-semibold text-black focus:outline-green-500 focus:outline-4 shadow-black shadow-md focus:scale-125 bg-gray-400 hover:bg-white focus:transition-all ease-in-out'
						type='password'
						placeholder='Password'
					/>
					<button
						onClick={handleLogin}
						className='w-72 h-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:scale-125 transition-all ease-in-out'
					>
						Login
					</button>
					<h1>Don't have an account?</h1>{" "}
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
