import { Carousel } from "@/components/Carousel"
import { getSeries } from "@/services/node/series.service"
import { useEffect } from "react"
import { CardSeries } from "./CardSeries"
import { useSeriesStore } from "@/store/series.store"

export function Series() {
  const [series, setSeries] = useSeriesStore((state) => [
    state.series,
    state.setSeries,
  ])

  useEffect(() => {
    const main = async () => {
      const series = await getSeries({ search: "" })
      setSeries(series.data)
    }
    main()
  }, [])
  return (
    <div className="flex flex-wrap justify-between gap-6 mt-4">
      <Carousel>
        {series.length > 0 ? (
          series?.map((serie) => <CardSeries key={serie.id} {...serie} />)
        ) : (
          <h1 className="text-3xl">No hay series</h1>
        )}
      </Carousel>
    </div>
  )
}
