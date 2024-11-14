{/* <Header onSearch={handleSearch} />  { }
            <div className="catalog">
                <h1>Catalog Page</h1>
                <div className="filters">
                    <label>Genre</label>
                    <select value={genre} onChange={handleGenreChange}>
                        <option>All genre</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                    <label>Rating</label>
                    <select value={rating} onChange={handleRatingChange}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                    <select>
                        <option>Filter 7</option>
                        <option>Filter 8</option>
                        <option>Filter 9</option>
                    </select>
                    <button>Apply</button>
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
                    <h1 className='search-err'>No books found</h1> */}