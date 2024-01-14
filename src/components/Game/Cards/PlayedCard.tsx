import { Cards } from "@phosphor-icons/react/dist/ssr"
import { CardBase } from "./CardBase"

type PlayedCardProps = {
  isPlayer?: boolean
  hidden?: boolean
  nameHidden?: boolean
  playerName: string
  children: string
}

export function PlayedCard({isPlayer, hidden, nameHidden, playerName, children}: PlayedCardProps) {
  
  return (
    <CardBase bgColor={!isPlayer ? "bg-zinc-800" : "bg-zinc-100"} className={hidden ? "items-center justify-center" : ""}>
     {(!hidden || isPlayer) ? 
      <>
        <p className={!isPlayer ? "text-zinc-100" : "text-zinc-900"}>{children}</p>
      
        <p className={`flex items-center gap-1 ${!isPlayer ? "text-zinc-100" : "text-zinc-900"}`}><Cards /> {!nameHidden && playerName}</p>
      </> :
      <Cards size={48} className="text-zinc-700" />
    }
    </CardBase>
  )
} 