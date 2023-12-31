import styles from './TaskForm.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function TaskForm({ handleAddTask}) {
  const [title, setTitle] = useState('');


  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <h1>Lista de Tareas</h1>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Agregar Tarea" type="text" onChange={onChangeTitle} value={title} />
        <button>Nueva Tarea <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  )
}