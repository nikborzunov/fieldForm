import React from "react"
import {connect} from "react-redux";
import {
    addOptionsAC

} from "../../Redux/profileReducer";
import SelectForm from "./selectForm";

class SelectFormContainer extends React.Component {

    componentDidMount() {
    }


    addOptions = (options) => {
        this.props.addOptionsAC(options);
    }
    render() {
        return (<SelectForm options={this.props.options}
                            addOptions={this.addOptions}
        />)
    }
}


const mapStateToProps = (state) => {
    return {
        options: state.profilePage.options,
    }
}

export default connect(mapStateToProps, {
    addOptionsAC,

})(SelectFormContainer);