import { Youtube } from "@/components/youtube";

interface GameProps {
  params: {
    gameName: string;
  };
}

export default function Game(props: GameProps) {
  return (
    <div className="embed-style">

      <Youtube id="dQw4w9WgXcQ" title="Title" />

    </div>


  )
}
