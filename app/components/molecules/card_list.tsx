import type { ICardProps, ICardListProps } from '~components/interfaces'
import { Card } from '~components/atmos'

export default function CardList(props: ICardListProps) {
  return (
    <ul role="list" className="w-full h-full divide-y divide-gray-100 px-2">
      {props.cards.map((card: ICardProps) => {
        return (
          <li key={card.email} className="flex justify-between gap-x-6 py-5">
            <Card
              name={card.name}
              email={card.email}
              img_url={card.img_url}
            />
          </li>
        )
      })}
    </ul>
  )
}
