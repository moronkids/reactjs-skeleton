import React ,{Component} from 'react';
import dor from '../hoc/Aux';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder'
import Toolbar from '../c_burger/Navigation/Toolbar/Toolbar'
import SideDrawer from '../c_burger/Navigation/SideDrawer/SideDrawer'
import Checkout from '../containers/Checkout/Checkout'
import { withRouter } from 'react-router-dom';
class Layout extends Component  {
    // console.log(this.props.childern)
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    render() {
        return(
            <>
                {/* <Toolbar /> */}
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} style={{paddingTop: '90px'}}/>
                <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}/>
                <main style={{paddingTop: '60px'}}>
                    
                    {this.props.children}
                    {/* <BurgerBuilder /> */}
                </main>
            </>
        );
    }
};

export default Layout;