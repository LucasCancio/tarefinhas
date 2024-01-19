import { useContext } from "react";
import { Task, TaskCard } from "./TaskCard";
import { TasksContext } from "../contexts/tasksContext";

type Props = {
  tasks: Task[];
};

export const TaskListSection = ({ tasks }: Props) => {
  const { changeTaskCompletedState, deleteTask } = useContext(TasksContext);

  function handleChangeTaskCompletedState(id: string) {
    changeTaskCompletedState(id);
  }

  function handleDeleteTask(id: string) {
    deleteTask(id);
  }

  return (
    <section className="flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskCard
          key={`task-${task.id}`}
          task={task}
          onDeleteTask={handleDeleteTask}
          onChangeTaskCompletedState={handleChangeTaskCompletedState}
        />
      ))}
    </section>
  );
};
