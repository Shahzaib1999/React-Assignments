import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
// import QuizInfo from './screens/QuizInfo/QuizInfo';
import ShowQuiz from './screens/ShowQuiz/ShowQuiz';
import QuizInfo from './screens/QuizInfo/QuizInfo';
import Sign from './screens/Sign/Sign';


class App extends Component {
  
  constructor(){
    super();

    this.state = {
      user: false,
      quiz: null,
      quizzes: [
        { name: 'AngularJs', questions: 50 },
        { name: 'React', questions: 30 },
        { name: 'PWA', questions: 20 },
        { name: 'HTML', questions: 50 }
      ]
    }

    this.showQuiz = this.showQuiz.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  renderHeader(){

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header> 
    );
  }


  showQuiz() {
    
    this.setState({
      quiz: null
    })

  }

  showDetails(index) {
    const { quizzes } = this.state;

    this.setState({
      quiz: quizzes[index]
    })

  }

  renderBody(){
    const { quizzes, quiz, user } = this.state;


    return (
      <div>
        {/* {!quiz && <ShowQuiz quiz={quizzes} onPress={this.showDetails} />}
        {quiz && <QuizInfo quiz={quiz} onBack={this.showQuiz} />} */}
        {!user && <Sign />}

      </div>
    );
  }


  render() {
    

    return (
      <div>
        <div className="App">
          {this.renderHeader()}
        </div>
        {this.renderBody()}
      </div>
    );
  }
}

export default App;
