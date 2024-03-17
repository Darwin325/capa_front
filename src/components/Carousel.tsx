import { Children, useState } from "react"

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
    <div className="w-full bg-gray-800 h-96 flex items-center">
      {/* controls */}
      <div className="flex justify-between w-full flex-col">
        <div className="flex justify-between w-full">
          <button className="p-4 text-3xl hover:bg-gray-700" onClick={prev}>
            {" "}
            {"<"}
          </button>
          <div className="flex overflow-hidden">
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
