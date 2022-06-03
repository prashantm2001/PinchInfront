import { useState } from "react";
import { questioninter } from "../redux/service/questionapi"

interface Props {
     number: number,
     question:questioninter,
     answers:string[],
     setanswers: any
}

const Question = (props:Props) => {
     const [selected, setSelected] = useState<string>("");
  return (
    <div className="mx-4 my-6 shadow-lg p-3 bg-white">
    <div className="text-xl p-3">
          {props.number + 1}.  {props.question.question}
    </div>
    <div className="flex justify-between">
          <Option option={props.question.optionsA} number={props.number} answers={props.answers} setanswers={props.setanswers} selected={selected} setSelected={setSelected} />
          <Option option={props.question.optionsB} number={props.number} answers={props.answers} setanswers={props.setanswers} selected={selected} setSelected={setSelected} />
          <Option option={props.question.optionsC} number={props.number} answers={props.answers} setanswers={props.setanswers} selected={selected} setSelected={setSelected} />
          <Option option={props.question.optionsD} number={props.number} answers={props.answers} setanswers={props.setanswers} selected={selected} setSelected={setSelected} />
    </div>
    </div>
  )
}
interface OptionProps {
     option:string,
     number:number,
     answers:string[],
     setanswers: any,
     selected:string,
     setSelected: any
}
const Option = (props:OptionProps) => {
     const onClick = () => {
          let ans = props.option;
          if(props.selected === props.option){
               ans = "";
          }
          let newAnswers = [...props.answers];
          newAnswers[props.number] = ans;
          props.setanswers(newAnswers);
          props.setSelected(ans);
     }
     return (
     <div className={`w-1/4 m-2 rounded-lg p-2 
                         ${(props.selected === props.option) ? "bg-indigo-200 hover:bg-indigo-300" : "bg-slate-100 hover:bg-slate-200 "}`} onClick={onClick}>
               {props.option}
     </div>
     )
}

export default Question