"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs?populate=icon`)
      .then((res) => {
        setJobs(res.data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading jobs...</p>;
  }

  if (jobs.length === 0) {
    return <p className="text-center py-10 text-gray-600">No jobs available at the moment.</p>;
  }

  return (
    <div className="grid gap-6 p-4">
      {jobs.map((job) => {
        const iconUrl = job?.attributes?.icon?.data?.attributes?.url
          ? `${process.env.NEXT_PUBLIC_API_URL}${job.attributes.icon.data.attributes.url}`
          : '/default-icon.png';

        return (
          <div
            key={job.id}
            className="border rounded-lg p-4 shadow-md flex items-start gap-4"
          >
            <img
              src={iconUrl}
              alt="Job Icon"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h2 className="text-xl font-semibold">{job.attributes.title}</h2>
              <p className="text-sm text-gray-500">{job.attributes.location}</p>
              <div
                className="text-gray-700 mt-2 text-sm"
                dangerouslySetInnerHTML={{
                  __html: job.attributes.description,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
