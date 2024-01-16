import { Crown } from '@phosphor-icons/react/dist/ssr'

type PlayerProps = {
  name: string
  judge?: boolean
}

export function Player({name, judge}: PlayerProps) {
  return (
    <div className='flex items-center justify-between rounded-md bg-zinc-700 p-2'>
      <p className='text-lg text-zinc-50'>{name}</p>

      {judge && <Crown className='text-zinc-50' size={20}/>}
    </div>
  )
}