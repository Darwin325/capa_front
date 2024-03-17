import "./App.css"
import { Series } from "@/pages/series/Series"
import { Navbar } from "@/components/NavBar"

function App() {
  return (
    <>
      <section className="flex flex-col w-full">
        <div className="max-w-9/12">
          <Navbar />
          <Series />
        </div>
      </section>
    </>
  )
}

export default App
