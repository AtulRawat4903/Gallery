import ImageCard from "./ImageCard";

const Gallery = ({ images, favorites, setFavorites, setSelectedImage }) => {
  return (
    <div className="w-full columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:balance]">
      {images.map((image, index) => (
        <ImageCard
          key={image.id}
          image={image}
          index={index}
          favorites={favorites}
          setFavorites={setFavorites}
          setSelectedImage={setSelectedImage}
        />
      ))}
    </div>
  );
};

export default Gallery;
