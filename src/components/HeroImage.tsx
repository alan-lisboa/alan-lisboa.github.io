const HeroImage = () => {
    const images = ["./programing.svg", "./app-development.svg", "./ui-ux.svg"];

    const getImage = () => {
        let idxImage = Math.floor(Math.random() * images.length);
        let image = images[idxImage];
        return image;
    }

    return (
        <div className="rounded-full m-6 w-full bg-slate-100">
            <img src={getImage()} alt="hero-image" />
        </div>
    )
}

export default HeroImage;