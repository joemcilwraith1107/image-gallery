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
        const imgPortrait = "h-80-screen max-w-80-screen object-contain self-center";
        const imgLandscape = "w-80-screen max-h-80-screen object-contain self-center"
        return (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-75 w-full h-full" onClick={this.closeLightBox}>
                <div className="flex flex-row w-full h-full overflow-hidden">
                    <div className="h-full min-w-0.1 flex-auto">
                        <div className="h-0.1"></div>
                        <div className="h-4/5 flex justify-center">
                            <span className="text-white place-self-center">&#10094;</span>
                        </div>
                        <div className="h-0.1"></div>
                    </div>
                    <div className="h-full flex-initial">
                        <div className="h-0.1"></div>
                        <div className="h-4/5 flex" >
                            <img src={`/assets/photos/${this.name}`} alt={this.caption} className={this.orientation === 'landscape' ? `${imgLandscape}` : `${imgPortrait}`}  />
                        </div>
                        <div className="h-0.1"></div>
                    </div>
                    <div className="h-full min-w-0.1 flex-auto">
                        <div className="h-0.1"></div>
                        <div className="h-4/5 flex justify-center">
                            <span className="text-white place-self-center">&#10095;</span>
                        </div>
                        <div className="h-0.1"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Lightbox 