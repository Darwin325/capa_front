import { createSerie } from "@/services/node/series.service"

export function NewSerie() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    await createSerie({
      title: formData.get("title") as string,
      channel: formData.get("channel") as string,
      gender: formData.get("gender") as string,
      week_day: formData.get("week_day") as string,
      show_time: formData.get("show_time") as string,
    })
    alert("Serie creada con éxito!")
    window.location.reload()
  }
  return (
    <div className=" bg-gray-800 w-full mt-2 flex flex-col p-3">
      <h1 className="text-2xl mb-4">Agregar una Serie</h1>
      <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
        <div className="flex w-full">
          <label className="w-2/12" htmlFor="title">
            Titulo
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="py-1 px-3 rounded-md  w-5/12"
            required
          />
        </div>
        <div className="flex w-full">
          <label className="w-2/12" htmlFor="channel">
            Canal
          </label>
          <input
            type="text"
            id="channel"
            name="channel"
            className="py-1 px-3 rounded-md  w-5/12"
            required
          />
        </div>
        <div className="flex w-full">
          <label className="w-2/12" htmlFor="gender">
            Genero
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            className="py-1 px-3 rounded-md  w-5/12"
            required
          />
        </div>

        <div className="flex w-full">
          <label className="w-2/12" htmlFor="week_day">
            Día a emitir
          </label>
          <select
            id="week_day"
            name="week_day"
            className="py-1 px-3 rounded-md  w-5/12"
            required
          >
            <option value="Monday">Lunes</option>
            <option value="Tuesday">Martes</option>
            <option value="Wednesday">Miercoles</option>
            <option value="Thursday">Jueves</option>
            <option value="Friday">Viernes</option>
            <option value="Saturday">Sabado</option>
            <option value="Sunday">Domingo</option>
          </select>
        </div>

        <div className="flex w-full">
          <label className="w-2/12" htmlFor="show_time">
            Genero
          </label>
          <input
            type="time"
            id="show_time"
            name="show_time"
            className="py-1 px-3 rounded-md  w-5/12"
            required
          />
        </div>

        <div>
          <button
            className="self-start ml-2 mt-2 py-1 px-2 rounded-md bg-gray-600"
            type="submit"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  )
}
