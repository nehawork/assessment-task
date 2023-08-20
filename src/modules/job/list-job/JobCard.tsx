import Button from "@/components/button/Button";
import Job from "@/models/job-model";

const JobCard = ({ job }: { job: Job }): JSX.Element => {
  return (
    <div
      key={job.id}
      className="bg-white border border-gray-300 rounded-large py-4 px-6"
    >
      <div>{job.companyName}</div>
      <div>
        {job.location}({job.remoteType})
      </div>
      <div>
        Experience: {job.minExp}-{job.maxExp}
      </div>
      <div>
        INR: {job.minSalary} - {job.maxSalary}
      </div>
      <div>Employee: {job.totalEmployee}</div>
      <Button
        type={!job.isExternalApply ? "primary" : "secondary"}
        title={job.isExternalApply ? "External Apply" : "Apply Now"}
      />
    </div>
  );
};

export default JobCard;
