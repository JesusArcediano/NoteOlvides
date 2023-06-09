"use client"
import { createContext, useContext, useEffect, useState } from "react";
import {v4 as uuid} from 'uuid';

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTasks must be used within a provider");
    return context;
}

export const TaskProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem('tasks');
        return localData ? setTasks(JSON.parse(localData)) : [];
    }, [])
    
    
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])
    

    const createTask = (title, description) => {
        setTasks([...tasks, {title, description, id: uuid()}])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const updateTask = (id, newData) => {
        setTasks(tasks.map(task => task.id === id
            ? { ...task, ...newData }
            : task
        ))
    }

    return (
        <TaskContext.Provider value={{tasks, createTask, deleteTask, updateTask}}>
            {children}
        </TaskContext.Provider>
    )
}