import { useStore } from '../store';
import { GoTrashcan } from 'react-icons/go';

type Props = {
  title: string;
  id: string;
};

enum BG_CLASS {
  PLANNED = 'bg-gray-400',
  ONGOING = 'bg-blue-400',
  DONE = 'bg-green-400',
}

const Todo = ({ title, id }: Props) => {
  const todo = useStore((state) =>
    state.todos.find((todo) => todo.title === title)
  );

  const deleteTodo = useStore((state) => state.deleteTodo);

  return (
    <div className='bg-white text-gray-800 p-2 rounded-md mt-2 text-left capitalize'>
      {title}
      <div className='flex mt-5 justify-between'>
        <div>
          <button onClick={deleteTodo.bind(null, id)}>
            <GoTrashcan size={'1.5rem'} />
          </button>
        </div>
        <div className={`bg-gray-400 px-1 rounded-md ${todo?.status}`}>
          {todo?.status}
        </div>
      </div>
    </div>
  );
};
export default Todo;
