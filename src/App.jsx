import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Favorites from "./components/Favorites";
import ImageModal from "./components/ImageModal";
import SkeletonGrid from "./components/SkeletonGrid";

const App = () => {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const [view, setView] = useState("gallery");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchImages = async (query) => {
    setError("");
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=h3pRm7wJZ_tzvntjsNbtSd0qAp3sQNgOPIpmtfqaDJA`,
      );
      setImages(response.data.results);
    } catch {
      setError("Something went wrong loading these photos. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchImages("nature");
  }, []);

  const onSearch = (query) => {
    if (!query.trim()) return;
    fetchImages(query);
  };

  return (
    <div className="min-h-screen w-full bg-[#0E0D0C] text-[#F2EFEA] px-6 md:px-10 pb-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <Navbar view={view} setView={setView} />
        <SearchBar onSearch={onSearch} />

        <div className="w-full mt-6">
          {loading ? (
            <SkeletonGrid />
          ) : error ? (
            <p className="mt-16 text-center text-red-300/80 font-display italic">
              {error}
            </p>
          ) : view === "favorites" ? (
            favorites.length === 0 ? (
              <p className="mt-16 text-center text-[#9C958A] font-display italic">
                Nothing saved yet — tap the heart on a photo to keep it here.
              </p>
            ) : (
              <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
                setSelectedImage={setSelectedImage}
              />
            )
          ) : images.length === 0 ? (
            <p className="mt-16 text-center text-[#9C958A] font-display italic">
              No photos found. Try another search.
            </p>
          ) : (
            <Gallery
              images={images}
              favorites={favorites}
              setFavorites={setFavorites}
              setSelectedImage={setSelectedImage}
            />
          )}
        </div>
      </div>

      {selectedImage && (
        <ImageModal image={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </div>
  );
};

export default App;
