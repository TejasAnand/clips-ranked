"use client";

import type { ComponentProps } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type YoutubeProps = ComponentProps<typeof LiteYouTubeEmbed>;

export function Youtube(props: YoutubeProps) {
  return <LiteYouTubeEmbed {...props} />;
}

