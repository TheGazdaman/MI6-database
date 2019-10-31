import React from 'react';
import '../../../../public/css/app.css';
 
export default class PeopleList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loaded: false,
            data: []
        };

        this.url = '/api/person';
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.url) {
            this.setState({ 
                loading: true,
                loaded: false,
                data: []
            })

            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    this.setState({ 
                        loaded: true,
                        data: data
                    })
                })
                .finally(this.setState({
                    loading: false
                }));
        }
    }


    render() {

        console.log(this.state.data);
        

        let content = (
            <div className="message">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
        if (!this.state.loading && this.state.loaded) {
            content = (
                <>
                    <div>{
                        this.state.data.map( 
                            (person) => (



                                <div className="agent">
                                    <span><h3>Name: {person.name} </h3></span>
                                    <span>Nationality: {person.nationality} </span>
                                    <span>Occupation: {person.occupation} </span>
                                    <span>Status text: {person.status_text} </span>
                                </div>

                            )
                            
                        )
                        }</div>
                </>
            )
        }
        
        return (
            <section>

                <h2>List of agents: </h2>

                { content }

            </section>
        );
    }
}