import { createElement, FC, HTMLAttributes, ReactNode } from "react"

interface HtmlRendererProps <T = keyof JSX.IntrinsicElements> extends HTMLAttributes<T>{
  container?: T;
  children: string;
}
const HtmlRenderer: FC<HtmlRendererProps> = ({ children, container = 'div', ...props }) => {
  return createElement(container, {
    dangerouslySetInnerHTML: {__html: children},
    ...props
  })
}

export default HtmlRenderer