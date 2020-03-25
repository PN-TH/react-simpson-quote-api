import React from 'react';
import './QuoteCard.css';
import axios from 'axios';
import DisplaySimpson from './DisplaySimpson';

class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        simpsons: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
      // Send the request
        axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        // Extract the DATA from the received response
            .then(response => response.data)
        // Use this data to update the state
            .then(data => {
            this.setState({
                simpsons: data[0],
            });
        });
    }


    render(){
    return (
        <div>
            {
                this.state.simpsons ? <DisplaySimpson simpsons={this.state.simpsons} /> : <p>No data yet</p>
            }
            <button type="button" onClick={this.componentDidMount}>Get a simpson</button>
        </div>
    );
}
}
export default QuoteCard;