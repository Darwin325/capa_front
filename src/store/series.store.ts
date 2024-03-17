import { Serie } from "@/models/series.model"
import { create } from "zustand"

type State = {
  series: Serie[]
}

type Actions = {
  setSeries: (series: Serie[]) => void
}

export const useSeriesStore = create<State & Actions>((set) => ({
  series: [],
  setSeries: (series) => set({ series }),
}))
