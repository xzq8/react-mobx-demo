import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import TodoList from '../components/TodoList';
import AddTodo from "../components/AddTodo";

@inject('store')
@observer
class TodoView extends Component {
     constructor(){
         super()
         this.state = {
             a:11
         }
     }
    componentDidMount() {
        const { store } = this.props;
        store.todo.fetchTodos();
    }
    render() {
        const { store } = this.props;
       return  <div className="todo">
            <h1>{this.state.a}</h1>
            <AddTodo  />
            <TodoList todolist={store.todo.todos} />
        </div>

    }
}
export default TodoView