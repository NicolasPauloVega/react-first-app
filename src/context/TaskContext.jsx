import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/Task";

// createContext retorna un objeto que almacena datos
export const TaskContext = createContext();

// Creamos un componente que engloba esos datos
export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    // Creamos el componente
    <TaskContext.Provider
      value={
        // Exportamos como objeto el arreglo y las funciones para crear y eliminar tareas.
        {
          tasks,
          deleteTask,
          createTask,
        }
      }
    >
      {/* componente hijo */}
      {props.children}
    </TaskContext.Provider>
  );
}
