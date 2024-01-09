import { useState, useEffect } from "react";
import SignUpForm from "../components/SignUpForm";
import purpleHex from "../assets/video/purpleHex.mp4";
import codingShieldsClientSiteBG from "../assets/video/codingShieldsClientSiteBG.mp4";
const SignUpPage = () => {
	return (
		<div className='w-full h-screen flex flex-col justify-center items-center '>
			<video
				className='absolute top-0 left-0 w-full h-full object-cover z-0'
				autoPlay
				loop
				muted
				src={codingShieldsClientSiteBG}
				type='video/mp4'
			></video>
			<SignUpForm />
		</div>
	);
};

export default SignUpPage;
