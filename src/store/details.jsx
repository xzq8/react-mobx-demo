import { observable, action, computed } from 'mobx';

export default class DetailsStore {
    @observable title = "i am  title";
    @observable age = 28;

    @action getold() {
        this.age += 1
    }

    @computed get life() {
        return 100- this.age
    }

}