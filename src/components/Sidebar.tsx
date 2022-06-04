import { observer } from 'mobx-react-lite';
import {
  Box, Text, Button, DropButton,
} from 'grommet';
import {
  Article, FormDown, Logout, User,
} from 'grommet-icons';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../src/store';

export const Sidebar = observer(() => {
  const { user } = useStore();
  const navigate = useNavigate();

  return (

    <Box align="start" justify="center" fill="vertical" pad={{ right: 'xlarge', left: 'medium', vertical: 'medium' }} gap="small" background="light-2">
      <Box align="center" justify="center" direction="row" gap="small">
        <Box align="center" justify="center" background={{ image: 'url(/src/logo.png)', position: 'top' }} round={{ corner: 'bottom' }} pad="small" width="xxsmall" height="xxsmall" />
        <Button onClick={() => navigate('/')}>
          RSSka
        </Button>
      </Box>
      <Box align="start" justify="start" flex gap="medium" pad={{ vertical: 'small' }}>
        <Button label="Лента" icon={<Article />} plain margin={{ bottom: 'small' }} />
      </Box>
      <Box align="center" justify="center" direction="row" gap="small">
        <Box align="center" justify="center" background={{ color: 'brand' }} round="full" pad="small" width="xxsmall" height="xxsmall">
          <Text textAlign="center">
            {user.login && user.login[0].toUpperCase()}
          </Text>
        </Box>

        <DropButton dropContent={(
          <Box background="light-2">
            <Button icon={<User />} label="Профиль" />
            <Button icon={<Logout />} label="Выйти" onClick={() => user.signOut()} />
          </Box>
        )}
        >
          <Box direction="row" gap="medium" align="center" pad="small">
            <Text>{user.login}</Text>
            <FormDown color="brand" />
          </Box>
        </DropButton>
      </Box>
    </Box>
  );
});
