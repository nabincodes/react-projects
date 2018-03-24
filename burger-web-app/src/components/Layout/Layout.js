import React from 'react';

import classes from './Layout.css';
import Aux from '../../hoc/Auxi';

const layout = (props) =>(
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop </div>

        <main className={classes.content}>
            {props.children}
        </main>

    </Aux>
);

export default layout;

