import React, { Component } from 'react';
import '../../App.css';
import '../../css/bootstrap.min.css';
import ShowQuiz from '../ShowQuiz/ShowQuiz';

class QuizInfo extends Component {
    constructor(props) {
    super(props);

    this.state = {
     
    }

  }
  render() {
    debugger
    const {quiz, onBack, start} = this.props;
    console.log('showDetails => ', this);
    console.log('quizInfo props => ', this.props);
    console.log('quiz => ', quiz.quiz);
    var email = localStorage.getItem('email');


    return (
      <div className="App"><br />
              
              {quiz.quiz.map((value,index) =>{
                if (!localStorage.getItem(email + value.key)){ 
                return(
                  <div key={index}>
                    <h3>Quiz: {value.quizName}</h3>
                    <h4>Total Marks: {value.marks}</h4>
                    <button className="btn btn-primary" id={'q' + index} onClick={() => start(index)}>Start</button> 
                  </div>
                )
              }
              else{
                  return (
                    <div key={index}>
                      <h3>Quiz: {value.quizName}</h3> 
                      <h4>Total Marks: {value.marks}</h4>
                      <h4>Marks obtained : {localStorage.getItem(email + value.key)}</h4>                      
                    </div>
                  )
              }
            })
              }
        <br />
        
        <button className="btn btn-info" onClick={() => onBack()}>Back</button>

      </div>
    );
  }
}

export default QuizInfo;
