import { Card } from "./components/Card"
import { skipExtraData } from "./data/skipExtraData"

console.log(skipExtraData)


export default function App() {
  

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center pt-12 md:pt-20">
          <h1 className="text-2xl sm:text-3xl font-bold">Choose Your Skip Size</h1>
          <p className="text-base pt-1 text-gray-500">Select the skip size that best suits your needs</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 mt-8 pb-12">
          {
            skipExtraData.map( skip => (
              <Card key={skip.size} img={skip.img} description={skip.description}/>

            ))
          }
        </div>
      </div>
    </div>
  )
}

