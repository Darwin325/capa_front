export function Navbar() {
  return (
    <nav className="bg-gray-800 px-6">
      <div className="flex-wrap sm:flex justify-between">
        <ul className="flex gap-x-2">
          <li className="hover:bg-gray-700 p-2 cursor-pointer transition-all duration-500 ease-in-out">
            Series
          </li>
          <li className="hover:bg-gray-700 p-2 cursor-pointer transition-all duration-500 ease-in-out">
            Próximas series
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
