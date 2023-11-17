import { Fragment } from "react";
import React from 'react';
import mealsImage from '../../assest/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "../Layout/HeaderCartButton";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicous food!"></img>
        </div>
    </Fragment>
}

export default Header;