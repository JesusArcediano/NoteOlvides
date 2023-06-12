import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from './Navbar.module.css';
import { useTasks } from "@/context/TaskContext";

export const Navbar = () => {

    const router = useRouter();
    const { tasks } = useTasks();

  return (
    <header className={styles.header}>
        <Link href="/">
            <h1>Task App</h1>
            <h3>{tasks.length} tasks</h3>
        </Link>
        {/* <div> */}
            <button
                onClick={() => {router.push('/new')}}
                className={styles.button_addTask}
            >
                Add Task
            </button>
        {/* </div> */}
    </header>
  )
}
