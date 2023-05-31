import React from "react"
import {connect} from "react-redux";
import {addInputValidationErrorAC, addPostActionCreator} from "../Redux/profileReducer";
import ContentComponent from "./contentComponent";

class ContainerComponent extends React.Component {

    componentDidMount() {
    }

    postText = (text) => {
        this.props.addPostActionCreator(text);
    }

    postInputValidationError = (errors) => {
        this.props.addInputValidationErrorAC(errors);
    }

    render() {
        return <ContentComponent posts={this.props.posts}
                                 options={this.props.options}
                                 error={this.props.error}
                                 postText={this.postText}
                                 postInputValidationError={this.postInputValidationError}
        />
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        error: state.profilePage.errors,
        options: state.profilePage.options,

    }
}

export default connect(mapStateToProps, {
    addPostActionCreator,
    addInputValidationErrorAC,
})(ContainerComponent);



