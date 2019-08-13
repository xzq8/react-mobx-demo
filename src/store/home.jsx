import { observable, action, computed } from 'mobx';

export default class HomeStore {
    @observable text = "Hello world";
    @observable num = 1;

    @action add() {
        this.num += 1
    }

    @computed get sum() {
        return this.num*5
    }
}