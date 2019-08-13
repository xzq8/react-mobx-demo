import { observable, action, computed ,autorun} from 'mobx';

export default class TodoStore {
    @observable todos = JSON.parse(localStorage.getItem("Todo")) || []; //todos列表
    @observable newtodo = ""; //新添加的todo
    @observable selectedRowKeys = []; //选择行的key
    @observable loading = true; //Table-loading
    @observable _key = 0; //key
    @observable total = 0; //数据量


    @action fetchTodos() {
        setTimeout(() => {
            let Todo = JSON.parse(localStorage.getItem("Todo"));
            if(Todo){
                this.total = Todo.length;
                this._key = this.total === 0 ? 0 : Todo[this.total - 1].key;
                this.todos = Todo;
                this.loading = false;
            }
        }, 1000)
    }

    @action fetchTodoAdd() {
      return  new Promise((resolve,reject)=>{
            setTimeout(() => {
                this.total += 1;
                this.todos.push({
                    key: this._key,
                    todo: this.newtodo,
                });
                this.newtodo = ""
                resolve()
            }, 1000)
        })

    }

    @action fetchTodoRemove(keyArr){
        setTimeout(()=>{
            if(keyArr.length > 1) {
                this.todos = this.todos.filter(item => this.selectedRowKeys.indexOf(item.key) === -1);
                this.selectedRowKeys = [];
            }else{
                this.todos = this.todos.filter(item => item.key !== keyArr[0]);
            }
            this.total -= keyArr.length;
        })
    }

    //添加
    @action AddTodo = () => {
        if(this.addsubmitStatus || !(this.newtodo)){
            return
        }
        this._key += 1;
        this.addsubmitStatus = true
        this.fetchTodoAdd().then(()=>{
            this.addsubmitStatus = false;
        });
    };

    //checkbox选择
    @action onSelectChange = (selectedRowKeys) => {
        let index = this.selectedRowKeys.indexOf(selectedRowKeys)
        index > -1 ? this.selectedRowKeys.splice(index,1) : this.selectedRowKeys.push(selectedRowKeys);
    };

    //删除单个
    @action remove(key) {
        this.fetchTodoRemove([key]);
    }

    //删除选择
    @action removeSelected = ()=>{
        this.fetchTodoRemove(this.selectedRowKeys);
    }

    //计算长度
    @computed get TodoListCount() {
        return this.todos.length;
    }

    saveToLocal = autorun(()=>{
        localStorage.setItem("Todo", JSON.stringify(this.todos))
    })
}