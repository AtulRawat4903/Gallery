const heights = [220, 300, 260, 340, 240, 280, 320, 260];

const SkeletonGrid = () => {
  return (
    <div className="w-full columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:balance]">
      {[...heights, ...heights].map((h, i) => (
        <div
          key={i}
          className="mb-4 break-inside-avoid rounded-lg bg-[linear-gradient(110deg,#17151a,45%,#211e1a,55%,#17151a)] bg-size-[200%_100%] animate-[shimmer_1.8s_linear_infinite]"
          style={{ height: h }}
        />
      ))}
    </div>
  );
};

export default SkeletonGrid;
