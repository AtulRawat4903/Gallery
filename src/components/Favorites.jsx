import ImageCard from "./ImageCard";

const Favorites = ({ favorites, setFavorites, setSelectedImage }) => {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {favorites.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          favorites={favorites}
          setFavorites={setFavorites}
          setSelectedImage={setSelectedImage}
        />
      ))}
    </div>
  );
};

export default Favorites;
