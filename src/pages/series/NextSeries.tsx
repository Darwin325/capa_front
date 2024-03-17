import { Serie } from "@/models/series.model"
import {
  getNextSerie,
  suggestedSeries as suggestedService,
} from "@/services/php/series.service"
import { useEffect, useState } from "react"
import { CardSeries } from "./CardSeries"

export function NextSeries() {
  const [nextSerie, setNextSerie] = useState<Serie[]>()
  const [suggestedSeries, setSuggestedSeries] = useState<Serie[]>()

  useEffect(() => {
    const main = async () => {
      const nextSerie = await getNextSerie()
      setNextSerie(nextSerie?.data)

      const suggesSeries = await suggestedService()
      setSuggestedSeries(suggesSeries?.data)
    }
    main()
  }, [])
  return (
    <div className="flex justify-center gap-6 mt-4">
      <div>
        <h2 className="text-3xl text-center mb-6">Próxima serie</h2>
        <div className="flex justify-center">
          {nextSerie?.map((serie) => (
            <CardSeries key={serie.id} {...serie} />
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-3xl text-center mb-6">Series sugeridas</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {suggestedSeries?.map((serie) => (
              <CardSeries key={serie.id} {...serie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
