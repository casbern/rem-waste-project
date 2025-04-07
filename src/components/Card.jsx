import { CheckCircle } from "lucide-react"
import { Label } from "./Label"
import { heavyWasteSelection } from "../data/heavyWasteSelection"

export const Card = ({skip, selected, setSelectSkip }) => {

  const isDisabled = !skip.allows_heavy_waste && heavyWasteSelection.length > 0;


  const handleSelect = () => {
    if(!isDisabled) {
      setSelectSkip(skip)
    }
  }

  const containerClasses = `max-w-[380px] mt-6 rounded-md flex flex-col transform transition-transform ${
    isDisabled 
      ? "bg-gray-100 opacity-60 cursor-not-allowed" 
      : "bg-white hover:scale-105 hover:shadow-lg"
  } ${
    selected 
      ? "border-3 border-green-800" 
      : "border border-gray-300"
  }`

  const buttonClasses = `w-full py-3 font-bold border-2 rounded-md transition-colors duration-200 ${
    isDisabled
      ? "bg-gray-300 border-gray-400 text-gray-500 cursor-not-allowed"
      : selected
        ? "text-white bg-green-800 hover:bg-green-900 border-green-800 cursor-pointer"
        : "text-green-800 border-green-800 hover:bg-green-800 hover:text-white cursor-pointer"
  }`
  const buttonText = selected ? "SELECTED" : "SELECT"


  return (
    <div className={containerClasses}>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex flex-col justify-center mb-4 relative ">
        <div className="flex flex-col -mb-2 self-start">
          { 
            !skip.allowed_on_road && (
              <Label type="warning" msg={"Private Property Only"}/>
            )
          }
          { 
            !skip.allows_heavy_waste && heavyWasteSelection.length > 0 && (
              <Label type="danger" msg={"Not Suitable for Heavy Waste"}/>
            )
          }
        </div>
          <img className="h-40 object-contain" src={skip.img} alt="image of the skip's size" />
        </div>

        <header className="mb-4">
          <h3 className="text-lg font-bold text-gray-800">{skip.size} Yard Skip</h3>
          <h4 className="text-2xl font-bold text-blue-700 mt-1">
            {(skip.price_before_vat || 0).toLocaleString('en-GB', {
              style: "currency",
              currency: "GBP"
            })} <span className="text-sm font-bold">per week</span>
          </h4>
        </header>

        <ul className="space-y-3 mb-6">
          <li className="flex gap-2 items-center">
            <CheckCircle className="text-green-800 mr-3 flex-shrink-0" size={24} />
            <span className="text-gray-700">{skip.hire_period_days} days hire period</span>
          </li>
          {
            skip.description.map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <CheckCircle className="text-green-800 mr-3 flex-shrink-0" size={24} />
                <span className="text-gray-700">{item}</span>
              </li>
            ))
          }
        </ul>

        <footer className="mt-auto">
          <button 
            onClick={handleSelect} 
            disabled={isDisabled}
            className={buttonClasses}
          >
            {buttonText}
          </button>
        </footer>
      </div>
    </div>
    )
}
