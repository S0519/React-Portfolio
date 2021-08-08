import React from "react";
import Slider from "../../components/slider/slider";
import Header from "../../components/header/header";
import About from "../../components/about/about";
import Footer from "../../components/footer/footer";
import Portfolio from "../../components/portfolio/portfolio";
import CustomModal from "../../components/modal/modal";
import CallToAction from "../../components/calltoaction/calltoaction";

const Home = () => {
	return (
		<div className="home-one">
			<Header/>
			<Slider/>
			<About/>
			<Portfolio/>
			<CallToAction/>
			<Footer/>
			<CustomModal/>
		</div>

	)
}

export default Home;
