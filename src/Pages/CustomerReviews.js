import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerReviews = () => {
    const apiKey = process.env.REACT_APP_YELP_API_KEY;
    const businessId = 'best-care-auto-garden-grove';

    // const reviewsUrl = `https://api.yelp.com/v3/businesses/${businessId}/reviews`;

    // const headers = {
    //     'Authorization': `Bearer ${apiKey}`,
    //     'Content-Type': 'application/json'
    // };

    // axios.get(reviewsUrl, { headers })
    //     .then(response => {
    //         console.log(response.data.reviews);
    //         // process the reviews data here
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`https://api.yelp.com/v3/businesses/${businessId}/reviews`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                setReviews(response.data.reviews);
            })
            .catch(error => {
                console.log(error);
            });
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
