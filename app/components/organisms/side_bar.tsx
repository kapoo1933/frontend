import type { ISideBarProps } from '~components/interfaces'
import { CardList, SearchBar } from '~components/molecules'

export default function SideBar(props: ISideBarProps) {
  return (
    <aside className="flex flex-col max-w-full w-full h-full justify-center">
      <SearchBar placeholder={props.placeholder} value={props.search_bar_value ?? ""} />
      <div className="w-full h-full overflow-y-scroll">
        <CardList cards={props.cards} />
      </div>
    </aside>
  )
}