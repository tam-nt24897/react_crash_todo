import React, { Component } from 'react';
import TodoItem from './TodoItem';

import '../App.css';

class Todos extends Component {



    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ));
    }
}

// Todos.prototype = {
//     todos: PropTypes.array.isRequired
// }


export default Todos;
