import { useRef } from "react";
export default function Answers({answer, selectedAnswer, answerState, onSelect}){
    const shufledAnswers = useRef();
    if(!shufledAnswers.current ){
        shufledAnswers.current = [...answer];
        shufledAnswers.current.sort(()=> Math.random() - 0.5);}
    
        
    return(
        <ul id="answers">
            {shufledAnswers.current.map(answer => {
                const isSelected = selectedAnswer === answer;
                let cssClasses = '';
                if(answerState === 'answered' && isSelected ){
                    cssClasses = "selected";
                }
                if((answerState === "correct" || answerState === "wrong")&& isSelected){
                    cssClasses = answerState;
                }

                return  <li key={answer} className="answer">
                                <button onClick={() => onSelect(answer)} type="" className={cssClasses} disabled={answerState !== ''}>{answer}</button>
                        </li>
            }
               
            )}
        </ul>
    )
}