import NoData from "@/components/no-data/NoData";
import JobList from "@/modules/job/list-job/JobList";
import { jobService } from "@/services/job-service";

async function ListJobs() {
  const jobs = await jobService.listAllJobs();

  if (jobs?.length === 0) {
    return <NoData message="Jobs not available" />;
  }

  return <JobList jobs={jobs} />;
}

export default ListJobs;
