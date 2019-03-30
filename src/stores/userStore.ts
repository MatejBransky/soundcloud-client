import { observable } from 'mobx';

class UserStore {
  @observable me = null;
}

const userStore = new UserStore();

export default userStore;
export { UserStore };
