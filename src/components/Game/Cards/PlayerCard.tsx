import { CardBase } from "./CardBase"

type PlayerCardProps = {
  disabled?: boolean
  children: React.ReactNode
}

export function PlayerCard({disabled, children}: PlayerCardProps) {
  return (
    <CardBase bgColor="bg-zinc-100" type="button" className={disabled ? "cursor-not-allowed brightness-50" : "hover:-translate-y-1 hover:shadow-2xl"}>
      <p className="text-zinc-900">{children}</p>
    </CardBase>
  )
}