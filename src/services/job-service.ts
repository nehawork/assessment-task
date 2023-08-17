import ApiClient from "@/common/api-wrapper";
import CreateJobPayload from "@/models/create-job-payload";
import Job from "@/models/job-model";
import IApiClient from "@/models/api-client";
import API_CONSTANTS from "@/constants/api-constants";

class JobService {
  apiBase: string;
  apiClient: IApiClient;

  constructor(apiClient: IApiClient) {
    this.apiBase = API_CONSTANTS.JOB_BASE_URL;
    this.apiClient = apiClient;
  }

  listAllJobs = (): Promise<Array<Job> | undefined> => {
    return this.apiClient.get(this.apiBase);
  };

  createJob = (jobPayload: CreateJobPayload): Promise<Job | undefined> => {
    return this.apiClient.post(this.apiBase, jobPayload);
  };

  updateJob = (jobPayload: Job): Promise<Job | undefined> => {
    return this.apiClient.put(`${this.apiBase}/${jobPayload.id}`, jobPayload);
  };

  getJob = (jobId: string): Promise<Job | undefined> => {
    return this.apiClient.get(`${this.apiBase}/${jobId}`);
  };

  deleteJob = (jobId: string): Promise<Job | undefined> => {
    return this.apiClient.delete(`${this.apiBase}/${jobId}`);
  };
}

export const jobService = new JobService(new ApiClient());
