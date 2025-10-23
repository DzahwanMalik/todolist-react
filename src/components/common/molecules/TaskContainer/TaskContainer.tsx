import AddButton from "../../atoms/AddButton/AddButton";
import AddInputField from "../../atoms/AddInputField/AddInputField";
import AddPriority from "../../atoms/AddPriority/AddPriority";

import { useRef, useState } from "react";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import RemoveButton from "../../atoms/RemoveButton/RemoveButton";

type Task = {
  id: number;
  title: string;
  priority: string;
  isDone: boolean;
};

const TaskContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);

  function handleAddTask(task: Task) {
    setTasks([...tasks, task]);
    inputRef.current!.value = "";
    console.log(tasks);
  }

  function handleToogleTaskIsDone(taskId: number) {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }
      return task;
    }))

    console.log(tasks);
  }

  const priorityRank: { [key: string]: number } = {
    Low: 1,
    Medium: 2,
    High: 3,
  };

  const sortedTasks = [...tasks].sort(
    (a, b) => priorityRank[b.priority] - priorityRank[a.priority]
  );

  return (
    <div className="w-full p-5 shadow-xl rounded-xl flex flex-col gap-5">
      <div className="flex gap-5 w-full">
        <AddInputField ref={inputRef} />
        <AddButton
          handleClick={() =>
            handleAddTask({
              id: tasks.length + 1,
              title: inputRef.current?.value as string,
              priority: priorityRef.current?.value as string,
              isDone: false,
            })
          }
        />
      </div>
      <div className="p-3 bg-gray-100 rounded-md">
        <AddPriority ref={priorityRef} />
      </div>
      <div>
        <ul className="flex flex-col gap-5">
          {sortedTasks.map((task) => (
            <li
              key={task.id}
              className="p-3 outline-1 outline-gray-100 rounded-md flex gap-5 justify-between items-center"
            >
              <div className="flex gap-5">
                <Checkbox
                  onChange={() => handleToogleTaskIsDone(task.id)}
                />
                <p className={`${task.isDone ? "line-through" : ""}`}>
                  {task.title}
                </p>
              </div>
              <div
                className={`py-1 px-3 rounded-sm font-semibold ${
                  task.priority === "Low"
                    ? "bg-green-100 text-green-600"
                    : task.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {task.priority}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <RemoveButton hadleClick={() => setTasks([])} />
    </div>
  );
};

export default TaskContainer;
