import React from 'react';
import './QuoteCard.css';

function DisplaySimpson({ simpsons }) {
    return (
    <figure className="QuoteCard">
        <img src={simpsons.image} alt={simpsons.character} />
        <figcaption>
            <blockquote>{simpsons.quote}</blockquote>
            <p>
                <cite>{simpsons.character}</cite>
            </p>
        </figcaption>
    </figure>
    );
};

export default DisplaySimpson;