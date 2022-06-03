import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/question";
import { questioninter, useFetchQuery } from "../redux/service/questionapi"

const Questions = () => {
  const {data , isError , isLoading} = useFetchQuery();
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  const onSubmit = () => {
    if(data){
    const score = getScore(answers, data);
    console.log(score);
    navigate(`/res/${score}`);
    }
  }
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
            <Question answers={answers} setanswers={setAnswers} number={index} question={question}/>
          </div>
        )
      })
    }
    <div className="m-6 text-center">
      <button className="bg-indigo-400 hover:bg-indigo-500 px-6 py-3 rounded-lg mb-6 text-2xl " onClick={onSubmit}>
        submit
      </button>
    </div>
      </div>
    </div>
  )
}

const getScore = (answers:string[], questions:questioninter[]) => {
  let score = 0;
  questions.forEach((question:questioninter, index:number) => {
    if(question.answer === answers[index]){
      score += 1;
    }
  })
  return score;
}

export default Questions