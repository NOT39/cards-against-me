import { CardBase } from "./CardBase"

type JudgeCardProps = {
  children: React.ReactNode
}

export function JudgeCard({children}: JudgeCardProps) {
  return (
    <CardBase bgColor="bg-zinc-900">
      <p className="text-zinc-100">{children}</p>
    </CardBase>
  )
}