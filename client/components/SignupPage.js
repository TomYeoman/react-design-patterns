import React from 'react'
import SignupForm from './SignupForm'
import Header from './Header'

class SignupPage extends React.Component {
  render() {
    return (
      <div>
        <SignupForm/>
        <Header/>
      </div>
    )
  }
};

export default SignupPage;
