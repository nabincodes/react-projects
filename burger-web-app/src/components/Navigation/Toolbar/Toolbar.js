import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuToggle from '../SideDrawer/MenuToggle/MenuToggle';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <MenuToggle clicked={props.menuToggleClicked}/>
           <div className={classes.Logo}>
           <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default toolbar;