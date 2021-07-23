import { Component } from "react";


class Lightbox extends Component {
    constructor(props) {
        super(props);
        this.name = props.image.name;
        this.caption = props.image.caption;
        this.orientation = props.image.orientation;
        this.index = props.image.index;
        this.setLightboxDisplay = props.setLightboxDisplay;
        this.setImageToShow = props.setImageToShow;
    }

    closeLightBox = () => {
        this.setLightboxDisplay(false);
        this.setImageToShow('');
    }
    
    render() {
        const imgPortrait = "h-4/5 w-auto";
        const imgLandscape = "w-full h-4/5"
        return (
            <div className="absolute inset-0 z-50 bg-black bg-opacity-75 w-full h-full" onClick={this.closeLightBox}>
                <div className="flex flex-row w-full h-full">
                    <div className="h-full min-w-0.1">
                        <div className="h-0.1"></div>
                        <div className="h-4/5">
                            <span className="text-white">&#10094;</span>
                        </div>
                        <div className="h-0.1"></div>
                    </div>
                    <div className="h-full flex-auto">
                        <div className="h-0.1"></div>
                        <div className={this.orientation === 'landscape' ? `${imgLandscape}` : `${imgPortrait} flex justify-center`} >
                            <img src={`/assets/photos/${this.name}`} alt={this.caption} className="h-full object-contain"  />
                        </div>
                        <div className="h-0.1"></div>
                    </div>
                    <div className="h-full min-w-0.1">
                        <div className="h-0.1"></div>
                        <div className="h-4/5">
                            <span className="text-white">&#10094;</span>
                        </div>
                        <div className="h-0.1"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Lightbox 