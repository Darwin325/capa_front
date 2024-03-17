import { useSeriesStore } from "@/store/series.store"

export function Search({ getSeries, placeholder }) {
  const [series, setSeries] = useSeriesStore((state) => [
    state.series,
    state.setSeries,
  ])

  const handleSearch = async (search: string) => {
    const series = await getSeries({ search })
    setSeries(series.data)
  }

  return (
    <input
      onChange={(e) => handleSearch(e.target.value)}
      type="text"
      placeholder={placeholder}
      className="py-1 px-3 rounded-md"
    />
  )
}
