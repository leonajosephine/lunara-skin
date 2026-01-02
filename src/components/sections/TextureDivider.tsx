import ImageCard from "../ui/ImageCard";
import textureImg from "../../assets/texture.png";

export default function TextureDivider() {
    return (
        <div className="relative py-20">
            <h1 className="absolute inset-0 flex items-center justify-center font-serif text-3xl md:text-6xl leading-tight text-white z-10 opacity-90">
                Radiant skin for your <span className="italic">special moments.</span>
            </h1>
            <ImageCard
                src={textureImg}
                alt="Lunara Skin texture detail"
                className="aspect-5/2 md:aspect-3/1 w-full opacity-60"
            />
        </div>
    );
}
