export function translateDays(day: string): string {
  switch (day.toLowerCase()) {
    case "monday":
      return "Lunes"
    case "tuesday":
      return "Martes"
    case "wednesday":
      return "Miércoles"
    case "thursday":
      return "Jueves"
    case "friday":
      return "Viernes"
    case "saturday":
      return "Sábado"
    case "sunday":
      return "Domingo"
    default:
      return "Día no encontrado"
  }
}
