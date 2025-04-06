const GlassContainer = ({ className, noHover, children }) => {
  const classes = `${className || "flex"} ${
    className || "w-auto"
  } align-center ${className || "rounded-[1rem]"} bg-n-2 ${
    className || "backdrop-blur-[10px]"
  } shadow-dropShadow ${
    noHover ? "" : "hover:bg-n-3"
  } border-[1px] border-color-6 ${className || ""}`;

  return <div className={classes}>{children}</div>;
};

export default GlassContainer;
