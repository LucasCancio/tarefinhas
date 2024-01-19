export const TasksIcon = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="56" height="56" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_4130_503" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_4130_503"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};