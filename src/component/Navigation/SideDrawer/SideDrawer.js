import React from 'react';
import Logo  from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { SideDrawer } from './style';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <SideDrawer className={props.open? 'open' : 'close'} onClick={props.closed}>
                <Logo height='11%'/>
                <nav>
                    <NavigationItems isAuthenticate={props.isAuth}/>
                </nav>
            </SideDrawer>
        </div> 
    );
}

export default sideDrawer;