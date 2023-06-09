'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";


const Page = ({params}) => {

  const initialState = {
    title: '',
    description: ''
  }

  const [task, setTask] = useState(initialState);

  const {tasks, createTask, updateTask} = useTasks();

  const router = useRouter();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      updateTask(params.id, task);
    } else {
      createTask(task.title, task.description);
    }
    router.push('/');
  }

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setTask({
          title:taskFound.title,
          description:taskFound.description
        });
      }
    }
  }, [])
  
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Write a title"
        onChange={e => handleChange(e)}
        value={task.title}
      />
      <textarea
        name="description"
        placeholder="Write a description"
        onChange={e => handleChange(e)}
        value={task.description}
      />
      <button>Save</button>
    </form>
  )
}

export default Page;