// Code MovieReviews Here
import React from "react"

const Review = ({
    display_title,
    headline,
    byline,
    summary_short
}) => {
    return(
        <div key={display_title} className="review">
            <h3>{display_title}</h3>
            <h4>{headline}</h4>
            <p>{byline}</p>
            <p>{summary_short}</p>    
        </div>
    )
}

const MovieReviews = ({reviews}) => {
    return ( <div className="latest-movie-reviews">
        {reviews.map(Review)}
    </div>
    )
} 
export default MovieReviews