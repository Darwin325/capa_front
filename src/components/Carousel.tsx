import { Routes } from "@/enums/routes.enum"
import { Children, useState } from "react"
import { Link } from "react-router-dom"

export function Carousel({ children }: { children: JSX.Element }) {
  const [indicator, setIndicator] = useState(0)

  const next = () => {
    if (indicator < Children.count(children) - 1) {
      setIndicator(indicator + 1)
    }
  }

  const prev = () => {
    if (indicator > 0) {
      setIndicator(indicator - 1)
    }
  }

  return (
    <div className="w-full bg-gray-800 h-96 flex flex-col justify-center items-center">
      {/* controls */}

      <button className="self-start ml-4 mt-2 py-1 px-2 rounded-md bg-gray-600">
        <Link to={Routes.NEW_SERIES}>Nueva Serie</Link>
      </button>
      <div className="flex justify-between w-full flex-col">
        <div className="flex justify-between w-full">
          <button className="p-4 text-3xl hover:bg-gray-700" onClick={prev}>
            {" "}
            {"<"}
          </button>
          <div className="flex overflow-hidden w-7/12">
            {Children.toArray(children)[indicator]}
          </div>
          <button className="p-4 text-3xl hover:bg-gray-700" onClick={next}>
            {" "}
            {">"}
          </button>
        </div>

        <div className="self-center mt-10">
          <p className="text-xl">
            Serie {indicator + 1} de {Children.count(children)}
          </p>
        </div>
      </div>
    </div>
  )
}
