import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import styles from './TaskCard.module.css';
import Image from "next/image";

export const TaskCard = ({ task }) => {

    const router = useRouter();

    const { deleteTask } = useTasks();

  return (
    <div
        className={styles.taskCard}
        onClick={() => {router.push(`/edit/${task.id}`)}}
    >
      <div className={styles.taskCard__info}>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className={styles.taskCard__buttons}>
        <button
          className={styles.taskCard__buttons__delete}
          onClick={(e) => {
            e.stopPropagation();
            const accept = confirm("Are you sure you want to delete this task?");
            if (accept) {
              deleteTask(task.id)}
              toast.success('Task deleted successfully');
            }
          }
          >
            <Image className={styles.image} src={'/images/delete.svg'} alt="Delete Icon" width={30} height={30}/>
        </button>
        <button
          className={styles.taskCard__buttons__edit}
        >
          <Image className={styles.image} src={'/images/edit.svg'} alt="Edit Icon" width={30} height={30}/>
        </button>
      </div>
    </div>
  )
}
