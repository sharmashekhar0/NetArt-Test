import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Description from "./components/Description.jsx";

function App() {
	return (
		<>
			<div className="font-serif">
				<Header />
				<Hero />
				<Description />
				<Footer />
			</div>
		</>
	);
}

export default App;
