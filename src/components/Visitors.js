function Visitors(props) {
    return (
        <div className="Visitors">
            <h3>Total Visitors</h3>
            <h2>{props.numVisitors}</h2>
            <div className="graphic">

            </div>
        </div>
    )
}

export default Visitors;