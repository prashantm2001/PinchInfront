import { useNavigate, useParams } from "react-router-dom"

const Result = () => {
  const { score } = useParams();
  const navigate = useNavigate();
  console.log(score);
  return (
    <div className="h-screen flex flex-col text-center justify-center items-center ">
      <div className="bg-white w-1/2 h-64 rounded-xl shadow-2xl">
        <div className="text-4xl p-5">
        Result:
        </div>
        <div className=" text-4xl m-4">
          {score} right out of 10
        </div>
        <div>
          <button className="bg-indigo-400 hover:bg-indigo-500 px-6 py-3 rounded-lg mb-6 text-2xl m-4" onClick={()=>navigate("/")}>
            home
          </button>
          <button className="bg-indigo-400 hover:bg-indigo-500 px-6 py-3 rounded-lg mb-6 text-2xl m-4" onClick={()=>navigate("/ans")}>
            answers
          </button>
        </div>
      </div>
    </div>
  )
}

export default Result