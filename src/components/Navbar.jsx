const Navbar = ({ view, setView }) => {
  return (
    <header className="w-full flex items-center justify-between pt-10 pb-2">
      <h1 className="font-display italic text-3xl text-[#F2EFEA]">
        My Gallery
      </h1>

      <div className="relative flex bg-[#17151A] rounded-full p-1 w-44">
        <div
          className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-[#C9A06B] transition-transform duration-300 ease-out ${
            view === "favorites"
              ? "translate-x-[calc(100%+8px)]"
              : "translate-x-0"
          }`}
        />
        <button
          onClick={() => setView("gallery")}
          className={`relative z-10 flex-1 text-sm py-1.5 rounded-full transition-colors ${
            view === "gallery" ? "text-[#0E0D0C] font-medium" : "text-[#9C958A]"
          }`}
        >
          Gallery
        </button>
        <button
          onClick={() => setView("favorites")}
          className={`relative z-10 flex-1 text-sm py-1.5 rounded-full transition-colors ${
            view === "favorites"
              ? "text-[#0E0D0C] font-medium"
              : "text-[#9C958A]"
          }`}
        >
          Favorites
        </button>
      </div>
    </header>
  );
};

export default Navbar;
