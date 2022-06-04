import { types, Instance } from 'mobx-state-tree';
import { connectReduxDevtools } from 'mst-middlewares';
import { useContext, createContext } from 'react';
import * as remotedev from 'remotedev';
import { Counter } from './Counter';
import { User } from './User';

export const RootStore = types
  .model('Store', {
    user: User,
    counter: Counter,
  })
  .actions((self) => ({
    afterCreate() {
      console.log('Хранилище создано');
    },
  }));

export type IRootStore = Instance<typeof RootStore>

export const store: IRootStore = RootStore.create({
  user: {
    login: null,
  },
  counter: {
    count: 0,
  },
});

connectReduxDevtools(remotedev, store);

const StoreContext = createContext<IRootStore>(store as IRootStore);
export const useStore = () => useContext(StoreContext);
