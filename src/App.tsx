import "./App.css"
import { Navbar } from "@/components/NavBar"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import { Routes as RoutesEnum } from "@/enums/routes.enum"

const Series = lazy(() =>
  import("@/pages/series/Series").then((module) => ({ default: module.Series }))
)
const NextSeries = lazy(() =>
  import("@/pages/series/NextSeries").then((module) => ({
    default: module.NextSeries,
  }))
)

const NewSeries = lazy(() =>
  import("@/pages/series/NewSerie").then((module) => ({
    default: module.NewSerie,
  }))
)

function App() {
  return (
    <>
      <section className="flex flex-col justify-center items-center w-full">
        <Suspense fallback={<>Cargando...</>}>
          <div className="w-12/12 md:w-9/12">
            <Router>
              <Navbar />
              <Routes>
                <Route path={RoutesEnum.SERIES} element={<Series />} />
                <Route path={RoutesEnum.NEXT_SERIES} element={<NextSeries />} />
                <Route path={RoutesEnum.NEW_SERIES} element={<NewSeries />} />
              </Routes>
            </Router>
          </div>
        </Suspense>
      </section>
    </>
  )
}

export default App
