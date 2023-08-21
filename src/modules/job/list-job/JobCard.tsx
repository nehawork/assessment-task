"use client";

import "./JobCardStyles.css";
import Button from "@/components/button/Button";
import DeleteIcon from "@/components/icons/DeleteIcon";
import EditIcon from "@/components/icons/EditIcon";
import Job from "@/models/job-model";
import { jobService } from "@/services/job-service";
import Link from "next/link";
import { useRouter } from "next/navigation";

const JobCard = ({ job }: { job: Job }): JSX.Element => {
  const router = useRouter();

  const onDelete = (): void => {
    jobService.deleteJob(job.id).then(() => {
      router.refresh();
    });
  };

  return (
    <div key={job.id} className="jobCard">
      <div className="mainDetailsWrapper">
        <div>
          <div className="titleText">{job.jobTitle}</div>
          <div className="subTitleText">
            {job.companyName}-{job.industry}
          </div>
          <div className="subTitleText highlightedText ">
            {job.location || ""}
            {job.remoteType
              ? job.location
                ? `(${job.remoteType})`
                : job.remoteType
              : ""}
          </div>
        </div>
        <div className="iconsWrapper">
          <Link href={`/jobs?id=${job.id}`}>
            <EditIcon className="mr-2" />
          </Link>
          <DeleteIcon onClick={onDelete} />
        </div>
      </div>
      {(job.minExp || job.maxExp) && (
        <div className="advanceDetailsWrapper">
          Experience: ({job.minExp || 0}-{job.maxExp} years)
        </div>
      )}
      {(job.minSalary || job.maxSalary) && (
        <div className="advanceDetailsWrapper">
          INR(₹) {job.minSalary || 0} - {job.maxSalary}/Month
        </div>
      )}
      {job.totalEmployee && (
        <div className="advanceDetailsWrapper">
          {job.totalEmployee} employees
        </div>
      )}
      <Button
        extraClassName="jobApplyBtn"
        type={!job.isExternalApply ? "primary" : "secondary"}
        title={job.isExternalApply ? "External Apply" : "Apply Now"}
      />
    </div>
  );
};

export default JobCard;
