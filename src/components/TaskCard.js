import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";

export const TaskCard = ({ task }) => {

    const router = useRouter();

    const { deleteTask } = useTasks();

  return (
    <div
        className="taskCard"
        onClick={() => {router.push(`/edit/${task.id}`)}}
    >
        <h1>{task.title}</h1>
        <button
          onClick={(e) => {
            e.stopPropagation();
            const accept = confirm("Are you sure you want to delete this task?");
            if (accept)
              deleteTask(task.id)}
          }
        >
            Delete
        </button>
        <p>{task.description}</p>
    </div>
  )
}
