
export const Footer = ({selectSkip}) => {

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="w-full flex justify-start items-center space-x-4">
          {
            selectSkip && (
              <div className={"text-left"}>
                <div className="text-base font-bold text-gray-800">{selectSkip.size} Yard Skip</div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600">{selectSkip.hire_period_days} days hire period</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-lg font-bold text-blue-700">{(selectSkip.price_before_vat).toLocaleString('en-GB', {
                    style: "currency",
                    currency: "GBP"
                  })}</span>
                </div>
              </div>
            )
          }
        </div>
        
        <div className="flex w-full sm:w-auto gap-3 mt-2 sm:mt-0">
          <button className="flex-1 sm:flex-none px-4 py-2 sm:px-5 sm:py-3 font-bold border-2 text-green-800 border-green-800 hover:bg-green-800 hover:text-white cursor-pointer rounded-md transition-colors duration-200">Back</button>
          <button className="flex-1 sm:flex-none px-4 py-2 sm:px-5 sm:py-3 font-bold border-2 border-green-800 bg-green-800 hover:bg-green-900 text-white cursor-pointer rounded-md transition-colors duration-200">Continue → </button>
        </div>
      </div>
    </footer>
  )
}
