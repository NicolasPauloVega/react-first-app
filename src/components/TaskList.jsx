// Importamos useContext
import { use, useContext } from 'react';
// Importamos el nombre de nuestro contexto
import { TaskContext } from '../context/TaskContext';

import TaskCard from "./TaskCard";

function TaskList() {

  // Trae las tareas y la funcion delete
  const { tasks, deleteTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aún</h1>;
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map((task) => (
        // Enviamos la tarea
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;