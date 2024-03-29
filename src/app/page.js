"use client"
import { TaskCard } from "@/components/TaskCard";
import { useTasks } from "@/context/TaskContext";

const Page = () => {

  const {tasks} = useTasks();
  console.log(tasks)
  
  return (
    <div>
      {tasks.map(task => (
        <TaskCard task={task} key={task.id}/>
      ))}

    </div>
  )

}

export default Page;