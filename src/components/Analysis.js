function Analysis(props) {
    return (
        <div className="analysisContainer">
            <h3>Sentiment Analysis</h3>
            <div className="analysis">
                <h2>{props.analysisOne}</h2>
                <h2>{props.analysisTwo}</h2>
                <h2>{props.analysisThree}</h2>
            </div>
        </div>
    );
}

export default Analysis;