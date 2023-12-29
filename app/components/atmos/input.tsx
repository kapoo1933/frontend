import type { IInputProps } from "~components/interfaces"

export default function Input(props: IInputProps) {
  return (
    <input
      type="search"
      name="contact_search_bar"
      className="block w-full rounded-md border-0 py-1 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder={props.placeholder}
    />
  )
}