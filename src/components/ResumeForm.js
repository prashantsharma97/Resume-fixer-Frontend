import React, { useState } from 'react';
import axios from 'axios';
import './ResumeForm.css';
import JobOptions from './JobOptions';

const ResumeForm = () => {
    const [resume, setResume] = useState(null);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [position, setPosition] = useState('Senior Software Engineer');
    const [jobDescription, setJobDescription] = useState('');

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('resume', resume);

        axios.post('http://localhost:3001/upload-resume', formData)
            .then(response => setAnalysisResult(response.data))
            .catch(error => console.error('Error uploading resume:', error));
    };

    const handleGenerateDescription = () => {
        axios.post('http://localhost:3001/generate-description', { position })
            .then(response => setJobDescription(response.data.description))
            .catch(error => console.error('Error generating description:', error));
    };

    return (
        <div className="resume-form">
            <h1>Fix your resume using AI</h1>
            <p>Find out if your resume fits the job you're applying for</p>
            <form onSubmit={handleUpload}>
                <label htmlFor="resume-upload" className="upload-button">
                    Upload your resume
                    <input
                        type="file"
                        id="resume-upload"
                        onChange={handleFileChange}
                        required
                    />
                </label>
                <div className="job-position">
                    <label>Select the job you are applying for</label>
                    <select value={position} onChange={(e) => setPosition(e.target.value)}>
                        <JobOptions />
                    </select>
                </div>
                <div className="job-description">
                    <label>Job Description <span className="generate-link" onClick={handleGenerateDescription}>Generate</span></label>
                    <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Input Job Description..."
                        required
                    />
                </div>
                <button type="submit">Review my resume</button>
            </form>
            {analysisResult && (
                <div>
                    <h3>Analysis Results:</h3>
                    <p><strong>Strengths:</strong> {analysisResult.strengths}</p>
                    <p><strong>Weaknesses:</strong> {analysisResult.weaknesses}</p>
                    <p><strong>Suggestions:</strong> {analysisResult.suggestions}</p>
                </div>
            )}
        </div>
    );
}

export default ResumeForm;
