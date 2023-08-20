import Job from "@/models/job-model";
import JobCard from "./JobCard";

const JobList = ({ jobs }: { jobs?: Array<Job> }): JSX.Element => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {jobs?.map(job => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  );
};

export default JobList;
