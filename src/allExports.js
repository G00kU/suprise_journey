import Logo from "../src/images/logo.png";

export const logo = () => {
  return Logo;
};

export const ImageHolder = ({ image, styles, imageStyles }) => {
  return (
    <div style={styles} className="imageContainer">
      <img
        src={image}
        style={{ backgroundSize: "cover" }}
        className="imageInContainer"
      />
    </div>
  );
};

export const FlexContainer = ({ container, styles, children }) => {
  return (
    <>
      <div className="flexContainer">{children}</div>
    </>
  );
};

export const TitleContainer = ({ text, textStyles, className = "default" }) => {
  return (
    <div className="tittleContainer">
      <h2 style={textStyles} className={className}>
        {text}
      </h2>
    </div>
  );
};
