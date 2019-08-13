import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')

@observer

class Home extends Component{
    componentDidMount(){
 
    }
    render(){
        const { store } = this.props;
        debugger
        return(
            <div>
                <p style={{marginTop:'15px'}}>{`Total ${store.details.title} items`}</p>
            </div>
        )
    }
}

export default Home