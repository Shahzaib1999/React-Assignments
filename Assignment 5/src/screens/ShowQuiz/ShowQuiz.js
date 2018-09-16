import React, { Component } from 'react';
import '../../App.css';
import '../../css/bootstrap.min.css';

class ShowQuiz extends Component {
    constructor(props) {
      super(props);

    this.state = {
     
    }
  }

  render() {
    console.log('showQuiz => ',this);
    const {quiz, onPress, signOut} = this.props;
    var name = localStorage.getItem('name');
    debugger

    return (
      <span>
        <h1 align="center">Welcome {name}</h1>
        <table className="table table-bordered" id="table" align="center">
          <thead>
            <tr>
              <th><center><h4>#</h4></center></th>
              <th><center><h4>Course Name</h4></center></th>
              <th><center><h4>Details</h4></center></th>
            </tr>
          </thead>
          <tbody>
          
              
              {quiz.map((list, index) =>{
            return (
              <tr key={index}><td>{index}</td><td><b>{list.name}</b></td><td><button className="btn btn-primary" onClick={() => onPress(index)}>Details</button></td></tr>
              
            )}
              )}


          </tbody>
        </table>

        <button className="btn btn-warning center-block" onClick={() => signOut()}>Sign out</button>
      
      </span>
    );
  }
}

export default ShowQuiz;
