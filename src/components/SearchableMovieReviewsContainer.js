import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'qGryvYdtzvXadLSqmeBqktthViVXZBqs';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super()

        this.state = {
            query: "",
            reviews: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL.concat(this.state.query))
        .then(res => res.json())
        .then(data => {
            this.setState({ reviews: data.results})
        })
    }

    render() {
        return <div class="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})}/>
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    }
    

}
export default SearchableMovieReviewsContainer
