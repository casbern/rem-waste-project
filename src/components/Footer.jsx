
export const Footer = () => {

  const value = 777

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg px-6 py-4 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-sm text-gray-600">16 Yard Skip Selected</span>
        <span className="text-2xl font-bold text-blue-700">{(value).toLocaleString('en-GB', {
                style: "currency",
                currency: "GBP"
              })}</span>
      </div>
      <div className="flex gap-3">
        <button className="px-5 py-3 font-bold border-2 text-green-800 border-green-800 hover:bg-green-800 hover:text-white cursor-pointer rounded-md transition-colors duration-200">Back</button>
        <button className="px-5 py-3 font-bold border-2 border-green-800 bg-green-800 hover:bg-green-900 text-white cursor-pointer rounded-md transition-colors duration-200">Continue → </button>
      </div>
    </footer>
  )
}
