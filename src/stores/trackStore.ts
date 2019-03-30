import { observable } from 'mobx';

class TrackStore {
  @observable tracks = [];
  @observable activeTrack = null;
}

const trackStore = new TrackStore();

export default trackStore;
export { TrackStore };
