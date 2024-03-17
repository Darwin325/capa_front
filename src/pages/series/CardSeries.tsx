import { Serie } from "@/models/series.model"
import { translateDays } from "@/utils/days"

export function CardSeries({
  channel,
  title,
  gender,
  show_time,
  week_day,
  id,
}: Serie) {
  return (
    <div
      data-id={`card_${id}`}
      className="rounded-lg text-center shadow-md p-4 border border-gray-600 min-w-72 flex-auto max-w-96"
    >
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
    </div>
  )
}
