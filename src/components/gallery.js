import React from "react";

const Gallery = ({ images, onImageClick }) => {
    const handleImageClick = (index) => {
        onImageClick(index);
    }
    return (
        <div className="mb-auto">
            <div className="container mx-auto flex flex-wrap overflow-hidden justify-center align-middle pb-4">
            {
            images && 
                images.map((image, index) => (
                    <div className="flex w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/5 overflow-hidden align-middle justify-center p-2 " key={index}>
                        <div className="relative w-full h-0 pt-1/1">
                            <img src={`/assets/photos/${image.name}`} alt={image.caption} className="absolute inset-0 w-full h-full object-cover" loading="lazy" onClick={() => handleImageClick(index)} />
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Gallery