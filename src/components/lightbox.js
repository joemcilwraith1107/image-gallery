import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


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

    changeImage = (newIndex) => {
        this.setImageToShow(newIndex);
    }
    
    render() {
        const imgPortrait = "h-80-screen max-w-80-screen object-contain self-center";
        const imgLandscape = "w-80-screen max-h-80-screen object-contain self-center"
        return (
            <div className="fixed inset-0 z-40 bg-black bg-opacity-75 w-full h-full" onClick={this.closeLightBox}>
                <div className="flex flex-row w-full h-full overflow-hidden">
                    <div className="h-full min-w-0.1 flex-auto">
                        <div className="h-0.1"></div>
                        <div className="h-4/5 flex justify-center">
                        <ScrollButton
                            direction={'back'}
                            index={this.index}
                            onBtnClick={this.changeImage}
                        />
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
                        <ScrollButton 
                            direction={'forward'}
                            index={this.index}
                            onBtnClick={this.changeImage}
                        />
                        </div>
                        <div className="h-0.1"></div>
                    </div>
                </div>
            </div>
        );
    }
}

class ScrollButton extends Component {
    constructor(props) {
        super(props);
        this.direction = props.direction;
        this.index = props.index;
    };

    scrollImage = () => {
        const newIndex = this.direction === 'back' ? this.index -1 : this.index + 1;
        this.props.onBtnClick(newIndex)
    };

    render() {
        const character = this.direction === 'back' ? faChevronLeft : faChevronRight;
        return (
            <button className="text-white place-self-center z-50" onClick={this.scrollImage}>
                <FontAwesomeIcon icon={character} size="3x" color="white"/>
            </button>
        )
    }
}
export default Lightbox 