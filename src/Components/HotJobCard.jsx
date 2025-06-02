import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {

    const {_id, title, location, jobType, company, company_logo, requirements, description, salaryRange } = job;

    return (
        <div className="card m-4 p-4 bg-base-100 shadow-sm">
            <div className='flex gap-2'>
                <figure>
                    <img className=' w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div className=''>
                    <h4>{company}</h4>
                    <span className='flex items-center'><MdOutlineLocationOn />{location}</span>
                </div>
            </div>
            <div className="my-2">
                <h2 className="card-title my-2">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex flex-wrap my-2'>
                    {
                        requirements.map((skill, index) => <p key={index} className='border rounded-md m-1 hover:text-blue-800 hover:bg-gray-300 px-1'>{skill}</p>)
                    }
                </div>
                <div className="card-actions items-center">
                    <div className='flex items-center'>
                        Salary:<FaDollarSign></FaDollarSign> {salaryRange.min}, {salaryRange.max}, {salaryRange.currency}
                    </div>
                    <Link to={`jobs/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;