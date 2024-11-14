import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import Header from './Header_catalog';
import "../style2.css";
import { Link } from 'react-router-dom';

function Catalog() {
    const [books_cards, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [genre, setGenre] = useState("All genre");
    const [rating, setRating] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("Low to High");

    useEffect(() => {
        fetch("book_card.json")
            .then(response => response.json())
            .then(data => {
                setBooks(data);
                setFilteredBooks(data);
            });
    }, []);

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const handleClearFilters = () => {
        setSearchQuery("");
        setGenre("All genre");
        setRating("All");
    };

    const matchesGenre = (book) => {
        return genre === "All genre" || book.genre.toLowerCase() === genre.toLowerCase();
    };

    const matchesRating = (book, rating) => {
        switch (rating) {
            case "All":
                return true;
            
            case "Good":
                return book.rating >= 8;

            case "Ok":
                return book.rating >= 5 && book.rating < 8;
            
            case "Bad":
                return book.rating < 5;

            default:
                return false;
        }
    };

    const matchesSearch = (book) => {
        return (
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const sortBooks = (books) => {
        return books.sort((a, b) => {
            if (sortOrder === "Low to High") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    };

    useEffect(() => {
        const filtered = books_cards.filter(book => 
            matchesGenre(book) && matchesRating(book, rating) && matchesSearch(book)
        );
        const sorted = sortBooks(filtered);
        setFilteredBooks(sorted);
    }, [genre, rating, searchQuery, books_cards, sortOrder]);

    return (
        <div>
            <Header onSearch={handleSearch} />
            <div className="catalog">
                <h1>Catalog Page</h1>
                <div className="filters">
                    <label className='label'>Genre</label>
                    <select value={genre} onChange={handleGenreChange}>
                        <option>All genre</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                    <label className='label'>Rating</label>
                    <select value={rating} onChange={handleRatingChange}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                    <label className='label'>Price</label>
                    <select value={sortOrder} onChange={handleSortChange}>
                        <option>Low to High</option>
                        <option>High to Low</option>
                    </select>
                    <button onClick={handleClearFilters}>Clear Filters</button>
                </div>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map(book => (
                        <div key={book.id} className="book-card">
                            <img className="catalog-img" src={`images/${book.imageUrl}`} alt={book.title} />
                            <div className="book-card-info">
                                <h3 className="book-card-topic">{book.title}</h3>
                                <p className="book-author">{book.author}</p>
                                <p className="book-card-description">{book.description}</p>
                                <p className="movie-card-genre">Genre: {book.genre}</p>
                                <div className="movie-card-rating">
                                    <p>{book.rating}</p>
                                </div>
                                <p className="book-price">{book.price} $</p>
                            </div>
                            <Link to={`/items/${book.id}`}>
                                <button className="home-button">View more</button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <h1 className='search-err'>No books found</h1>
                )}
            </div>
        </div>
    );
}

export default Catalog;
