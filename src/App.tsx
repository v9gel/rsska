import { observer } from 'mobx-react-lite';
import { useStore } from './store/index';

function App() {
  const { counter, user } = useStore();

  return (
    <div>
      { `${counter.count} `}
      <button onClick={() => counter.add()}>+1</button>
      {` ${user.token} - ${user.login}`}
    </div>
  );
}

export default observer(App);
