import React from "react";
import Routes from "./routes";
import RouterMap from "./map";

class RouterView extends React.Component {
    render() {
        const routes = this.props.routes ? this.props.routes : Routes;
        return <RouterMap routes={routes}/>
    }
}
export default RouterView;