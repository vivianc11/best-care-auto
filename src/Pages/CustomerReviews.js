import React from 'react';
import axios from 'axios';

const CustomerReviews = () => {
    const apiKey = process.env.REACT_APP_YELP_API_KEY;
    const businessId = 'best-care-auto-garden-grove';

    const reviewsUrl = `https://api.yelp.com/v3/businesses/${businessId}/reviews`;

    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    };

    axios.get(reviewsUrl, { headers })
        .then(response => {
            console.log(response.data.reviews);
            // process the reviews data here
        })
        .catch(error => {
            console.error(error);
        });

    return (
        <div>

        </div>
    );
}

export default CustomerReviews;
