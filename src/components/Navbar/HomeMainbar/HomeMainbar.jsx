import React from 'react'
import{Link,useLocation,useNavigate} from 'react-router-dom'
import '../HomeMainbar/HomeMainbar.css'
import QuestionList from '../HomeMainbar/QuestionList'
const HomeMainbar = () => {
    const location = useLocation()
    const user = 1;
    const navigate= useNavigate()

    var questionsList = [{
        id: 1,
        votes: 3,
        noOfAnswer: 2,
        questionTitle:"What is a function?",
        questionBody:"It meant to be",
        questionTags:["java","node js","react js","mongodb"],
        userPosted: "mano",
        askedOn:"jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{
        id: 2,
        votes: 0,
        noOfAnswer: 0,
        questionTitle:"What is a function?",
        questionBody:"It meant to be",
        questionTags:["javascript","node js","R","python"],
        userPosted: "mano",
        askedOn:"jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
       
    },{
        id: 3,
        votes: 1,
        noOfAnswer: 0,
        questionTitle:"What is a function?",
        questionBody:"It meant to be",
        questionTags:["express","node js","react js","python"],
        userPosted: "mano",
        askedOn:"jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }]

    const checkAuth = () => {
        if(user === null){
            alert("login or signup to ask a question")
            navigate('/Auth')
        }else{
            navigate('/AskQuestion')
        }
        
    }
  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
            {
                location.pathname === '/' ? <h1>Top Questions</h1>:<h1>All Question</h1>
            }
            <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        </div>
        <div>
            {
                questionsList === null ? 
                <h1>Loading....</h1> :
                <>
                     <p>{questionsList.length} questions</p>
                     <QuestionList questionsList={questionsList}/>
                  
                </>

            }
        </div>
      
    </div>
  )
}

export default HomeMainbar
