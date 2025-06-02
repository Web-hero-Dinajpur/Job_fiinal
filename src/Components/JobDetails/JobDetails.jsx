import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title, company} = useLoaderData();
    
    return (
        <div>
            <h2 className='text-3xl'>job details for: {title}</h2>
            <p>Apply for :{company}</p>
         <button className='btn btn-primary'>Apply Now</button>
        </div>
    );
};

export default JobDetails;