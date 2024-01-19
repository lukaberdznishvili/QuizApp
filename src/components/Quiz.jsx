import { useState, useCallback } from "react";
import QUESTIONS from '../questions';
import Question from "./Question";
import Summery from "./Summery";
export default function Quiz(){

    const[userAnswer, setUserAnswer] = useState([]);
 
    
    const activeQuestionIndex =  userAnswer.length;

    const quizIsComplite = activeQuestionIndex === QUESTIONS.length; 

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
      
            setUserAnswer((prevUserAnswer)=>{
                return[...prevUserAnswer, selectedAnswer]
            });
           
    }, []);
    
    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null), [handleSelectAnswer]); 

    if(quizIsComplite){
        return(
            <Summery userAnswers={userAnswer}/>
        )
    }

    return(
        <div id="quiz">
        <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer} />
        </div>
   
    )
}