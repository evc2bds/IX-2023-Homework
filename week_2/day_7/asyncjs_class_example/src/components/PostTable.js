import React from 'react'

export default function PostTable(props) {
  return (
    <div>
        <table className='table mt-5'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>userId</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody id='table-body'>
                {
                    props.posts.map((post) => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.userId}</td>
                                <td>{post.body}</td>
                            </tr>
                        )

                    })}
            </tbody>
        </table>
    </div>
  )
}
