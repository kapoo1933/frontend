import { Outlet } from "@remix-run/react";
import { NavBar } from "~components/organisms";
import type { IHomeProps } from "~templates/interfaces";

export default function Home(props: IHomeProps) {
  return (
    <div className="flex flex-col-reverse w-dvw h-dvh sm:flex-col bg-violet-800 border-solid border-x-4 border-t-4 rounded-t-3xl rounded-b-lg border-amber-300">
      <NavBar />
      <div className="flex w-full h-5/6 items-start px-4">
        <Outlet />
      </div>
    </div>
  )
}