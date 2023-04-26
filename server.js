const sdk = require('api')('@yelp-developers/v1.0#2nsme02nlf6o9gwo');
const apiKey = process.env.REACT_APP_YELP_API_KEY;


sdk.auth('Bearer ZOxuwgQORHKty_12qkMfPuo4ihkGtnbMhDBqIoqZgKVpIJXykzlA5_dAihmmW6Xr_qCaoXMjFmLSAHDNvX37D6ACuxEiBrC97nIsU10bZUP4uA6pYJ1rK873ynNJZHYx');
sdk.v3_business_reviews({
  limit: '20',
  sort_by: 'yelp_sort',
  business_id_or_alias: 'best-care-auto-garden-grove'
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));