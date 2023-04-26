import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        const fetchReviews = async () => {
          try {
            const response = await yelp.get('/best-care-auto-garden-grove/reviews', {
              params: {
                limit: 10,
                sort_by: 'yelp_sort',
              },
            });
            console.log(response.data.reviews)
            setReviews(response.data.reviews);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchReviews();
      }, []);


    return (
        <div>
            {reviews.map((review) => (
                <div key={review.id}>
                    <h2>{review.user.name}</h2>
                    <p>{review.text}</p>
                </div>
            ))}
        </div>
    )

}

export default CustomerReviews;
