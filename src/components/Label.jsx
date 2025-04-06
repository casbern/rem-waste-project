import { CircleAlert } from "lucide-react"

 

export const Label = ({msg, type}) => {

const typeStyle = {
  warning: `text-white text-bold bg-orange-400 py-1.5 px-1 rounded-lg `,
  danger: `text-white text-bold bg-red-500 p-1.5 rounded-lg`
}

  return (
    <div className={` inline-flex items-center gap-1.5 mb-1.5 ${typeStyle[type]}`}>
      <CircleAlert size={24}/>
      <span>{msg}</span>
    </div>
   )
}