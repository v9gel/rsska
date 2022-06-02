import { types, flow } from 'mobx-state-tree';

async function fetchUserFromApi(token: string) {
  const response = await fetch('https://rsska.user-penguin.space/me', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      accept: 'application/json',
      authorization: `Basic ${token}`,
    },
  });
  const json = await response.json();

  return json.login;
}

export const User = types
  .model('User', {
    login: types.optional(types.string, '', [undefined]),
    token: types.optional(types.string, '', [undefined]),
  })
  .actions((self) => ({
    fetchUser: flow(function* fetchUser() {
      try {
        self.login = yield fetchUserFromApi(self.token);
      } catch (error) {
        console.error('Неудалось получить пользователя', error);
      }
    }),
    afterCreate() {
      const tokenFromLocalStorage = localStorage.getItem('token');

      if (tokenFromLocalStorage) {
        self.token = tokenFromLocalStorage;
        this.fetchUser();
      }
    },
  }));
