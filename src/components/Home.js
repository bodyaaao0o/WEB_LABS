import React, { useState, useEffect } from 'react';
import "../style2.css";
import Header from './Header';

export default function Home() {

    const [books, setBooks] = useState([]);  
    const [visibleCount, setVisibleCount] = useState(3); 

    useEffect(() => {
        fetch("books.json")
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);
    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    return (
        <div>
            <Header />
            <div className='home'>
                <div className='home-top'>
                    <img src='/images/3.jpg' alt="3" />
                    <div className='home-top-text'>
                        <h1>dsfdsf</h1>
                        <p> fsdfsfdsfdddddddddddddddddddddddddddddddddddddddddd
                            dddddddddddddddddddddddddddddddddddddddddddddddddd
                            ddddddddddddddddddddddddddddddddddddddddddddddddddd
                            dddddddddddddaasdasdas
                            ddsadadsgfsdgasgadfgadfgadsfgasdfgadf
                            sgsdf
                            gsdf
                            gsdfgsdfgsdfgsdfgsdfgsdfgdsfgdfsg
                        </p>
                    </div>
                </div>

                <div className='home-grid'>
                    {
                        books.slice(0, visibleCount).map(book => (
                            <div key={book.id} className='book-card'>
                                <img src={`images/${book.image}`} alt={book.topic} />
                                <div className='book-card-info'>
                                    <h3 className='book-card-topic'>{book.topic}</h3>
                                    <p className='book-card-description'>{book.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {visibleCount < books.length && (
                    <button className='home-button' onClick={handleViewMore}>
                        View more
                    </button>
                )}
            </div>
        </div>
    );
}
