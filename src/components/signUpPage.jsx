import { useState, useEffect } from "react";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<h1>Sign Up</h1>
					<SignUpForm />
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
