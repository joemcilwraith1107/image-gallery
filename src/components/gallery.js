import { Component } from "react";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.setImageToShow = props.setImageToShow;
        this.showLightbox = this.props.setLightboxDisplay
        this.images = props.images;
    }

    displayImage = (image) => {
        this.showLightbox(true);
        this.setImageToShow(image)
    };
    render() {
        return (
            <div className="mb-auto">
                <div className="container mx-auto flex flex-wrap overflow-hidden justify-center align-middle pb-4">
                {
                this.images && 
                    this.images.map((image, index) => (
                        <div className="flex w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/5 overflow-hidden align-middle justify-center p-2 " key={index}>
                            <div className="relative w-full h-0 pt-1/1">
                                <ImagePreview 
                                    name={image.name}
                                    caption={image.caption}
                                    index={index}
                                    orientation={image.orientation}
                                    onImgClick={this.displayImage}
                                    key={index}
                                />
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        );
    };
}

class ImagePreview extends Component {
    constructor(props) {
        super(props);
        this.imgArray = {
            name: this.props.name,
            caption: this.props.caption,
            orientation: this.props.orientation, 
            index: this.props.index,
        };
    }

    handleClick = () => {
        this.props.onImgClick(this.imgArray)
    }

    render() {
        return (
            <img src={`/assets/photos/${this.props.name}`} alt={this.props.caption} className="absolute inset-0 w-full h-full object-cover" loading="lazy" onClick={this.handleClick} />
        )
    }

}


export default Gallery