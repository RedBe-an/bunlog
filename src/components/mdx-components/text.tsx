import { ReactNode } from 'react';

interface TextProps {
  children?: ReactNode;
}

export function P({ children }: TextProps) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  )
}
  
export function BlockQuote({ children }: TextProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {children}
    </blockquote>
  )
}
  
export function Code({ children }: TextProps) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  )
}

export function Small({ children }: TextProps) {
  return (
    <small className="text-sm font-medium leading-none">
      {children}
    </small>
  )
}

export function Ul({ children }: TextProps) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {children}
    </ul>
  )
}
    