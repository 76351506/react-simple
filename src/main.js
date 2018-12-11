import React from "react";
import ReactDOM from "react-dom";
import App from "view/app";
import store from "./store";
import { Provider } from "react-redux";

import "common/css/bootstrap.min.css";
import "common/css/reset.css";
import "common/css/common.css";
import "common/css/style.css";

ReactDOM.render(
    <Provider store={store}>
    	<App/>
    </Provider>,
    document.getElementById('root')
);


// const render = () => {
//     return ReactDOM.render(
//         <App/>,
//         document.getElementById('root')
//     );
// }
// render();
// // store.subscribe 的返回值是一个函数，可以用来取消当前视图的监听
// const unsubscribe = store.subscribe(render);
// unsubscribe();