import React from "react";
// import store from "store";
import { connect } from "react-redux";

class Index extends React.Component {
    render() {
        // const { favorite } = store.getState();
        const { favorite, changeFavorite } = this.props.IndexReducer;
        const { classroom } = this.props.HomeReducer;

        return <div>
            this is Index
            <h1>my classroom is {classroom}</h1>
            my favorite fruit is:{favorite}
            <button onClick={changeFavorite}>
                我现在喜欢吃香蕉了
            </button>
        </div>
    }
}
// connect 第一个参数 将redux 仓库的数据绑定到 props
// connect 第二个参数 将一些执行action的方法绑定到 props

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeFavorite() {
            dispatch({
                type: "EAT",
                payload: "banana"
            })

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);