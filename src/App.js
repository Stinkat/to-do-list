import React from 'react';
import './App.css';
import TodoList from './component/TodoList';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      
    </div>
  );
}

export default App;