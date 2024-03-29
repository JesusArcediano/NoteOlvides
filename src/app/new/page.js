'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import styles from './new.module.css';


const Page = ({params}) => {

  const {tasks, createTask, updateTask} = useTasks();

  const router = useRouter();
  const { register, handleSubmit, setValue, formState:{errors} } = useForm();


  const onSubmit = handleSubmit( (data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success('¡Tarea actualizada exitósamente!');
    } else {
      createTask(data.title, data.description);
      toast.success('¡Nueva tarea creada exitósamente!');
    }
    router.push('/');
  })

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue('title', taskFound.title);
        setValue('description', taskFound.description);
      }
      }
  }, [])
  
  
  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
    >
      <div className={styles.field}>
        <input
          className={styles.input}
          type="text"
          placeholder="Escribe aquí el título"
          { ...register("title", {required: true}) }
          />
        {errors.title && <span className={styles.input_span}>Este campo es requerido.</span>}
      </div>

      <div className={styles.field}>
        <textarea
          className={styles.textarea}
          placeholder="Escribe aquí la descripción"
          { ...register("description", {required: true})}
          />
        {errors.description && <span className={styles.textarea_span}>Este campo es requerido.</span>}
        {<span className={styles.span}></span>}
      </div>

      <button
        className={styles.button}
      >
        Guardar
      </button>
    </form>
  )
}

export default Page;