import Job from "./Job";
import {useState, useEffect} from "react";
import Spinner from "./Spinner";

const JobListing = ({showRecent = false}) => {

    const[jobs, setJobs] = useState([]); //default is empty, we will fetch data when load the component
    const[loading, setLoading] = useState(true); //true when fetching data, to load spinner when loading

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const apiUrl = showRecent ? '/api/jobs?_limit=3' : '/api/jobs';
                    const res = await fetch(apiUrl);
                    const data = await res.json();
                    setJobs(data);
                    
                } catch (error) {
                    console.log('Error when fetching jobs data....', error);
                } finally {
                    setLoading(false);
                }
            }
            fetchData();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {showRecent ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                {loading ? <Spinner loading={loading}/> : 
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                        <Job key={job.id} job={job}/>
                        ))}    
                    </div>
                }
            </div>
        </section>
    );
};

export default JobListing;