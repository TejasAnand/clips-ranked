import { Youtube } from "@/components/youtube";

interface GameProps {
  params: {
    gameName: string;
  };
}

export default async function Game({ params: { gameName } }: GameProps) {
  return (
    <div className="h-full w-full flex items-center">
      <div className="w-[65%]">
        <Youtube iframeClass="h-full" id="dQw4w9WgXcQ" title="lmao" />
      </div>
    </div>
  );
}
