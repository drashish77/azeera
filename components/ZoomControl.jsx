"use client";

const ZoomControl = ({ scale, setScale, options }) => {
  const [value, setValue] = useState(scale);

  useEffect(() => {
    setScale(value);
  }, [value]);

  return (
    <input
      type="range"
      min={options.minScale}
      max={options.maxScale}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
