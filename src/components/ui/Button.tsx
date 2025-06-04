import React from 'react'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-cyan-400 hover:bg-cyan-300 text-black text-lg px-6 py-2 rounded ${className}`}
    >
      {children}
    </button>
  )
}
