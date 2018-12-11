import React from "react";
import store from "store";

import { connect } from "react-redux";
import { update } from "store/actions/home";

class Home extends React.Component {
    render() {
        const { classroom, update } = this.props;
        return <div>
            this is Home
            my classroom is :{ classroom}
            <button onClick={()=>{
                update("666")
            }}>改班级号</button>
            <button onClick={()=>{
                this.props.history.push("/index")
            }}>跳转主页</button>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.HomeReducer
}
const mapDispatchToProps = (dispatch) => {
    return {
        update(val) {
            dispatch(update(val))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);