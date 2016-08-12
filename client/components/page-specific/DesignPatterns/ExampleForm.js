import React from 'react'
import timezone from '../../data/timezones'
import map from 'lodash/map'

class ExampleForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            timezone: "",
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
        // Code to make AJAX reuqest to server
        console.log(this.state);
    }

    render() {
        let options = map(timezone, (val, key) =>
            <option key={val} value={val}>{key}</option>
        )


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
                <div className="form-group">

                    <label className="control-label">Username</label>
                    <input
                        value = {this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />

                    <label className="control-label">Password</label>
                    <input
                        value = {this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />

                <label className="control-label">Email</label>
                    <input
                        value = {this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />

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

export default ExampleForm;
