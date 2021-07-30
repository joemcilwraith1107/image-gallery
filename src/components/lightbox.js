import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";

const Lightbox = ({ images, imageToShow, handleChange, handleClose}) => {
    const image = images[imageToShow];

    const close = (e) => {
        handleClose();
    }

    const scrollImage = (direction, index) => {
        let newIndex = '';
        if (direction === 'back') {
            if (index === 0) {
                newIndex = images.length -1;
            } else {
                newIndex = index -1;
            }
        } else {
            if (index === (images.length -1)) {
                newIndex = 0;
            } else {
                newIndex = index +1
            }
        }
        handleChange(newIndex);
    };

    const ScrollButton = ({ direction } ) => {
        const character = direction === 'back' ? faChevronLeft : faChevronRight;
        return (
            <button className="text-white place-self-center z-50 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" onClick={(e) => e.stopPropagation(scrollImage(direction, imageToShow))}>
                <FontAwesomeIcon icon={character} color="white"/>
            </button>
        )
    }
    

    return (
        <div id="lightbox" className="fixed inset-0 z-40 bg-black bg-opacity-75 w-full h-full box-border" onClick={close}>
            <div className="flex flex-row w-full h-full overflow-hidden">
                <div className="w-0.09">
                    <div className="h-0.1"></div>
                    <div className="h-4/5 flex justify-center">
                    <ScrollButton
                        direction={'back'}
                    />
                    </div>
                    <div className="h-0.1"></div>
                </div>
                <div className="h-full min-w-0.01 flex-auto"></div>
                <div className="h-full flex-initial">
                    <div className="h-0.1"></div>
                    <div className="h-4/5 flex" >
                        <img src={`/assets/photos/${image.name}`} alt={image.caption} className="h-80-screen max-w-80-screen object-contain self-center" />
                    </div>
                    <div className="h-0.1 py-0 sm:py-1 md:py-2 lg:py-3 xl:py-4">
                        <p className="text-base text-white">{image.caption}</p>
                    </div>
                </div>
                <div className="h-full min-w-0.01 flex-auto"></div>
                <div className="w-0.09">
                    <div className="h-0.1 flex justify-center">
                        <button className="text-white place-self-center z-50 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" onClick={close}>
                            <FontAwesomeIcon icon={faTimes} color="white"/>
                        </button>
                    </div>
                    <div className="h-4/5 flex justify-center">
                    <ScrollButton 
                        direction={'forward'}
                    />
                    </div>
                    <div className="h-0.1"></div>
                </div>
            </div>
        </div>
    );

};

export default Lightbox 