import { Routes } from "@/enums/routes.enum"
import { Link } from "react-router-dom"
import { Search } from "./Search"
import { getSeries } from "@/services/node/series.service"

export function Navbar() {
  return (
    <nav className="bg-gray-800 px-6">
      <div className="flex-wrap sm:flex justify-between">
        <ul className="flex gap-x-2">
          <li className="hover:bg-gray-700 p-2 cursor-pointer transition-all duration-500 ease-in-out">
            <Link to={Routes.SERIES}>Series</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 cursor-pointer transition-all duration-500 ease-in-out">
            <Link to={Routes.NEXT_SERIES}>Próximas series</Link>
          </li>
        </ul>

        <section className="self-center m-2">
          <Search getSeries={getSeries} placeholder="Buscar serie por nombre" />
        </section>
      </div>
    </nav>
  )
}
