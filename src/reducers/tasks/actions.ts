import { Task } from "../../components/TaskCard";

export enum ActionTypes {
  ADD_NEW_TASK = "ADD_NEW_TASK",
  CHANGE_TASK_COMPLETED_STATE = "CHANGE_TASK_COMPLETED_STATE",
  DELETE_TASK = "DELETE_TASK",
}

export function addNewTaskAction(newTask: Task) {
  return {
    type: ActionTypes.ADD_NEW_TASK,
    payload: {
      newTask,
    },
  };
}

export function changeTaskCompletedStateAction(id: string) {
  return {
    type: ActionTypes.CHANGE_TASK_COMPLETED_STATE,
    payload: {
      id,
    },
  };
}

export function deleteTaskAction(id: string) {
  return {
    type: ActionTypes.DELETE_TASK,
    payload: {
      id,
    },
  };
}
