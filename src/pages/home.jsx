import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('HomeStore')
@observer
export default class TodoList extends Component{
    componentDidMount(){
 
    }
    render(){
        const { HomeStore } = this.props;
        debugger
        return(
            <div>
                <p style={{marginTop:'15px'}}>{`Total ${store.total} items`}</p>
            </div>
        )
    }
}