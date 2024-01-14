import { twMerge } from "tailwind-merge"

type CardBaseProps = {
  bgColor: 'bg-zinc-900' | 'bg-zinc-100' | 'bg-zinc-800'
  type?: 'button' | 'card'
  className?: string | undefined
  
  children: React.ReactNode
}

export function CardBase({bgColor, type = 'card', className, children}: CardBaseProps) {
  

  return type === 'card' ? 
    <div 
      className={twMerge([`flex h-56 w-40 flex-col justify-between rounded-lg border-2 border-solid border-zinc-900 p-2 ${bgColor}`, className])}
    >
      {children}
    </div> : 
    <button 
      className={twMerge([`flex h-56 w-40 flex-col justify-between rounded-lg border-2 border-solid border-zinc-900 p-2 ${bgColor}`, className])}
    >
      {children}
    </button>
  
} 