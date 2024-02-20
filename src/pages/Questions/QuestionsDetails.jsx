import React from 'react'
import { useParams , Link } from 'react-router-dom'
import upvote from '../../assets/sort-up-solid.svg'
import downvote from '../../assets/sort-down-solid.svg'
import '../Questions/Questions.css'
import Avatar from '../../'
const QuestionsDetails = () => {
      
    const {id} = useParams()
    console.log(id)

    var questionsList = [{
        id: '1',
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
        id: '2',
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
        id: '3',
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
  return (
    <div clasName = 'question-details-page'>
      {
        questionsList === null ?
        <h1>Loading...</h1> :
        <>
           {
             questionsList.filter(question => question.id === id) .map(question => (
                <div key={question.id}>
                    {console.log(question)}
                    <section className = 'question-details-container'>
                        <h1>{question.questionTitle}</h1>
                        <div className='question-details-container-2'>
                            <div className='question-votes'>
                                <img src={upvote} alt="" width='18'/>
                                <p>{question.upVotes - question.downVotes}</p>
                                <img src={downvote} alt="" width='18'/>
                            </div>
                            <div style ={{width:"100%"}}>
                               <p className='question-body'>{question.questionBody}</p>
                               <div className="question-details-tags">
                                {
                                    question.questionTags.map((tag) => {
                                        <p key={tag}>{tag}</p>

                                    })
                                }
                               </div>
                               <div className ="question-action-user">
                                <div>
                                    <button type='button'>Share</button>
                                    <button type='button'>Delete</button>
                                </div>
                                    <div>
                                       <p>asked{question.askedOn}</p>
                                       <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#00086d8'}}></Link> 
                                       <Avatar/>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </section>

                </div>
             ))
           }

                   
        </>
      }
    </div>
  )
}

export default QuestionsDetails
