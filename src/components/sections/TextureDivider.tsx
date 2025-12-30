import ImageCard from "../ui/ImageCard";
import textureImg from "../../assets/texture.png";

export default function TextureDivider() {
    return (
        <div className="py-20 opacity-35">
            <ImageCard
                src={textureImg}
                alt="Lunara Skin texture detail"
                className="aspect-5/2 md:aspect-3/1 w-full "
            />
        </div>
    );
}
