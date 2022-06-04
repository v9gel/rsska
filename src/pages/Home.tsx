import { observer } from 'mobx-react-lite';
import { Sidebar } from '../components/Sidebar';
import { useStore } from '../../src/store';

export const Home = observer(() => (
  <Sidebar />
));
