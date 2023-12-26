// src/components/SurveyForm.js

 import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

// import '../index.css';

const SurveyForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm();

    const [formData, setFormData] = useState({});
    

    const onSubmit = async (data) => {
        try {
            // Simple anti-spam check (honeypot field)
            if (data.spamPrevention) {
                return; // Do nothing if the honeypot field is filled
            }

            // Send survey data to the backend
            await axios.post('https://mern-survey-backend-h607.onrender.com/api/submit', data);
            alert('Survey submitted successfully!');
            reset();
            setFormData({});
            
        } catch (error) {
            console.error(error);
            alert('Error submitting survey');
        }
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Survey Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    disabled={isSubmitting}
                    onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name.message}</span>}

                <label htmlFor="gender">Gender:</label>
                <select
                    id="gender"
                    {...register('gender', { required: 'Please select a gender' })}
                    disabled={isSubmitting}
                    onChange={handleChange}
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    {/* Add more options if needed */}
                </select>
                {errors.gender && <span className="error">{errors.gender.message}</span>}

                <label htmlFor="nationality">Nationality:</label>
                <input
                    type="text"
                    id="nationality"
                    {...register('nationality', { required: 'Nationality is required' })}
                    disabled={isSubmitting}
                    onChange={handleChange}
                />
                {errors.nationality && <span className="error">{errors.nationality.message}</span>}

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    {...register('email', { required: 'Email is required' })}
                    disabled={isSubmitting}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}

                
                <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        {...register('phone', { required: 'Phone is required' })}
                    disabled={isSubmitting}
                    onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone.message}</span>}

      <label htmlFor="address">Address:</label>
      <textarea
        id="address"
        name="address"
        rows="4"
        {...register('address', { required: 'Address is required' })}
                    disabled={isSubmitting}
                    onChange={handleChange}
                />
                {errors.address && <span className="error">{errors.address.message}</span>}

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        {...register('message', { required: 'Message is required' })}
                    disabled={isSubmitting}
                    onChange={handleChange}
                />
                {errors.message && <span className="error">{errors.message.message}</span>}

                {/* Honeypot field for anti-spam measure */}
                <label style={{ display: 'none' }}>
                    Don't fill this out if you're human:{' '}
                    <input type="text" {...register('spamPrevention')} />
                </label>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>

                {isSubmitSuccessful && <p className="success">Form submitted successfully!</p>}
            </form>
            
        </div>
    );
};

export default SurveyForm;
