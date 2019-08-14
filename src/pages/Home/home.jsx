import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
@inject('store')
@observer class Home extends Component {
    componentDidMount() {

    }
    render() {
        const { store } = this.props;
        return (
            <div>
                <p style={{ marginTop: '15px' }}>{`Total ${store.home.text} items`}</p>
            </div>
        )
    }
}

export default Home