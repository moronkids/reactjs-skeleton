import React ,{Component} from 'react';
import dor from '../hoc/Aux';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder'
import Toolbar from '../c_burger/Navigation/Toolbar/Toolbar'
import SideDrawer from '../c_burger/Navigation/SideDrawer/SideDrawer'

class Layout extends Component  {
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
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}/>
                <main>
                    {this.props.childern}
                    <BurgerBuilder />
                </main>
            </>
        );
    }
};

export default Layout;