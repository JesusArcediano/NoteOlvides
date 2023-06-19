'use client'
import { TaskProvider } from '@/context/TaskContext'
import styles from '@/app/layout.module.css'
import { Navbar } from '@/components/Navbar'
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <TaskProvider>
          <Navbar />
          {children}
          <Toaster />
        </TaskProvider>
      </body>
    </html>
  )
}
