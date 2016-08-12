import React from 'react'
import ExampleForm from './ExampleForm'
import {connect} from 'react-redux';
import {userSignupRequest} from '../../../actions/signupActions'


class Forms extends React.Component {
    render() {
        const {userSignupRequest} = this.props;
        return (
            <div>
                <ExampleForm userSignupRequest={userSignupRequest}/>
            </div>
        )
    }
};

Forms.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

// Use a connect high order function
//  Connect takes 2 params
//  - mapStateToProps provides some piece of data from redux store
//  - Takes state and returns an object

export default connect((state) => { return {} }, {userSignupRequest})(Forms);
