import { useContext } from "react";
import { TasksContext } from "../contexts/tasksContext";
import { CreateButton } from "./CreateButton";
import { Input } from "./Input";

export const CreateTaskForm = () => {
  const { createNewTask } = useContext(TasksContext);

  function handleTaskCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const description = event.currentTarget.description.value as string;
    createNewTask({ description });
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleTaskCreate}
      className="flex items-center gap-4 py-6 -mt-14"
    >
      <Input
        id="description"
        name="description"
        maxLength={100}
        className="flex-1 border-gray-700 border-2"
      />
      <CreateButton type="submit" />
    </form>
  );
};
