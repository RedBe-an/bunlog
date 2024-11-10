import type { MDXComponents } from "mdx/types";
import { H1 as h1, H2 as h2, H3 as h3, H4 as h4 } from "./components/mdx-components/headings";
import { P as p, Small as small, Code as code, BlockQuote as blockquote, Ul as ul} from "./components/mdx-components/text";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1,
    h2,
    h3,
    h4,
    p,
    small,
    code,
    blockquote,
    ul,
  };
}
