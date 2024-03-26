import React, { ReactNode } from "react";
import Image from "next/image";
interface BentoGridProps {
  size?: "small" | "medium" | "large";
  img: string;
  className?: string;
  width: number;
  height: number;
}

export const BentoGrid = ({
  img,
  width,
  height,
  className,
}: BentoGridProps) => {
  return (
    <div className="justify-center items-center">
      <Image
        className={`${className}  grid gap-4  px-2 py-2   rounded-full border-gray-200  shadow-md shadow-black  border-2 `}
        src={img}
        alt={img}
        width={width}
        height={height}
        style={{ mixBlendMode: "multiply" }}></Image>
    </div>
  );
};
