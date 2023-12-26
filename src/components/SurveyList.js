// src/components/SurveyList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SurveyList = () => {
    const [surveyList, setSurveyList] = useState([]);
    const [adminLoggedIn, setAdminLoggedIn] = useState(true);

    useEffect(() => {
        // Fetch survey data from the backend
        const fetchSurveyData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/surveys');
                setSurveyList(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSurveyData();
    }, []);
    const handleLogout = () => {
        // Add logic to handle admin logout (set adminLoggedIn to false)
        setAdminLoggedIn(false);

        window.location.reload();

    };

    return (
        <div>
            <h2>Survey List</h2>

            {adminLoggedIn && (
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            )}
            <ul>
                {surveyList.map((survey) => (
                    <li key={survey._id}>
                        <p>Name: {survey.name}</p>
                        <p>Gender: {survey.gender}</p>
                        <p>Nationality: {survey.nationality}</p>
                        <p>Email: {survey.email}</p>
                        <p>Phone Number: {survey.phoneNumber}</p>
                        <p>Address: {survey.address}</p>
                        <p>Message: {survey.message}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SurveyList;
