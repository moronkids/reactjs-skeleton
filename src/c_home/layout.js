import React, { Fragment } from 'react';
import dor from '../hoc/Aux';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder'

const layout = (props) => (
    <>
        <div>toolbar, sidedrawer, backdrop</div>
        <main>
            {props.childern}
            <BurgerBuilder/>
        </main>
    </>
);

export default layout;