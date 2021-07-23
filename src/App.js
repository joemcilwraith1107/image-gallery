import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Gallery from "./components/gallery";
import Lightbox from "./components/lightbox";
import { photoArray } from "./images/imagelist";

export default function App() {
  const photos = photoArray("All");
  const [images, setImages] = useState(photos);
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState('');
  return (
      <div className="flex flex-col h-screen justify-between">
        <Header setImages={setImages}/>
        <Gallery 
        images={images}
        setLightboxDisplay={setLightboxDisplay}
        setImageToShow={setImageToShow} /> 
        {
        lightboxDisplay ?
        <Lightbox 
          image={imageToShow}
          setLightboxDisplay={setLightboxDisplay}
          setImageToShow={setImageToShow}
        />
        : ""

        }             
        <Footer />
      </div>
  );
};
