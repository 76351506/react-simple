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