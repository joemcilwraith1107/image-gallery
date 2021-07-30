import React, { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Gallery from "./components/gallery";
import Lightbox from "./components/lightbox";
import { photoArray } from "./images/imagelist";

const App = () => {
	const initImages = photoArray('All');
	const [images, setImages] = useState(initImages);
	const [activeFilter, setActiveFilter] = useState('All');
	const [lightboxDisplay, setLightboxDisplay] = useState(false);
	const [imageToShow, setImageToShow] = useState(''); 
    
    const filterItems = (filter) => {
        const updatedImages = photoArray(filter);
		setActiveFilter(filter);
		setImages(updatedImages);
    };

	const updateLightbox = (index) => {
		setLightboxDisplay(true)
		setImageToShow(index);
	}

	const closeLightbox = () => {
		setLightboxDisplay(false);
		setImageToShow('');
	}

	return (
		<div className="flex flex-col h-screen justify-between">
			<Header 
				activeFilter={activeFilter}
				onFilterChange={filterItems}
			/>
	
			<Gallery 
				images={images}
				onImageClick={updateLightbox}
			/> 
	
			{
			lightboxDisplay ?
			<Lightbox 
				images={images}
				imageToShow={imageToShow}
				handleChange={updateLightbox}
				handleClose={closeLightbox}
			/>
			: ""
	
			}
			<Footer />
		</div>
	);
}

export default App
