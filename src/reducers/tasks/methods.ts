import { produce } from "immer";
import { IActionType, ITasksState } from "./reducer";

export function addNewTaskMethod(state: ITasksState, action: IActionType) {
  return produce(state, (draft) => {
    if (action.payload?.newTask) {
      draft.tasks.push(action.payload.newTask);
    }
  });
}

export function changeTaskCompletedStateMethod(
  state: ITasksState,
  action: IActionType
) {
  const taskIndex = state.tasks.findIndex(
    (task) => task.id === action.payload?.id
  );

  if (taskIndex < 0) {
    return state;
  }

  return produce(state, (draft) => {
    const task = draft.tasks[taskIndex];
    if (task.isCompleted) {
      task.completedDate = undefined;
      task.isCompleted = false;
    } else {
      task.completedDate = new Date();
      task.isCompleted = true;
    }
  });
}

export function deleteTaskMethod(state: ITasksState, action: IActionType) {
  return produce(state, (draft) => {
    draft.tasks = draft.tasks.filter((task) => task.id != action.payload?.id);
  });
}
