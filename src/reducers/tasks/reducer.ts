import { Task } from "../../components/TaskCard";
import { ActionTypes } from "./actions";
import {
  addNewTaskMethod,
  changeTaskCompletedStateMethod,
  deleteTaskMethod,
} from "./methods";

export interface ITasksState {
  tasks: Task[];
}

export interface IActionType {
  type: ActionTypes;
  payload?: {
    newTask?: Task;
    id?: string;
  };
}

export function tasksReducer(state: ITasksState, action: IActionType) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_TASK:
      return addNewTaskMethod(state, action);

    case ActionTypes.CHANGE_TASK_COMPLETED_STATE:
      return changeTaskCompletedStateMethod(state, action);

    case ActionTypes.DELETE_TASK:
      return deleteTaskMethod(state, action);

    default:
      return state;
  }
}
