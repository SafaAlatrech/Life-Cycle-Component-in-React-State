import React, {Component} from 'react'

class List extends Component {
    constructor (props) {
      super (props);
      console.log("App constructor()")
      console.log("constructor()");
     this.state = {
       intervall: null,
       timer : 0
     };
    }

    componentDidMount () { 
    console.log("ComponentDidMount()")
    this.setState({
     intervall : setInterval (() => {
        this.setState({timer :this.state.timer +1});
     },1000)
    })
    }

    componentDidUpdate() {
      console.log("ComponentDidUpdate()")

    }

    componentWillUnmount () {
      console.log("componentWillUnmount()")
      clearInterval(this.state.intervall);
    }

 todos = [
       'Introduction to react state',
       'Class Based Component',
       'Functional Based Component'
 ]
 
   render () { 
   console.log("render()");
    return (
     <div>
       <ul className="list">
       {this.todos.map((todo,i) => (
        <li key={i}>{todo}</li>))}
       </ul> 
      <h2>{this.state.timer}</h2>
     </div>
    )

   }
}
export default List 