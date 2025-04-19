import Image from "next/image";
import { IconCloud } from "@/components/magicui/icon-cloud";
// Local image paths (relative to the public folder)
const images = [
    "/images/icons/c.png", 
    "/images/icons/canva.png", 
    "/images/icons/css.png", 
    "/images/icons/figma.png", 
    "/images/icons/git.png", 
    "/images/icons/html.png", 
    "/images/icons/java.png", 
    "/images/icons/js.png", 
    "/images/icons/jupyter.png", 
    "/images/icons/lightroom.png", 
    "/images/icons/next.png", 
    "/images/icons/node.png", 
    "/images/icons/python.png", 
    "/images/icons/react.png", 
    "/images/icons/spline.png", 
    "/images/icons/sql.png", 
    "/images/icons/tailwindcss.png", 
    "/images/icons/vscode.png"
];

export function IconCloudDemo() {
    return (
      <div className="relative flex size-full lg:max-w-6xl items-center justify-center overflow-hidden rounded-lg">
        <IconCloud images={images} />
      </div>
    );
  }
  
