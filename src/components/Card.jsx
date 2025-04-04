import { CheckCircle } from "lucide-react"

export const Card = ({img, description}) => {
  console.log("essa é a descricao", description)
  console.log(img)
  return (
    <>
      <div className="w-full max-w-[380px] mt-6 p-6 bg-white border border-gray-300 rounded-md">
        <div className="flex justify-center mb-4">
          <img className="h-40 object-contain" src={img} alt="image of the skip's size" />
        </div>

        <header className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">4 Yard Skip</h3>
          <h4 className="text-lg font-bold text-gray-900 mt-1">$80,00</h4>
        </header>

        <ul className="space-y-3 mb-6">
          {
            description.map( (item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <CheckCircle className="text-blue-500 mr-3 flex-shrink-0" size={24} />
                <span className="text-gray-700">{item}</span>
              </li>
            ))
          }

        
        </ul>
        <footer>
          <button className="w-full py-3 font-bold border-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer rounded-md transition-colors duration-200">SELECT</button>
        </footer>
      </div>

      

    </>
  )
}
