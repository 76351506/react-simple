import React from "react";
import Header from "comp/header";
import Layout from "comp/layout";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import RouterView from "router";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { classroom } = this.props;
        return <div className="wraper">
            <Header></Header>
            <Layout>
                this is enter page
                <h1> welecome to  {classroom}</h1>
                <Router>
                    <RouterView/>
                </Router>
            </Layout>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.HomeReducer
}
export default connect(mapStateToProps)(App);