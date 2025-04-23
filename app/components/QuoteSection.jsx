import { MaskContainer } from "@/components/magicui/MaskContainer";
import { VideoText } from "@/components//magicui/video-text";
export default function Home() {
  return (
    <MaskContainer
      revealText={
        
        <h2 className="lg:text-6xl md:4xl sm:3xl font-bold text-gray-600 dark:text-white">
          ☁️The sky is the limit☁️
        </h2>
      }
    >
      <h2 className="lg:text-4xl md:2xl sm:2xl text-white dark:text-black">Nah bro, that’s just the starting line, Go beyond the sky and conquer it ♾️🪐...</h2>
    </MaskContainer>
  );
}
