import type { ICardProps } from '~components/interfaces';

export default function Card(props: ICardProps) {
  return (
    <div className="flex w-full max-h-20 min-w-0 gap-x-4">
      <img className="h-12 w-12 flex justify-center items-center rounded-full bg-gray-50" src={props.img_url} alt="Avatar" />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-8 text-gray-200">{props.name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-200">{props.email}</p>
      </div>
    </div>
  )
}
