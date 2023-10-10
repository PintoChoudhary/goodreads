import React from 'react'
import { Link } from 'react-router-dom';
function Book(props) {
    const { id , title , image } = props.data;

  return (
    <div className="col-sm-3">
      <Link to={'/books/detail/'+id} >
        <div className="card">
            <img src={image} alt='' className="card-img-top" />
            <div className="card-body">
                {title}
            </div>
            <Link to={'/books/detail/'+id} className="btn btn-block btn-dark"> Show Details</Link>
        </div>
      </Link>
    </div>
  )
}

export default Book
