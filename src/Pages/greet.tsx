import { useNavigate } from "react-router-dom"

const Greet = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen w-full">
    <div className="flex flex-col justify-center text-center h-full w-full">
      <div className="text-6xl p-4 m-6">
      Welcome to the quiz
      </div>
      <div>
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40"
       onClick={()=>navigate('/ques')}>
        Go to Questions
      </button>
      </div>
    </div>
    </div>
  )
}

export default Greet