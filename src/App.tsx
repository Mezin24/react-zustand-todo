import Column from './components/Column';

import { TODO_STATUS } from './store';
const App = () => {
  return (
    <div className=' flex gap-2 min-h-64 max-w-3xl mx-auto'>
      <Column state={TODO_STATUS.PLANNED} />
      <Column state={TODO_STATUS.ONGOING} />
      <Column state={TODO_STATUS.DONE} />
    </div>
  );
};
export default App;
