import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

function App() {
  const [books, setBooks] = useState([]); //this says that books variable starts out as an empty array
  const [bookToEdit, setBookToEdit] = useState(null);

  function onBookCreated(book) {
    //reset bookToEdit to nothing once a book has been created
    setBookToEdit(null);
    setBooks([...books, book]); //take previous books array and add this new book to it
    console.log(books);
  }

  function onBookDelete(book) {
    //filter on each book and get rid of the book whose isbn doesn't match the books that don't match the isbn of the book passed into the function
    setBooks(books.filter((x) => x.isbn !== book.isbn));

  }

  function onBookEdit(book) {
    //we're going to delete the book from the array, then take the elements from that book and put it into the form so it can be edited
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  return (
    <div className='text-center m-5'>
      <div className="card p-4">
        <BookForm bookToEdit={bookToEdit} onBookCreated={onBookCreated}></BookForm>

        {/* send books array into the table component  */}
        <BookTable books={books} onBookDelete={onBookDelete} onBookEdit={onBookEdit}></BookTable>
      </div>
        
    </div>
  );
}

export default App;


