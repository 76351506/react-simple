import React from "react";
import Header from "comp/header";
import Layout from "comp/layout";

import "common/css/bootstrap.min.css";
import "common/css/reset.css";
import "common/css/common.css";
import "common/css/style.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return <div className="wraper">
            <Header></Header>
            <Layout>
                this is enter page
            </Layout>
        </div>
    }
}
export default App;