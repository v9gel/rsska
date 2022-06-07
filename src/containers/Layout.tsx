import { observer } from 'mobx-react-lite';
import { Box, Sidebar } from 'grommet';
import { Route, Routes } from 'react-router-dom';
import { Sidebar as SidebarNavigation } from '../../src/components/Sidebar';
import { Home } from '../../src/pages/Home';
import { Add } from '../../src/pages/Add';

export const Layout = observer(() => (
  <Box direction="row" height={{ min: '100%' }}>
    <Sidebar
      responsive={false}
      background="light-2"
      pad={{ left: 'xxsmall', right: 'xsmall', vertical: 'medium' }}
    >
      <SidebarNavigation />
    </Sidebar>
    <Box fill="vertical" overflow="auto" align="start" flex="grow" justify="start" direction="column" pad={{ left: 'medium', right: 'medium' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Box>
  </Box>
));
