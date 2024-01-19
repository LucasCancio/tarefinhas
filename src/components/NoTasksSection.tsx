import { TasksIcon } from "./TasksIcon";

export const NoTasksSection = () => {
  return (
    <section className="py-16 text-gray-300 flex flex-col border-t-2 items-center justify-center border-gray-400 rounded-lg">
      <TasksIcon />
      <p className="font-bold mt-4">Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  );
};
