// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import SurveyList from './components/SurveyList';
import Login from './components/Login';
import './App.css';

// const Home = () => (
//   <div className="home">
//       <h2>Welcome to the Survey App!</h2>
//       <p>Submit your survey and explore the survey list.</p>
//   </div>
// );
const App = () => {
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/survey-form">Survey Form</Link>
                        </li>
                        <li>
                            <Link to="/survey-list">Survey List</Link>
                        </li>
                    </ul>
                </nav>

                <hr />

                <Routes>

                     <Route
                        path="/"
                        element={
                            <div className="home">
                                <h2>Welcome to the Survey App!</h2>
                                <p>Submit your survey and explore the survey list.</p>
                            </div>
                        }
                    />
                    {/* <Route
                        path="/"
                        element={
                     <div>
            <h2>Survey List</h2>
            <ul>
                {SurveyList.map((survey) => (
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
         }
         /> */}
                    <Route path="/survey-form" element={<SurveyForm />} />
                    <Route
                        path="/survey-list"
                        element={
                            adminLoggedIn ? <SurveyList /> : <Login setAdminLoggedIn={setAdminLoggedIn} />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
