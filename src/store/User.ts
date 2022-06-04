import axios from 'axios';
import {
  types, flow, cast, applySnapshot,
} from 'mobx-state-tree';
import {
  axiosInitSignIn, axiosSignIn, axiosSignOut, getToken,
} from '../../src/config/axios';

export const User = types
  .model('User', {
    login: types.maybeNull(types.string),
  })
  .views((self) => ({
    get isAuth() {
      return Boolean(self.login);
    },
  }))
  .actions((self) => ({
    fetchUserInfo: flow(function* fetchUserInfo() {
      try {
        const { login } = yield axios('/me');
        self.login = login;
      } catch (error) {
        console.error('Не удалось получить информацию о пользователе', error);
      }
    }),
    signUp: flow(function* registerUser(login: string, password: string) {
      try {
        const response = yield axios({
          method: 'post',
          url: '/register',
          data: {
            login,
            password,
          },
        });
        self.login = response.login;

        axiosSignIn(getToken(login, password));
      } catch (error) {
        console.error('Не удалось зарегистрировать пользователя', error);
      }
    }),
    signIn: flow(function* registerUser(login: string, password: string) {
      try {
        const response = yield axios({
          method: 'post',
          url: '/login',
          data: {
            login,
            password,
          },
        });
        self.login = response.login;

        axiosSignIn(getToken(login, password));
        return true;
      } catch (error) {
        console.error('Не удалось авторизоваться', error);
        return false;
      }
    }),
    signOut() {
      self.login = null;
      axiosSignOut();
    },
    afterCreate() {
      if (axiosInitSignIn()) {
        this.fetchUserInfo();
      }
    },
  }));
