import React from 'react';
import "../style2.css"

function BookCard({ book }) {
    return (
        <div className="book-card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            <button>View more</button>
        </div>
    );
}

export default BookCard;
    