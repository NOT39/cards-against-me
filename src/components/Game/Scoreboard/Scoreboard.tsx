import { Player } from "./Player"

type ScoreboardProps = {
  players: {
    id: string
    name: string
    judge: boolean
  }[]
}

export function Scoreboard({ players }: ScoreboardProps) {
  const sortedPlayers = players.toSorted((a, b) => a.judge ? -1 : 1)
  
  return (
    <div className="flex flex-col gap-1 bg-zinc-800 p-4">
        {sortedPlayers.map(player => {
          return <Player key={player.id} name={player.name} judge={player.judge} />
        })}
    </div>
  )
}