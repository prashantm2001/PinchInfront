import { useNavigate } from "react-router-dom";
import Answer from "../components/answers";
import { questioninter, useFetchQuery } from "../redux/service/questionapi"

const Answers = () => {
  const {data , isError , isLoading} = useFetchQuery();
  const navigate = useNavigate();
  return (
    <div className="w-full bg-slate-200">
      <div className="text-center text-4xl p-6">
      Questions
      </div>
      <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && data.map((question:any , index: number)=>{
        return(
          <div key={question.id}>
            <Answer number={index} question={question}/>
          </div>
        )
      })
    }
    <div className="m-6 text-center">
      <button className="bg-indigo-400 hover:bg-indigo-500 px-6 py-3 rounded-lg mb-6 text-2xl " onClick={()=>navigate('/')}>
        Home
      </button>
    </div>
      </div>
    </div>
  )
}

export default Answers