import React from 'react'
import timezone from '../../data/timezones'
import map from 'lodash/map'
import { connect } from 'react-redux'
import classnames from 'classnames'

class ExampleForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            passwordConfirmation: "",
            email: "",
            timezone: "",
            errors: {}
        }

        // In order to give context of the class not the event in the onchange event, bind "this" to component
        // We could also do as part of the input  --- onChange={this.onChange.bind(this)}  ---
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState( { [e.target.name]: e.target.value })
    }

    onSubmit(e){

        e.preventDefault();

        this.setState ({errors: {} }) // Reset state each time we submit

        // Make AJAX reuqest to server
        this.props.userSignupRequest(this.state).then(
            () => {}, // If it goes well do nothing
            ({data}) => this.setState({errors:data}) // Otherwise set our state
        );

    }

    render() {
        let options = map(timezone, (val, key) =>
            <option key={val} value={val}>{key}</option>
        )
        const {errors} = this.state;
        console.log("ERROOOROS" + errors);
        //    for (var prop in timezone) {
        //         if (!timezone.hasOwnProperty(prop)) {
        //             continue;
        //         }
        //         console.log("ITEM: " +prop);
        //         console.log("KEY: " +timezone[prop]);
        //     }

        return (

            <form onSubmit = {this.onSubmit}>
                <h1> Join our community </h1>

                <div className={ classnames("form-group", { 'has-error' : errors.username })}>
                    <label className="control-label">Username</label>
                    <input
                        value = {this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                {errors.username && <span className="help-block">{errors.username}</span>}
                </div>

                <div className={ classnames("form-group", { 'has-error' : errors.password })}>
                    <label className="control-label">Password</label>
                    <input
                        value = {this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                {errors.password && <span className="help-block">{errors.password}</span>}
                </div>

                <div className={ classnames("form-group", { 'has-error' : errors.passwordConfirmation })}>
                    <label className="control-label">Password Confirmation</label>
                        <input
                            value = {this.state.passwordConfirmation}
                            onChange={this.onChange}
                            type="password"
                            name="passwordConfirmation"
                            className="form-control"
                        />
                    {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
                </div>

                <div className={ classnames("form-group", { 'has-error' : errors.email })}>
                    <label className="control-label">Email</label>
                    <input
                        value = {this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                </div>

                <div className={ classnames("form-group", { 'has-error' : errors.timezone })}>
                    <label className="control-label">Timezone</label>
                        <select
                            value = {this.state.timezone}
                            onChange={this.onChange}
                            type="text"
                            name="timezone"
                            className="form-control"
                        >
                        <option> Initial Option </option>
                        {options}
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg"> Sign Up </button>
                </div>

            </form>
        )
    }
};

ExampleForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

// Use a connect high order function
// Connect takes 2 params, The 1st = mapStateToProps (Some piece of data from redux store), Then it takes state
export default ExampleForm;
