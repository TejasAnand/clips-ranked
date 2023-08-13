import { Youtube } from "@/components/youtube";

interface GameProps {
  params: {
    gameName: string;
  };
}

<<<<<<< HEAD
export default function Game(props: GameProps) {
  return (
    <div className="embed-style">

      <Youtube id="dQw4w9WgXcQ" title="Title" />

    </div>


  )
=======
export default function Game(params: GameProps) {
  return <Youtube id="dQw4w9WgXcQ" title="Title" />;
>>>>>>> fd652e1 (Add sidebar+header+themes)
}
