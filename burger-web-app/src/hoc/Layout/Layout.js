import React, {Component} from 'react';

import classes from './Layout.css';
import Aux from '../Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }

    menuToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar menuToggleClicked={this.menuToggleHandler}/>
                <SideDrawer
                 open={this.state.showSideDrawer} 
                 closed={this.sideDrawerClosedHandler}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>

            </Aux>
        )
    }
}

export default Layout;
