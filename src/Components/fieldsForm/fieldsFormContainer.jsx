import React from "react"
import {connect} from "react-redux";
import {addInputValidationErrorAC, addPostActionCreator} from "../../Redux/profileReducer";
import FieldsForm from "./fieldsForm";

class FieldsFormContainer extends React.Component {

    componentDidMount() {
    }

    // postText = (text) => {
    //     this.props.addPostActionCreator(text);
    // }
    //
    // postInputValidationError = (errors) => {
    //     this.props.addInputValidationErrorAC(errors);
    // }

    render() {
        return <FieldsForm posts={this.props.posts}
                           errors={this.props.errors}
                           postText={this.postText}
                           postInputValidationError={this.postInputValidationError}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        errors: state.profilePage.errors,

    }
}

export default connect(mapStateToProps, {
    addPostActionCreator,
    addInputValidationErrorAC,
})(FieldsFormContainer);



