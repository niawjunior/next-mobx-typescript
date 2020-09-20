import { observable, action } from "mobx";

type SerializedStore = {
  title: string;
};

export class UserStore {
  @observable title!: string;

  hydrate(serializedStore: SerializedStore) {
    this.title = serializedStore?.title;
  }

  @action changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}

export async function fetchInitialStoreState() {
  return {};
}