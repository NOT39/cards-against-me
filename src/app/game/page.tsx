"use client"

import { JudgeCard, PlayedCard, PlayerCard} from '@/components/Game/Cards'
import { Scoreboard } from "@/components/Game/Scoreboard/Scoreboard";
import { useState } from 'react';

const playersMock = [
  { id: '1', name: 'NOT', judge: false},
  { id: '2', name: 'Davi', judge: true},
  { id: '3', name: 'Fernanda', judge: false},
]

const cardsMock = [
  {id: '1', text: "sexo"},
  {id: '2', text: "kkkkkk"},
  {id: '3', text: "azidea"},
]

const playedCardsMock = [
  {id: '1', text: "kkkkkkkkkkkk", playerName: "NOT"},
  {id: '2', text: "kkkkkkkkkkkk2", playerName: "Davi"},
  {id: '3', text: "kkkkkkkkkkkk3", playerName: "Fernanda"},
]

export default function Game() {
  const [name, setName] = useState("NOT")
  const [isJudge, setIsJudge] = useState(false)
  const [playedCard, setPlayedCard] = useState("kkkkkkkk0")
  const [isPlayable, setIsPlayable] = useState(false)

  const [judgeCard, setJudgeCard] = useState("_____ cu com caimbra.")
  const [cards, setCards] = useState(cardsMock)
  const [playedCards, setPlayedCards] = useState(playedCardsMock)
  const [isCardsRevealed, setIsCardsRevealed] = useState(true)
  
  return (
    <main className="grid min-h-[calc(100vh-64px)] grid-cols-[1fr_300px] bg-zinc-700">
      <div className="flex flex-col justify-between gap-4 p-4">
        <div>
          <div className="mb-4 flex gap-2">
            <JudgeCard>{judgeCard}</JudgeCard>
          </div>
          <div className="flex flex-wrap gap-2">
            {playedCard && <PlayedCard isPlayer playerName={name}>{playedCard}</PlayedCard>}

            {playedCards.map(card => {
              return (
                <PlayedCard key={card.id} hidden={!isCardsRevealed && !isJudge} nameHidden={!isCardsRevealed && isJudge} playerName={card.playerName}>{card.text}</PlayedCard>
              )
            })}
          </div>
        </div>

        <div className="mb-8 flex flex-wrap-reverse gap-2"> 
          {cards.map(card => {
            return (
              <PlayerCard disabled={!isPlayable} key={card.id}>{card.text}</PlayerCard>
            )
          })}
        </div>
      </div>
      <Scoreboard players={playersMock} />

    </main>
  )
}