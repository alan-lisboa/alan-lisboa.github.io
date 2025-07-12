const HeroImage = () => {
  const images = ["./programing.svg", "./app-development.svg", "./ui-ux.svg"];

  const getImage = () => {
    let idxImage = Math.floor(Math.random() * images.length);
    let image = images[idxImage];
    return image;
  };

  return (
    <img
      src={getImage()}
      alt="hero-image"
      className="rounded-full m-6 bg-slate-200"
    />
  );
};

export default HeroImage;
