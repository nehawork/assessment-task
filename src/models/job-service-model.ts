import CreateJobPayload from "./create-job-payload";
import Job from "./job-model";

interface IJobApiClient {
  listAllJobs(): Promise<Array<Job> | undefined>;
  getJob(jobId: string): Promise<Job | undefined>;
  createJob(jobPayload: CreateJobPayload): Promise<Job | undefined>;
  updateJob(jobPayload: Job): Promise<Job | undefined>;
  deleteJob(jobId: string): Promise<Job | undefined>;
}

export default IJobApiClient;
