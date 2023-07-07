import React from 'react';
import ReactDOM from 'react-dom/client';
import RoadMap from '../components/web-of-knowledge';
import "../styles/global.css"

const Index = () => {
    return(
        <React.StrictMode>
            <RoadMap topic="CMPSC Major" />
        </React.StrictMode>
    );
}

export default Index;
