import React, { Component } from 'react';
import '../../App.css';
import '../../css/bootstrap.min.css';
import swal from 'sweetalert';

class Quiz extends Component {
    constructor(props) {
    super();

    this.state = {
     key: false
    }

    this.checkKey = this.checkKey.bind(this);
    this.checkAns = this.checkAns.bind(this);
  }

  

  renderQuiz(){
    const { startquiz, back } = this.props;
    const q = 'q';
    return(
      <div className="panel panel-success" id="quiz">
        <div className="panel-heading" align="center">
          <h3>{startquiz.quizName}</h3>
        </div>
        <div className="panel-body">
          <ol>
            {startquiz.questions.map((value, index) => {
              return (
                <li key={index}>
                  <h4>{value.question}</h4>

                  {value.options.map((option, id) => {
                    return (
                      <div key={id}>
                        <input type="radio" name={q+index} key={id} value={option} />{option}
                      </div>
                    )
                  })}

                </li>
              )
            })
            }
          </ol>
          <input type="button" className="btn btn-success" onClick={this.checkAns} value="Submit" />
          <input className="pull-right btn btn-warning" type="submit" onClick={() => back()} value="Back" />
        </div>
      </div>
    )
  }

  renderKey(){
    const { back } = this.props;
    
    return(
      <div className="well container" id="key_well">
        <h3>Enter Key</h3>
        <input type="password" id="key" /><br /><br />
        <input className="pull-left btn btn-info" type="submit" onClick={this.checkKey} value="Submit" />
        <input className="pull-right btn btn-warning" type="submit" onClick={() => back()} value="Back" />
      </div>
    )
  }

  checkKey(){
    const { startquiz } = this.props;
    var key = document.getElementById('key').value;
    if (key === startquiz.key) {
      this.setState({
        key: true
      })
    }
    else{
      swal('Incorrect key','','error');
    }

  }

  checkAns(){
    const { startquiz, back } = this.props;
    var count = 0;
    var result = 0;
    const a = 0;
    var email = localStorage.getItem('email');
    //store.push(email);
    for (let i = 0; i < startquiz.questions.length; i++) {
      var ans = document.getElementsByName('q'+i);
      const ans1 = startquiz.questions[i].answer;
      // debugger
      for (let j = 0; j < ans.length; j++) {
        if (ans[j].checked === true) {
          if (ans[j].value === ans1) {
            count += 5;
            break;
          }
        }
      }
      
    }
    console.log('count =>' , count)
    localStorage.setItem(email + startquiz.key, count); 
    localStorage.getItem(email + startquiz.key); 
    back()
    // if (count == a) {
    //   result = 0
    // }
    // else if(count == ++a){

    // }
    

  }

  render() {
    const {key} = this.state;
    console.log('Quiz props => ', this.props);
    debugger

    return (
      <div>
        {!key && this.renderKey()}
        {key && this.renderQuiz()}
      </div>
    );
  }
}

export default Quiz;
