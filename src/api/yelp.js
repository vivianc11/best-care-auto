import axios from "axios";

export default axios.create({
  baseURL: ' http://localhost:8080/https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer ZPzXkPFyF_mWgHVjj_a1QZqiFkktt_iXYcX8JED6Gp2i73aYJTsvfUSApIVh7w8B8CNYfwnvBKo50MZvR34dvO3Cm1tQxlFp_PnGgCFjce1h0I1UF3zcKHnr7eq8YnYx'
  }
});