import { useEffect, useState, useCallback } from "react";

const ImageModal = ({ image, setSelectedImage }) => {
  const [visible, setVisible] = useState(false);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setSelectedImage(null), 200);
  }, [setSelectedImage]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
    };
  }, [close]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={close}
    >
      <button
        onClick={close}
        aria-label="Close"
        className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
        </svg>
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col items-center max-h-[90vh] transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <img
          src={image.urls.full}
          alt={image.alt_description || "Untitled photograph"}
          className="max-h-[80vh] max-w-[90vw] object-contain rounded-sm"
        />
        <figcaption className="mt-4 text-center">
          <p className="font-display italic text-[#F2EFEA] text-lg">
            {image.user?.name}
          </p>
          {image.location?.name && (
            <p className="text-[#9C958A] text-sm mt-1">{image.location.name}</p>
          )}
        </figcaption>
      </figure>
    </div>
  );
};

export default ImageModal;
