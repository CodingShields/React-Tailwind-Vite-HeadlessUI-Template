import { useState, useEffect } from "react";


import codingShieldsClientSiteBG from "../assets/video/codingShieldsClientSiteBG.mp4";

import HomePageWelcome from "./homePageWelcome";

const HomePage = () => {
	return (
		<div className='w-full h-screen flex flex-col justify-center items-center  z-10'>
			<video
				className='absolute top-0 left-0 w-full h-full object-cover z-0'
				autoPlay
				loop
				muted
				src={codingShieldsClientSiteBG}
				type='video/mp4'
            ></video>
            
			<HomePageWelcome />
		</div>
	);
};
export default HomePage;
