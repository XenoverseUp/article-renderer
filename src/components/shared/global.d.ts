import { Props as LatexProps } from "./latex.astro";

declare global {
  var Latex: (props: LatexProps) => JSX.Element;
}

export {};
