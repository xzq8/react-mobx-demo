import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';


@inject('store')
@observer
class AddTodo extends PureComponent {

    render() {
        const { store } = this.props;
        return <div className="add">
            <input type="text" 
            value={store.todo.newtodo}
            onChange={(e) => store.todo.newtodo = e.target.value}/>
            
            <button onClick={store.todo.AddTodo}>添加</button>
            <button onClick={store.todo.removeSelected}>删除选中</button>
        </div>
    }
}

export default AddTodo