import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";

export interface Task {
  id: string;
  description: string;
  createdDate: Date;
  isCompleted: boolean;
  completedDate?: Date;
}

interface Props {
  task: Task;
  onChangeTaskCompletedState: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskCard({
  task,
  onChangeTaskCompletedState,
  onDeleteTask,
}: Props) {
  const [isChecked, setIsChecked] = useState(task.isCompleted);

  const handleTaskChecked = () => {
    setIsChecked((state) => !state);
    onChangeTaskCompletedState(task.id);
  };

  const htmlId = `task-${task.id}`;

  return (
    <div className="box-border h-max-[72px] flex flex-row gap-3 bg-gray-500 rounded p-4 justify-center items-center">
      <Checkbox
        id={htmlId}
        checked={task.isCompleted}
        onChange={handleTaskChecked}
      />
      <label
        htmlFor={htmlId}
        className={`text-sm max-w-[86%] box-border break-words flex-1 ${
          isChecked && "line-through text-gray-300"
        }`}
      >
        {task.description}
      </label>
      <DeleteButton onClick={() => onDeleteTask(task.id)} />
    </div>
  );
}
