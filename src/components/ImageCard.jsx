import { useEffect, useRef, useState } from "react";

const ImageCard = ({
  image,
  index,
  favorites,
  setFavorites,
  setSelectedImage,
}) => {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [pop, setPop] = useState(false);
  const isFavorite = favorites.some((fav) => fav.id === image.id);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setPop(true);
    setFavorites(
      isFavorite
        ? favorites.filter((fav) => fav.id !== image.id)
        : [...favorites, image],
    );
  };

  return (
    <div
      className="group relative mb-4 break-inside-avoid rounded-lg overflow-hidden bg-[#17151A] cursor-pointer opacity-0 animate-[fadeInUp_0.6s_ease_forwards]"
      style={{ animationDelay: `${(index % 12) * 45}ms` }}
      onClick={() => setSelectedImage(image)}
    >
      {!loaded && (
        <div
          className="w-full bg-[linear-gradient(110deg,#17151a,45%,#211e1a,55%,#17151a)] bg-size-[200%_100%] animate-[shimmer_1.8s_linear_infinite]"
          style={{ aspectRatio: `${image.width} / ${image.height}` }}
        />
      )}

      <img
        ref={imgRef}
        src={image.urls.regular}
        alt={image.alt_description || "Untitled photograph"}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`w-full block transition-opacity duration-500 ease-out group-hover:scale-[1.03] ${
          loaded ? "opacity-100" : "opacity-0 absolute inset-0"
        }`}
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <button
        onClick={toggleFavorite}
        onAnimationEnd={() => setPop(false)}
        className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isFavorite ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        } ${pop ? "animate-[heartPop_0.4s_ease]" : ""}`}
      >
        <svg
          className={`w-4 h-4 ${isFavorite ? "fill-[#C9A06B] stroke-[#C9A06B]" : "fill-none stroke-white"}`}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          <path
            d="M12 21s-7.5-4.6-10-9.3C.5 8 2 4.5 5.6 4c2-.3 3.7.7 6.4 3 2.7-2.3 4.4-3.3 6.4-3 3.6.5 5.1 4 3.6 7.7-2.5 4.7-10 9.3-10 9.3z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-sm font-display italic truncate">
          {image.user?.name}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
