import { Youtube } from "@/components/youtube";

interface GameProps {
  params: {
    gameName: string;
  };
}

export default function Game(props: GameProps) {
  return <Youtube id="dQw4w9WgXcQ" title="Title" />;
}
