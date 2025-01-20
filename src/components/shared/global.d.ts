import { Props as LatexProps } from "./Latex.astro";

declare global {
  var Latex: (props: LatexProps) => JSX.Element;
  type Nullable<T> = T | null;
}

export {};
