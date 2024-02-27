import React from "react";
import pumps from "/3.png";

function Description() {
	return (
		<div className="text-center flex flex-col gap-4 py-8 px-2">
			<p>
				INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
				RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION
				UNITS OF POWER FOR THE NATION.
			</p>
			<img src={pumps} alt="" />
			<p>
				Valves - Pumps - Pipes - IoT Drives & Controllers - Wires &
				Cables - Solar Systems - Motors
			</p>
			<hr className="text-red-800 bg-red-700 h-1" />
			<p className="font-bold">
				C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
			</p>
			<p>
				CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS |
				PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE
				| METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES
				| SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE &
				RESIDENTIAL
			</p>
		</div>
	);
}

export default Description;
