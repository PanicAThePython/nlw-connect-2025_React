import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}
// não precisa definir o children nem no tipo nem no retorno, pq ele é próprio do button,
// ent ele entra ali no spread operator

export function Button(props: ButtonProps) {
  return (
    <button
      className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props}
    />
  )
}
