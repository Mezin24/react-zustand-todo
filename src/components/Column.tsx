import { useMemo, useState } from 'react';
import { TODO_STATUS, useStore } from '../store';
import Todo from './Todo';
import Modal from './Modal';

type Props = {
  state: TODO_STATUS;
};

const Column = ({ state }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const todos = useStore((state) => state.todos);
  const filteredTodos = useMemo(
    () => todos.filter((todo) => todo.status === state),
    [todos, state]
  );

  return (
    <>
      <div className='w-1/3 max-w-xs text-center rounded-md bg-slate-800 py-3 px-1 '>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold'>{state}</h3>
          <button
            className='bg-white text-gray-700 px-2 rounded-md'
            onClick={() => setShowModal(true)}
          >
            Add
          </button>
        </div>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} title={todo.title} id={todo.id} />
        ))}
      </div>
      {showModal && <Modal state={state} setShowModal={setShowModal} />}
    </>
  );
};
export default Column;
