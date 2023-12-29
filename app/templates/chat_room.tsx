import { SearchBar } from "~components/molecules"
export default function Chatroom() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row h-20 w-full border-double border-b-2 border-purple-400"/>
      <SearchBar placeholder="Messages" value={""} />
    </div>
  )
}