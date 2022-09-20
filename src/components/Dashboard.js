
import React from 'react';
import Ratings from './Ratings';
import Reviews from './Reviews';
import Analysis from './Analysis';
import Sidebar from './Sidebar';
import Visitors from './Visitors';

function Dashboard() {
    return (
        <div className="dashboard">
            <Sidebar />
            <Reviews totalReviews="1,281" />
            <Ratings rating="4.6" />
            <Analysis analysisOne="960" analysisTwo="122" analysisThree="321"/>
            <Visitors numVisitors="821" />
        </div>
    );
}

export default Dashboard;