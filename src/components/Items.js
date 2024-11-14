import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style2.css";  
import Header from "./Header";
import { Link } from 'react-router-dom';

export default function Items() {
    const { id } = useParams();
    console.log("ID from URL: ", id);

    const [book, setBook] = useState(null);

    useEffect(() => {
        console.log("Fetching book data...");
        fetch("/book_card.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedBook = data.find((book) => book.id === parseInt(id));
                console.log("Selected Book: ", selectedBook);
                setBook(selectedBook);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    if (!book) {
        return <div className="items-text">Loading...</div>;
    }

    return (
        <div>
            <Header/>
            <div className="item-page">
                <div className="book-info">
                    <img className="item-image" src={`/images/${book.imageUrl}`} alt={book.title} />
                    <div className="book-details">
                        <h1 className="book-title">{book.title}</h1>
                        <p className="book-author">Author: {book.author}</p>
                        <p className="book-description">{book.description}</p>
                        <div className="movie-card-genre">
                            <p>Genre: {book.genre}</p>
                        </div>
                        <div className="item-card-rating">
                            <p>{book.rating}</p>
                        </div>
                        <div className='items-filter'>
                            <select>
                                <option>Filter 1</option>
                                <option>Filter 2</option>
                            </select>
                            <select>
                                <option>Filter 1</option>
                                <option>Filter 2</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-down">
                <div className="items-price">
                    <p className="book-price">Price: ${book.price}</p>
                </div>
                <div className="items-button">
                    <button className='home-button'>Add to card</button>
                    <Link to = '/catalog'>
                        <button className='home-button'>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
