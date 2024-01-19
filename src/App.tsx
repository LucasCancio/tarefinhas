import { useContext } from "react";
import { CreateTaskForm } from "./components/CreateTaskForm";
import { Header } from "./components/Header";
import { InfoSection } from "./components/InfoSection";
import { NoTasksSection } from "./components/NoTasksSection";
import { TaskListSection } from "./components/TaskListSection";
import { TasksContext } from "./contexts/tasksContext";

function App() {
  const { tasks } = useContext(TasksContext);

  return (
    <>
      <Header />
      <main className="md:w-3/5 md:mx-auto pb-6 mx-4">
        <CreateTaskForm />
        <InfoSection />
        {tasks.length == 0 ? (
          <NoTasksSection />
        ) : (
          <TaskListSection tasks={tasks} />
        )}
      </main>
    </>
  );
}

export default App;
