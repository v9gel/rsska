import { types } from 'mobx-state-tree';

export const Counter = types
  .model('Todo', {
    count: types.integer,
  })
  .actions((self) => ({
    add() {
      self.count += 1;
    },
  }));
