import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class TodoList extends PureComponent {

    render() {
        const { todolist , store} = this.props;
       return  <ul>
           <li>
               todos:
           </li>
            {
                todolist.toJS().map((item,index)=>{
                    return <li key={index} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <input type="checkbox" 
                        checked={store.todo.selectedRowKeys.indexOf(item.key)>-1}
                        onChange={()=>store.todo.onSelectChange(item.key)}/>
                        <p>{item.todo}</p>
                        <button onClick={()=>store.todo.remove(item.key)}>删除</button>
                    </li>
                })
            }
        </ul>
    }
}
export default TodoList