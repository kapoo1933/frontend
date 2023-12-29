import { Form } from "@remix-run/react";
import type { ISearchBarProps } from "~components/interfaces";
import { Input, Search } from "~components/atmos";

export default function SearchBar(props: ISearchBarProps) {
  return (
    <Form method='get' className="flex justify-start items-center py-4 px-2">
      <Search />
      <Input placeholder={props.placeholder} value={props.value ?? ""} />
    </Form>
  );
}