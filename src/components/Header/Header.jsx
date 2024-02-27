import React from "react";
import logo from "/logo.png";

function Header() {
	return (
		<div className="flex justify-center h-32 m-2 sm:m-0">
			<img src={logo} alt="Logo" />
		</div>
	);
}

export default Header;
