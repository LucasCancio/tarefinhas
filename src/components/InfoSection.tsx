import { useContext } from "react";
import { TasksContext } from "../contexts/tasksContext";

export const InfoSection = () => {
  const { completedTasksQuantity, totalTasksQuantity } =
    useContext(TasksContext);

  return (
    <section className="flex justify-between mb-6 mt-10 text-sm font-bold">
      <div className="flex gap-2 items-center">
        <span className="text-blue">Tarefas Criadas</span>
        <span className="px-2 flex items-center justify-center bg-gray-400 rounded-full">
          {totalTasksQuantity}
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-purple">Concluídas</span>
        <span className="px-2 flex items-center justify-center bg-gray-400 rounded-full">
          {completedTasksQuantity} de {totalTasksQuantity}
        </span>
      </div>
    </section>
  );
};
