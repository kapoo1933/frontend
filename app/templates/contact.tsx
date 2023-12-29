import { Outlet } from "@remix-run/react";
import type { IContactProps } from "~templates/interfaces";
import { SideBar } from "~components/organisms";

export default function Contact(props: IContactProps) {
  return (
    <div className="flex max-width-full w-full h-full items-start">
      {
        props.contact_id
          ? (<Outlet />)
          : (<SideBar cards={props.cards} search_bar_value={props.search_bar_value} placeholder={props.placeholder} />)
      }
    </div>
  )
}