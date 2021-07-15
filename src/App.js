import './App.css';
import { Component } from 'react';
import List from './Components/List'

class App extends Component { 
  constructor (props) {
    console.log("App constructor()")
  super (props); 
  this.state = {
    isVisible : false
    } 
    
  }
  toggleVisibility = () => {
    this.setState ({
      isVisible : !this.state.isVisible,
    })
   }
  render() {
    return (
     <div className="App">
     <button className="Visibilty-btn" onClick={this.toggleVisibility}>{this.state.isVisible ? 'Hide list' : 'Show List'}</button>
                  {this.state.isVisible && <List/> }
     </div>
        );
        }
 }
 export default App;
 



