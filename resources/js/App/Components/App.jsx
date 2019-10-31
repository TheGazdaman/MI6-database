import React from 'react';
import PeopleList from './PeopleList.jsx';
import LoginForm from './LoginForm.jsx';

 
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logged_in: null,
            token: null
        };
    }

    onLoginSuccess = (token) => {
 
        window.localStorage.setItem('_token', token)
     
        this.setState({
            logged_in: true,
            token: token
        })
    }


    render() {

        let content;
        console.log(this.state.logged_in);
        

        if (this.state.logged_in === null)
        {
            content = (
                <div className="message">
                    <div className="loader"><div></div><div></div><div></div><div></div></div>
                    Loading
                </div>
            )
        }
        else if (this.state.logged_in === true)
        {
            content = (
                <PeopleList />
            )
        }
        else {

            content = (

                <>
                    <h1>Login form</h1>
                    <LoginForm 
                        success = {this.props.onLoginSuccess}
                    
                    />


                </>
            )

        }

        return (

            <>
                { content }
            </>
 
        )
    }
}