'use client';
import { Youtube } from "@/components/youtube";
import Image from "next/image";
import { Button } from "@/components/ui/button";



interface GameProps {
  params: {
    gameName: string;
  };
}

export default function Game(props: GameProps) {
  return (
    <div>
      <div className="embed-style">

        <Youtube id="dQw4w9WgXcQ" title="Title" />
      </div>

      <ul className='ranks-wrapper'>
        <li className="rank">
          <Image
            src="/valorantranks/iron.png"
            alt="logo"
            width={60}
            height={60}
          />
        </li>
        <li className="rank">
          <Image
            src="/valorantranks/bronze.png"
            alt="logo"
            width={60}
            height={60}
          />
        </li>
        <li className="rank">
          <Image
            src="/valorantranks/silver.png"
            alt="logo"
            width={60}
            height={60}
          />
        </li>
        <li className="rank">
          <Image
            src="/valorantranks/gold.png"
            alt="logo"
            width={60}
            height={60}
          />
        </li>
        <li className="rank">
          <Image
            src="/valorantranks/plat.png"
            alt="logo"
            width={60}
            height={60}
          />
        </li>
        <li className="rank">
          <Image
            src="/valorantranks/diamond.png"
            alt="logo"
            width={60}
            height={60}
          />
        </li>
        <li className="rank">
          <Image
            src="/valorantranks/ascendant.png"
            alt="logo"
            width={60}
            height={60}
          />
        </li>
        <li className="rank">
          <Image
            src="/valorantranks/immortal.png"
            alt="logo"
            width={60}
            height={60}
          />
        </li>
        <li className="rank">
          <Image
            src="/valorantranks/radiant.png"
            alt="logo"
            width={60}
            height={60}
          />
        </li>
      </ul>
      <Button
        /* align this button in the center instead of using left margin */
        color="white"
        onClick={() => console.log("Store and check if correct")}
        children="Submit Rank"
        className="submit-button"
      />
    </div>
  )
}