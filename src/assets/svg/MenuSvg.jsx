const MenuSvg = ({ openNavigation }) => {
  return (
    <svg className="overflow-visible w-[60px] h-[60px] relative z-[10]">
      <rect
        className={`transition-transform origin-center  ${openNavigation? "fill-white opacity-[.9]": "fill-color-2"} w-[27px] h-[1.8px]`}
        y="19"
        x="17"
        transform={`rotate(${openNavigation ? "45" : "0"}) translate(${openNavigation ? "-0.5" : "0"}, ${openNavigation ? "12" : "0"})`}
      />
      <rect
        className="origin-center fill-color-2 w-[27px] h-[1.8px]"
        y="29"
        x="17"
        opacity={openNavigation ? "0" : "1"}
      />
      <rect
        className={`transition-transform origin-center ${openNavigation? "fill-white opacity-[.9]": "fill-color-2"} w-[27px] h-[1.8px]`}
        y="39"
        x="17"
        transform={`rotate(${openNavigation ? "-45" : "0"}) translate(${openNavigation ? "-2" : "0"}, ${openNavigation ? "-10" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
