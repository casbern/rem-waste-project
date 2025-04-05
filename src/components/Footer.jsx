
export const Footer = () => {

  const value = 777

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div>
            <div className="text-base font-bold text-gray-800">16 Yard Skip</div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600">14 days hire period</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-lg font-bold text-blue-700">{(value).toLocaleString('en-GB', {
                style: "currency",
                currency: "GBP"
              })}</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="px-5 py-3 font-bold border-2 text-green-800 border-green-800 hover:bg-green-800 hover:text-white cursor-pointer rounded-md transition-colors duration-200">Back</button>
          <button className="px-5 py-3 font-bold border-2 border-green-800 bg-green-800 hover:bg-green-900 text-white cursor-pointer rounded-md transition-colors duration-200">Continue → </button>
        </div>
      </div>
    </footer>
  )
}
