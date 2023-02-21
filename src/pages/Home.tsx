import React from 'react'
import QuestionCard from '../components/QuestionCard'

const Home = () => {
    const getApi =async () => {
        
    }
    const checkAnswer = (e : React.MouseEvent<HTMLButtonElement >) =>{

    }
    const nextQuestion = () =>{

    }
  return (
    <div >
        <h1>Quiz Typescript React</h1>
        <button className='start' onClick={getApi}>Start</button>
        <p className='Score'>Score : </p>
        <p className='Score'>Loading Question...  </p>
        <QuestionCard />
        <button className='next' onClick={nextQuestion}>Next Question</button>



    </div>
  )
}

export default Home