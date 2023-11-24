import { Task } from '../Task';
import styles from './tasks.module.css';

export function Tasks({ tasks, onDelete, onComplete }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Cantidad de Tareas:</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Tareas Completadas:</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </div>
    </section>
  )
}