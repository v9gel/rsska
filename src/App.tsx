import { Grommet } from 'grommet';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { theme } from './config/theme';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { Guard } from './containers/Guard';

function App() {
  return (
    <Grommet theme={theme} full>
      <BrowserRouter>
        <Guard>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<Auth isSignIn={false} />} />
            <Route path="signin" element={<Auth isSignIn />} />
          </Routes>
        </Guard>
      </BrowserRouter>
    </Grommet>
  );
}

export default observer(App);
