import React , {Component} from 'react';
 import List from './component/List';



export default class App extends Component {
    state = {
        name: '',
        todos:[]
     }
     
         handleAddClick =()=>{
             if(this.state.name.trim() !=='') {
                 const todosList = this.state.todos;
                 todosList.push (this.state.name);
                 this.setState({
                    todos: todosList,
                    name:''
                 })
                 

             }

         }
   
    render () {
 return (
     <div>
<div>
      <input  value = {this.state.name} onChange={(event)=> this.setState({name: event.target.value})}/>
      <button onClick={this.handleAddClick}>Add</button>
      </div>
    {this.state.todos.map((item) => {
          return <List todos={item} />
      })}
    
    </div> 
 )
    }}