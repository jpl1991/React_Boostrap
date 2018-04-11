import React from 'react';
import './Todo.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default class Todo extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	todos:[
	  		{id: 0, text: "Make dinner tonight!"},
	  		{id: 1, text: "Fold the laundry."},
	  		{id: 2, text: "Learn to make React app!"}
	  	],
	  	nextId: 3
	  };

	   this.addTodo = this.addTodo.bind(this);
	   this.removeTodo = this.removeTodo.bind(this);
	}
	
	addTodo(todoText){
		let todos = this.state.todos.slice();
		todos.push({id:this.state.nextId, text: todoText});
		this.setState({
			todos: todos,
			nextId: ++this.state.nextId
		});

	}
	removeTodo(id){
		this.setState({
			todos:this.state.todos.filter((todo, index)=>todo.id!==id)
		});
	}


	Header = () =>{
		return(
			<h1>Hello Peilin</h1>
			);

	}

	render() {
		return (
			<div className="todo">
				<div className = "todo-wrapper">

				<this.Header />
				<TodoInput todoText="" addTodo = {this.addTodo} />
				<ul>
					{
						this.state.todos.map((todo)=>
							{
								return <TodoItem todo = {todo} key = {todo.id} id = {todo.id} removeTodo = {this.removeTodo} />
							}
							)
					}
				</ul>
				</div>
			</div>	
		);
	}
}

