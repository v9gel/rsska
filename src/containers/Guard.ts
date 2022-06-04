import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PUBLIC_PAGES } from '../config/consts';
import { useStore } from '../store';

export const Guard = observer(({ children }: any) => {
  const { user: { isAuth } } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuth && !PUBLIC_PAGES.includes(location.pathname)) {
      navigate('/signin');
    }

    if (isAuth && PUBLIC_PAGES.includes(location.pathname)) {
      navigate('/');
    }
  }, [location.pathname, isAuth]);

  return children;
});
