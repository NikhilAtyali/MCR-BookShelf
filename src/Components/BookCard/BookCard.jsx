

import React, {useState} from 'react';
import "./BookCard.css"
const BookCard = ({ book, onUpdateBook }) => {
  const [state, setState] = useState(book.state);

  const handleStateChange = (newState) => {
    const updatedBook = { ...book, state: newState };
    setState(newState);
    onUpdateBook(updatedBook); 
  };
  return (
    <div>
      
        <div key={book?.id}>
          <img src={book?.src} alt={book?.name} />
          <h3>{book?.name}</h3>
          <p>{book?.author}</p>
        </div>
        <div className="btnContainer">
        <p>Move to</p>
        <button onClick={() => handleStateChange("currently reading")}>
          Currently Reading
        </button>
        <button onClick={() => handleStateChange("read")}>Read</button>
        <button onClick={() => handleStateChange("want to read")}>
          Want To Read
        </button>
      </div>
    
    </div>
  );
};

export default BookCard;

