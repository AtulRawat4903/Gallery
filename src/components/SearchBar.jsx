import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputData, setInputData] = useState("");
  const submit = () => onSearch(inputData);

  return (
    <div className="w-full max-w-xl mt-10 mb-2">
      <div className="group flex items-center gap-3 border-b border-white/15 focus-within:border-[#C9A06B] transition-colors pb-2">
        <button onClick={submit} aria-label="Search">
          <svg
            className="w-4 h-4 text-[#9C958A] group-focus-within:text-[#C9A06B] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
        </button>
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Search for a scene, a place, a feeling..."
          className="flex-1 bg-transparent text-[#F2EFEA] placeholder:text-[#9C958A]/70 outline-none font-display italic text-lg"
        />
      </div>
    </div>
  );
};

export default SearchBar;
