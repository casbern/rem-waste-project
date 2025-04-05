import { CheckCircle } from "lucide-react"

export const Card = ({skip, setSelectSkip }) => {


  return (
      <div className="max-w-[380px]  mt-6 bg-white border border-gray-300 rounded-md flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="p-6 flex-grow flex flex-col">
            <div className="flex justify-center mb-4">
              <img className="h-40 object-contain" src={skip.img} alt="image of the skip's size" />
            </div>

            <header className="mb-4">
              <h3 className="text-lg font-bold text-gray-800">{skip.size} Yard Skip</h3>
              <h4 className="text-2xl font-bold text-blue-700 mt-1">{(skip.price_before_vat|| 0).toLocaleString('en-GB', {
                style: "currency",
                currency: "GBP"
              })} <span className="text-sm font-bold">per week</span></h4>
            </header>

            <ul className="space-y-3 mb-6">
              <li className="flex gap-2 items-center">
                <CheckCircle className="text-green-800 mr-3 flex-shrink-0" size={24} />
                <span className="text-gray-700">{skip.hire_period_days} days hire period</span>
              </li>
              {
                skip.description.map( (item, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <CheckCircle className="text-green-800 mr-3 flex-shrink-0" size={24} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  
                ))
              }
            </ul>

            <footer className="mt-auto">
              <button onClick={ () => setSelectSkip(skip)} className="w-full py-3 font-bold border-2 text-green-800 border-green-800 hover:bg-green-800 hover:text-white cursor-pointer rounded-md transition-colors duration-200">SELECT</button>
            </footer>
        </div>
      </div>
  )
}
