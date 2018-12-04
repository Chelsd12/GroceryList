import React, { Component } from 'react';
import List from "./List";
import ToBuyForm from "./ToBuyForm";
import './App.css';

class App extends Component {
  state = { 
    todos: [
        { id: 1, name: "Cookies", complete: false },
        { id: 2, name: "Milk", complete: false },
        { id: 3, name: "Ice cream", complete: false }
    ]//todos end
   };//state end

   getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
   };//getUniqId end

   addItem = (name) => {
     const { todos } = this.state;
     const todo = { name, id: this.getUniqId(), complete: false }
     this.setState({ todos: [todo, ...todos] });
   };//addItem end
   
   handleClick = (id) => {
     const { todos } = this.state;
     this.setState({ todos: todos.map( todo => {
          if (todo.id === id) {
            return {
             ...todo,
             complete: !todo.complete
           }//return end
         }//if end
         return todo
       })//todo loop end
      })//setState end
   };//handleClick end
  
  render() {
    return (
      <div>
        <ToBuyForm addItem={this.addItem} />
        <List name="Grocery List" items={this.state.todos} todoClick={this.handleClick} />
      </div>
    );//return end
  }//render end
}//class App end

export default App;
