import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

class RouterMap extends React.Component {
    render() {
        const { routes } = this.props;
        const defaultRoute = <Route path="/" render={()=>{
            return <Redirect to="/home"/>
        }} key={0} exact/>;
        return <Switch>
            {
                routes.length && routes.map((item,index)=>{
                    const TempComponent = item.component;
                    if(TempComponent){
                        return <Route key={item.name} path={item.path} render={(config)=>{
                            const children = item.children===undefined?[]:item.children;
                            if(children.length){

                            }
                            return (children.length
                                ?<TempComponent routes={children} {...config}/>
                                :<TempComponent {...config}/>)
                             
                        }}/>
                    }
                    return true; 
                }).concat([defaultRoute])
            }
        </Switch>
    }
}
export default RouterMap;