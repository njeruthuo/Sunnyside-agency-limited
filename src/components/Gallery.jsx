import sugarCubes from "../images/desktop/image-gallery-sugarcubes.jpg";
import milkBottles from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import cone from "../images/desktop/image-gallery-cone.jpg";

const Gallery = () => {
  return (
    <div className="min-h-[50vh]">
      <div className="flex flex-wrap">
        <img src={milkBottles} alt="" className="w-1/2 sm:w-1/4" />
        <img src={orange} alt="" className="w-1/2 sm:w-1/4" />
        <img src={cone} alt="" className="w-1/2 sm:w-1/4" />
        <img src={sugarCubes} alt="" className="w-1/2 sm:w-1/4" />
      </div>
    </div>
  );
};
export default Gallery;
