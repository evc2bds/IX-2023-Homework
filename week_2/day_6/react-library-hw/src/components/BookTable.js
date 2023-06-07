import React from 'react'

export default function BookTable(props) {
  return (
    <div>
        <table className="table mt-5">
            <thead>
                <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody id="table-body">
                {/* loop through the books from the props to build the table */}
                {
                    props.books.map((book) => {
                        return (
                            <tr key={book.isbn}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm me-1"
                                    onClick={()=> props.onBookDelete(book)} //send this book (the current one in the loop) to the onBook Delete function
                                    >
                                        Delete
                                    </button>

                                    <button className="btn btn-warning btn-sm ms-1"
                                    onClick={()=> props.onBookEdit(book)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
