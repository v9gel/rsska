import { observer } from 'mobx-react-lite';
import { useStore } from '../../src/store';

export const Home = observer(() => {
  const { user } = useStore();

  return (
    <>
      <h1>Главная</h1>
      <div>
        логин:
        {' '}
        {user.login}
      </div>
    </>
  );
});
