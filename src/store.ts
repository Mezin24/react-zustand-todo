import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export enum TODO_STATUS {
  PLANNED = 'PLANNED',
  ONGOING = 'ONGOING',
  DONE = 'DONE',
}

export type Todo = {
  title: string;
  status: TODO_STATUS;
  id: string;
};

interface TodoState {
  todos: Todo[];
  addTodo(title: string, status: TODO_STATUS): void;
  deleteTodo(id: string): void;
}

export const useStore = create<TodoState>()((set) => ({
  todos: [
    { title: 'Test 1 Todo', status: TODO_STATUS.PLANNED, id: uuidv4() },
    { title: 'Test 32 Todo', status: TODO_STATUS.DONE, id: uuidv4() },
    { title: 'Test 2 Todo', status: TODO_STATUS.ONGOING, id: uuidv4() },
  ],
  addTodo: (title: string, status: TODO_STATUS) =>
    set((state) => ({
      ...state,
      todos: [...state.todos, { title, status, id: uuidv4() }],
    })),
  deleteTodo: (id: string) =>
    set((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
