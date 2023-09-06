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
            const accept = confirm("¿Estás seguro de que quieres eliminar esta tarea?");
            if (accept) {
              deleteTask(task.id);
              toast.success('¡Tarea eliminada exitósamente!', {icon: ('🗑️')});
            }
          }}
          >
            <Image className={styles.image} src={'/images/delete.svg'} alt="Delete Icon" width={40} height={38} />
        </button>
        <button
          className={styles.taskCard__buttons__edit}
          onClick={() => {router.push(`/edit/${task.id}`)}}
        >
          <Image className={styles.image} src={'/images/edit.svg'} alt="Edit Icon" width={40} height={40} />
        </button>
      </div>
    </div>
  )
}
