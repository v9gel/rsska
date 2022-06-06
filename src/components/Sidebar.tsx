import { observer } from 'mobx-react-lite';
import {
  Box, Text, Button, Menu,
} from 'grommet';
import {
  Add,
  Article,
} from 'grommet-icons';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../src/store';

export const Sidebar = observer(() => {
  const { user } = useStore();
  const navigate = useNavigate();

  return (

    <Box align="start" justify="center" fill="vertical" pad={{ right: 'xlarge', left: 'medium', vertical: 'medium' }} gap="small" background="light-2">
      <Box align="center" justify="center" direction="row" gap="small">
        <Box align="center" justify="center" background={{ image: 'url(https://github.com/v9gel/rsska/blob/master/src/logo.png?raw=true)', position: 'top' }} round={{ corner: 'bottom' }} pad="small" width="xxsmall" height="xxsmall" />
        <Button onClick={() => navigate('/')}>
          RSSka
        </Button>
      </Box>
      <Box align="start" justify="start" flex gap="medium" pad={{ vertical: 'small' }}>
        <Button label="Добавить канал" icon={<Add />} plain margin={{ bottom: 'small' }} />
        <Button label="Лента" icon={<Article />} plain margin={{ bottom: 'small' }} />
      </Box>
      <Box align="center" justify="center" direction="row" gap="small">
        <Box align="center" justify="center" background={{ color: 'brand' }} round="full" pad="small" width="xxsmall" height="xxsmall">
          <Text textAlign="center">
            {user.login && user.login[0].toUpperCase()}
          </Text>
        </Box>

        <Menu
          label={user.login}
          items={[
            { label: 'Профиль', onClick: () => {} },
            { label: 'Выйти', onClick: () => user.signOut() },
          ]}
        />
      </Box>
    </Box>
  );
});
