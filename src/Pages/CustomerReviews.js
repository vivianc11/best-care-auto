import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerReviews = () => {

    const [reviews, setReviews] = useState([]);
    // const options = {method: 'GET', headers: {accept: 'application/json'}};
    // const businessAlias = 'best-care-auto-garden-grove';


    useEffect(() => {
        async function fetchData() {
          const response = await axios.get('http://localhost:3001/api/yelp-reviews');
          console.log(response.data.reviews)
        //   setReviews(response.data.reviews);
        }
        fetchData();
      }, []);



    return (
        <div>
            {/* {reviews.map((review) => (
                <div key={review.id}>
                    <h3>{review.user.name}</h3>
                    <p>{review.text}</p>
                </div>
            ))} */}
        </div>
    );
}

export default CustomerReviews;
