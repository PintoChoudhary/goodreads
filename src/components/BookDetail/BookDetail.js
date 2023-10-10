import React, { useState } from 'react';
import styles from './styles.module.css';

function BookDetail(props) {
  const { title, description, image, author } = props.data;
  const [reviews, setReviews] = useState([
    'Dummy Review 1',
    'Dummy Review 2',
  ]);
  const [newReview, setNewReview] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() === '') return;
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setNewReview('');
    setShowReviewForm(false);
  };
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 text-center">
          <div className={styles.wrapper}>
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-8">
          <div className={styles.wrapper}>
            <h1 className={styles.h1}>{title}</h1>
            <h2 className={styles.author}>{author}</h2>
            <p>{description}</p>
            <div>
              <h3>Reviews</h3>
              <ul className={styles.reviewList}>
                {reviews.map((review, index) => (
                  <li key={index} className={styles.reviewItem}>
                    {review}
                  </li>
                ))}
              </ul>
              <button
                className={styles.writeReviewButton}
                onClick={() => setShowReviewForm(true)}
              >
                Write a Review
              </button>
              {showReviewForm && (
                <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
                  <textarea
                    placeholder="Write your review here..."
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    className={styles.reviewInput}
                  />
                  <button type="submit" className={styles.submitButton}>
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
