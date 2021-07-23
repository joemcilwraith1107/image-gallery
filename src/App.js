import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Gallery from "./components/gallery";
import { photoArray } from "./images/imagelist";

export default function App() {
  const photos = photoArray("All");
  const [images, setImages] = useState(photos);
  return (
      <div className="flex flex-col h-screen justify-between">
        <Header setImages={setImages}/>
        <Gallery images={images} />              
        <Footer />
      </div>
  );
};
