import { useState, useEffect } from "react";
import { useClientStore } from "../state store/userStateStore";
import { useClientStoreActions } from "../state store/userStateStore";
import { useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";
import logoPng from "../assets/logo/logoPng.png";
import SignUpFormData from "../assets/data/SignUpFormData";

const SignUpForm = () => {
	const [state, SetState] = useState({
		error: "",
		errorMessage: "",
		loading: false,
		success: false,
	});

	const [formData, setFormData] = useState({
		company: "",
		repFirstName: "",
		repLastName: "",
		repEmail: "",
		repPhone: "",
	});

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(form);
	};

	return (
		<div className='flex flex-col justify-start items-center w-full h-full pt-4'>
			{/* <div className={state.error ? "flex flex-col justify-center items-center w-1/2 h-20 bg-red-200 space-y-10" : "hidden"}>
				<p className='text-red-500 text-lg'>{state.error}</p>
				<p className='text-red-500 text-lg'>{state.errorMessage}</p>
			</div> */}
			<div className='flex flex-row justify-center items-center w-1/2 h-fit bg-blue-700 space-y-8 pb-8'>
				<img className=' w-112' src={logoPng} alt='logo' />
				<div className='flex flex-col justify-center items-end w-full h-full space-y-2'>
					test test
					{SignUpFormData.map((item, index) => {
						return (
							<div key={index[0]}>
								<h1>{item[0]}</h1>
							</div>
						);
					})}
				</div>
				<div className='flex flex-col justify-center items-start w-full h-full space-y-2'></div>

				<button
					onClick={handleFormSubmit}
					className='w-1/2 h-10 px-3 text-base placeholder-gray-600 border rounded-lg font-semibold text-white focus:shadow-outline hover:bg-white hover:text-black hover:font-bold shadow-lg shadow-white hover:shadow-black'
					type='submit'
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default SignUpForm;
