import React from "react";
import award from "/1.png";
import photo from "/2.png";

function Hero() {
	return (
		<div className="sm:my-8 w-full flex-col flex lg:flex-row xl:flex-row sm:px-4">
			<div className="w-full flex justify-center items-center">
				<img
					src={award}
					className="w-[250px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px]"
					alt=""
				/>
			</div>
			<div className="flex flex-col px-4 sm:px-0">
				<p className="font-bold">
					C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD
					2018 for the 4th time.
				</p>
				<ul className="ps-10 py-4 list-disc text-black">
					<li>
						C.R.I.'s energy efficient products are well recognized
						by various Government Institutions, as trustworthy
						products for various projects across the globe to save
						energy.
					</li>
					<li>
						C.R.I. is the highest contributor in the country for the
						projects of EESL (Energy Efficiency Services Limited) to
						replace the old inefficient pumps with 5 Star rated
						energy efficient smart pumps with IoT enabled control
						panel.
					</li>
				</ul>
				<img src={photo} alt="" />
				<p>
					Government of India has awarded the{" "}
					<span className="font-bold">
						"National Energy Conservation Award 2018"
					</span>
					. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
					received the award from Smt. Sumitra Mahajan, Speaker of Lok
					Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
				</p>
			</div>
		</div>
	);
}

export default Hero;
