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
        this.getSimpson = this.getSimpson.bind(this);
    }

    getSimpson() {
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
            <DisplaySimpson simpsons={this.state.simpsons} />
            <button type="button" onClick={this.getSimpson}>Get a simpson</button>
        </div>
    );
}
}
export default QuoteCard;