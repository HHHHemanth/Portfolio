import { MaskContainer } from "@/components/magicui/MaskContainer";
import { VideoText } from "@/components//magicui/video-text";
export default function Home() {
  return (
    <MaskContainer
      revealText={
        
        <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-gray-600 dark:text-white">
          THE SKY IS THE LIMIT
        </h2>
      }
    >
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white dark:text-black">NAH BRO, THAT’S JUST THE STARTING LINE, GO BEYOND THE SKY AND CONQUER IT♾️🪐</h2>
    </MaskContainer>
  );
}
