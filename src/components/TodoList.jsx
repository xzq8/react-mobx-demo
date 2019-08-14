import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

@inject('store')
@observer
class TodoList extends PureComponent {

    render() {
        const { todolist , store} = this.props;
       return  <ul>
           <ReactCSSTransitionGroup
          transitionName="shop"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={300}>
           <li key={-1}>
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
            </ReactCSSTransitionGroup>
        </ul>
    }
}
export default TodoList