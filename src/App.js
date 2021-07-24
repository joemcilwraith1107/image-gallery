import { Component, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Gallery from "./components/gallery";
import Lightbox from "./components/lightbox";
import { photoArray } from "./images/imagelist";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {activeFilter: 'All', lightboxDisplay: false, imageToShow: ''};
		this.handleFilterChange = this.handleFilterChange.bind(this);
	};

	handleFilterChange = (filter) => {
		this.setState({activeFilter: filter});
	};

	render() {
		const images = photoArray(this.state.activeFilter);
		return (
			<div className="flex flex-col h-screen justify-between">
				<Header 
			  		activeFilter={this.state.activeFilter}
					onFilterChange={this.handleFilterChange}
				/>
	  
			  <Gallery 
				images={images}
			  /> 
	  
			  {/* {
			  this.state.lightboxDisplay ?
			  <Lightbox 
				image={images[imageToShow]}
				setLightboxDisplay={setLightboxDisplay}
				setImageToShow={setImageToShow}
				imageArray={images}
			  />
			  : ""
	  
			  }              */}
			  <Footer />
			</div>
		);
	};
}

export default App
