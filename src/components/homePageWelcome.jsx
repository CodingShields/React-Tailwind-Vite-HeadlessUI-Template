import { useState, useEffect } from "react";
import SignUpForm from "./signUpForm";
import LoginForm from "./loginForm";

const HomePageWelcome = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		welcomeMessage: true,
		signUp: false,
		login: false,
		loading: false,
	});

	useEffect(() => {
		setState({ ...state, loading: true, signUp: false, login: false, welcomeMessage: true });
	}, []);

	const handleLoginChange = () => {
		setState({ ...state, loading: true, signUp: false, login: true, welcomeMessage: false });
	};

	const handleSignUpChange = () => {
		setState({ ...state, loading: true, signUp: true, login: false, welcomeMessage: false });
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
			{" "}
			{state.welcomeMessage ? (
				<div className='flex flex-col justify-center items-center w-fit h-fit space-y-12 bg-blue-600 py-14 px-10 rounded-lg bg-opacity-90 shadow-green-400 shadow-2xl z-10'>
					<h1 className='text-4xl text-center text-white font-bold'>Welcome to the Coding Shields Client Portal</h1>
					<h1 className='text-2xl text-center text-white font-semibold w-176'>
						Here you can view the status of your project, and communicate with the developers working on your project.
					</h1>
					<div className='flex flex-row justify-center items-center w-full h-full space-x-12 py-10 px-12 z-10'>
						<button
							onClick={() => setState({ ...state, signUp: true, welcomeMessage: false, login: false })}
							className='w-72 h-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:scale-125 transition-all ease-in-out'
						>
							Sign Up
						</button>
						<button
							onClick={() => setState({ ...state, login: true, welcomeMessage: false, signUp: false })}
							className='w-72 h-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:scale-125 transition-all ease-in-out'
						>
							Login
						</button>
					</div>
				</div>
			) : (
				""
			)}
			{state.signUp ? <LoginForm onClick={handleLoginChange} /> : ""}
			{state.login ? <SignUpForm onClick={handleSignUpChange} /> : ""}
		</div>
	);
};

export default HomePageWelcome;
