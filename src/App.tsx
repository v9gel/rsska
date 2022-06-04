import { Box, Grommet } from 'grommet';
import { observer } from 'mobx-react-lite';
import { theme } from './consts/theme';
import { Singin } from './pages/Singin';

function App() {
  return (
    <Grommet theme={theme} full>
      <Box pad="small" gap="small" align="center" justify="center" fill="vertical" flex="grow">
        <Singin />
      </Box>
    </Grommet>
  );
}

export default observer(App);
