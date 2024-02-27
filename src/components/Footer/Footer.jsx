import React from "react";
import facebook from "/fb.svg";
import telephone from "/tp.svg";
import web from "/web.svg";

function Footer() {
	return (
		<div className="py-10 sm:py-12 lg:gap-4 sm:text-2xl bg-red-500 text-white flex flex-col xl:flex-row justify-center sm:justify-between ps-14 gap-2 sm:gap-4 sm:px-20">
			<p className="flex gap-2 sm:gap-4 items-center text-nowrap">
				<i className="fa-solid fa-phone bg-white text-red-600 p-2 sm:p-2 rounded-full"></i>
				Toll free <span className="font-bold">1800 200 1234</span>
			</p>
			<p className="flex gap-4 items-center">
				<i class="fa-brands fa-facebook text-3xl sm:text-4xl"></i>
				www.facebook.com/cripumps
			</p>
			<p className="flex gap-4 items-center">
				<i class="fa-solid fa-globe text-white text-3xl sm:text-4xl"></i>
				www.crigroups.com
			</p>
		</div>
	);
}

export default Footer;
