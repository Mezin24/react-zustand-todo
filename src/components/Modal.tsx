import { createPortal } from 'react-dom';
import { useState } from 'react';
import { TODO_STATUS, useStore } from '../store';

type Props = {
  state: TODO_STATUS;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ state, setShowModal }: Props) => {
  const [text, setText] = useState<string>('');
  const addTodo = useStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === '') return;
    console.log(state);
    addTodo(text, state);
    setText('');
    setShowModal(false);
  };

  return createPortal(
    <>
      <div
        onClick={() => setShowModal(false)}
        className='absolute top-0 left-0 w-full h-full bg-slate-900 opacity-30'
      ></div>
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 bg-white p-5 rounded-md text-gray-800'>
        <form
          className='flex flex-col gap-3 w-72  justify-between'
          onSubmit={handleSubmit}
        >
          <label className='font-bold text-2xl capitalize text-center'>
            Add new Todo
          </label>
          <input
            type='text'
            className='border border-solid border-slate-700  p-2 rounded-md text-slate-700'
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          />
          <button
            type='submit'
            className='bg-slate-700 text-white p-2 uppercase rounded-md hover:bg-slate-800'
          >
            submit
          </button>
        </form>
      </div>
    </>,
    document.getElementById('modal') as HTMLElement
  );
};
export default Modal;
