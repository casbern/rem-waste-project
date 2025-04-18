import { Card } from "./components/Card"
import { CardSkeleton } from "./components/CardSkeleton"
import { Footer } from "./components/Footer"
import { skipExtraData } from "./data/skipExtraData"
import  axios  from "axios"
import { useEffect, useState } from "react"


export default function App() {
  const [skipData, setSkipData] = useState([])
  const [selectSkip, setSelectSkip] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect( () => {
    axios.get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
    .then(response => {
      const responseData = response.data
      
      const newSkipData = responseData.map( item => {
        return { ...item, ...skipExtraData[item.size]}
        
      })
      
      setSkipData(newSkipData)
      setLoading(false)
    })
    .catch( error => {
      console.log(error.message)
      setLoading(false)
    })
  }, [])
  
  
  return (
    <div className="min-h-screen bg-neutral-50 relative">
      <div className="max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8">
        <header className="text-center pt-12 md:pt-20">
          <h1 className="text-2xl sm:text-3xl font-bold">Choose Your Skip Size</h1>
          <p className="text-base pt-1 text-gray-500">Select the skip size that best suits your needs</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 mt-8 pb-12">
          {
            loading ? (
              [...Array(6)].map((_, index) => (
                <CardSkeleton key={index} />
              ))
             ) : (
            skipData.map( skip => (
              <Card key={skip.id} skip={skip} selected={skip.id === selectSkip?.id} setSelectSkip={setSelectSkip}/>
            ))
            )
          }
        </div>
      </div>

      <Footer selectSkip={selectSkip}/>
    </div>
  )
}

