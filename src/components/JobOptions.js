import React from 'react';

const JobOptions = () => {
    const options = [
        "Senior Software Engineer",
        "Senior Frontend Engineer",
        "DevOps Engineer",
        "Product Manager",
        "Product Designer",
        "Data Scientist",
        "UX/UI Designer",
        "Mobile App Developer",
        "Cloud Solutions Architect",
        "Cybersecurity Analyst",
        "Database Administrator",
        "Quality Assurance Engineer",
        "Site Reliability Engineer (SRE)",
        "Systems Administrator",
        "Business Analyst",
        "Network Engineer",
        "Technical Support Specialist",
        "Machine Learning Engineer",
        "Artificial Intelligence Engineer",
        "Blockchain Developer",
        "Android Developer",
        "iOS Developer",
        "Embedded Systems Engineer",
        "Graphics Programmer",
        "Game Developer",
        "Natural Language Processing Engineer",
        "Computer Vision Engineer",
        "Salesforce Developer",
        "Full Stack Developer",
        "Backend Developer",
        "Senior Backend Developer",
        "Mid Backend Developer",
        "Junior Backend Developer",
        "Frontend Developer",
        "Security Operations Center Analyst",
        "Cloud Security Engineer",
        "DevSecOps Engineer",
        "Blockchain Engineer",
        "Quantum Computing Researcher",
        "Augmented Reality Developer",
        "Virtual Reality Developer",
        "E-commerce Analyst",
        "Big Data Engineer",
        "Others"
    ];

    return (
        <>
            {options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </>
    );
}

export default JobOptions;
