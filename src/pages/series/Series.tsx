import { Carousel } from "@/components/Carousel"
import { Serie } from "@/models/series.model"
import { getSeries } from "@/services/node/series.service"
import { useEffect, useState } from "react"
import { CardSeries } from "./CardSeries"

export function Series() {
  const [series, setSeries] = useState<Serie[]>()

  useEffect(() => {
    const main = async () => {
      const series = await getSeries()
      setSeries(series.data)
    }
    main()
  }, [])
  return (
    <div className="flex flex-wrap justify-between gap-6 mt-4">
      <Carousel>
        {series?.map((serie) => (
          <CardSeries key={serie.id} {...serie} />
        ))}
      </Carousel>
    </div>
  )
}
