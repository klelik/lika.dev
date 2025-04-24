export interface Link {
  name?: string;
  url: string;
  target?: string;
}
export interface Image {
  src: string;
  altText: string;
  width?: number;
  height?: number;
  size?: number;
  type?: string;
  caption?: string;
}

export type Size = "sm" | "md" | "lg";

//=============================
// Components
//=============================
export interface AttachedButtons {
  link: Link;
  rotate?: boolean;
  scale?: number;
  translateX?: string;
  size?: Size;
}
