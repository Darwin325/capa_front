import { Serie } from "@/models/series.model"
import { deleteSerie } from "@/services/node/series.service"
import { translateDays } from "@/utils/days"

export function CardSeries({
  channel,
  title,
  gender,
  show_time,
  week_day,
  id,
}: Serie) {
  const handleDelete = async (id: number) => {
    await deleteSerie(id)
    alert("Serie eliminada con éxito!")
    window.location.reload()
  }
  return (
    <div className="rounded-lg text-center shadow-md py-8 border border-gray-600 w-[400px] flex-auto max-w-5xl">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-600 text-xl font-bold">{channel}</p>
      <p className="text-gray-500">Genero: {gender}</p>
      <div className="flex justify-center gap-14">
        <div>
          <span>Día de emisión</span>
          <p className="text-gray-500">{translateDays(week_day)}</p>
        </div>
        <div>
          <span>Hora</span>
          <p className="text-gray-500"> {show_time}</p>
        </div>
      </div>

      <button
        className="mt-6 py-1 px-2 rounded-md bg-red-400"
        onClick={() => handleDelete(id)}
      >
        Eliminar Serie
      </button>
    </div>
  )
}
