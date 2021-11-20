import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'qGryvYdtzvXadLSqmeBqktthViVXZBqs';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


class LatestMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state = {
            latestReviews: []
        }
    }

    render() {
        return (
            <MovieReviews reviews={this.state.latestReviews}/>
        )
    }

    
    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({
                latestReviews: data.results
            })
            console.log(this.state.latestReviews)
        })
    }
}
export default LatestMovieReviewsContainer