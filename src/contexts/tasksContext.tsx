import { createContext, ReactNode, useEffect, useReducer } from "react";
import { tasksReducer } from "../reducers/tasks/reducer";
import {
  addNewTaskAction,
  changeTaskCompletedStateAction,
  deleteTaskAction,
} from "../reducers/tasks/actions";
import { Task } from "../components/TaskCard";
import { v4 as uuidv4 } from "uuid";

interface ICreateTaskData {
  description: string;
}

interface ITasksContextType {
  tasks: Task[];
  totalTasksQuantity: number;
  completedTasksQuantity: number;
  changeTaskCompletedState: (id: string) => void;
  deleteTask: (id: string) => void;
  createNewTask: (data: ICreateTaskData) => void;
}

interface ITasksContextProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext({} as ITasksContextType);

const tasks_STATE_STORAGE_KEY = "@ignite-todo:tasks-state-1.0.0";

export function TasksContextProvider({ children }: ITasksContextProviderProps) {
  const [tasksState, dispatch] = useReducer(
    tasksReducer,
    {
      tasks: [] as Task[],
    },
    (state) => {
      const storedStateAsJSON = localStorage.getItem(tasks_STATE_STORAGE_KEY);

      if (storedStateAsJSON) {
        const storedState = JSON.parse(storedStateAsJSON);

        return storedState;
      }

      return state;
    }
  );

  const { tasks } = tasksState;

  const totalTasksQuantity = tasks.length;
  const completedTasksQuantity = tasks.filter(
    (task) => task.isCompleted
  ).length;

  useEffect(() => {
    const stateJSON = JSON.stringify(tasksState);

    localStorage.setItem(tasks_STATE_STORAGE_KEY, stateJSON);
  }, [tasksState]);

  function changeTaskCompletedState(id: string) {
    dispatch(changeTaskCompletedStateAction(id));
  }

  function deleteTask(id: string) {
    dispatch(deleteTaskAction(id));
  }

  function createNewTask({ description }: ICreateTaskData) {
    const newTask: Task = {
      description,
      id: uuidv4(),
      isCompleted: false,
      createdDate: new Date(),
    };

    dispatch(addNewTaskAction(newTask));
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        totalTasksQuantity,
        completedTasksQuantity,
        changeTaskCompletedState,
        createNewTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
