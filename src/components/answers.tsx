import { useState } from "react";
import { questioninter } from "../redux/service/questionapi"

interface Props {
     number: number,
     question:questioninter,
     answers?:string[],
     setanswers?: any
}

const Answer = (props:Props) => {
  return (
    <div className="mx-4 my-6 shadow-lg p-3 bg-white">
    <div className="text-xl p-3">
          {props.number + 1}.  {props.question.question}
    </div>
    <div className="flex justify-between">
          <Option option={props.question.optionsA} selected={props.question.answer} />
          <Option option={props.question.optionsB} selected={props.question.answer} />
          <Option option={props.question.optionsC} selected={props.question.answer} />
          <Option option={props.question.optionsD} selected={props.question.answer} />
    </div>
    <div>
          explaination:  {props.question.explaination}
    </div>
    </div>
  )
}
interface OptionProps {
     option:string,
     selected:string,
}
const Option = (props:OptionProps) => {
     return (
     <div className={`w-1/4 m-2 rounded-lg p-2 
                         ${(props.selected === props.option) ? "bg-indigo-200 hover:bg-indigo-300" : "bg-slate-100 hover:bg-slate-200 "}`}>
               {props.option}
     </div>
     )
}

export default Answer