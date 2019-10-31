import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null
        };

        this.url = '/api/person';

        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleEmailChange (event){

        this.setState({email: event.target.value});

    }

    handlePasswordChange (event){
        
        this.setState({password: event.target.value})
    }

    handleFormSubmit (event){

        event.preventDefault();

        fetch(this.url, {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })

    }
    render () {
        return (
            <div>

                <form onSubmit={this.handleFormSubmit} method="post">
                    <input type="email" name="email" id="email" placeholder="vcelkamaja@vcelin.cz" value={this.state.email} onChange={this.handleEmailChange}/>
                    <br/>
                    <input type="password" name="password" id="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <br/>
                    <button type="submit">Submit</button>

                </form>

            </div>
        )

        

    }

}