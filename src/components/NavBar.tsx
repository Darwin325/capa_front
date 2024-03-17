import { Routes } from "@/enums/routes.enum"
import { Link } from "react-router-dom"

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
          <input
            type="text"
            placeholder="Buscar serie"
            className="py-1 px-3 rounded-md"
          />
        </section>
      </div>
    </nav>
  )
}
