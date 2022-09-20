function Ratings(props) {
    return (
        <div className="rating">
            <h3>User Ratings</h3>
            <h2>{props.rating}</h2>
        </div>
    )
}

export default Ratings;