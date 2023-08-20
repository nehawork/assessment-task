interface CreateJobPayload {
  jobTitle: string;
  companyName: string;
  industry: string;
  location: string;
  remoteType: string;
  minExp?: number;
  maxExp?: number;
  minSalary?: number;
  maxSalary?: number;
  totalEmployee: string;
  isExternalApply: boolean;
  externalApplyLink?: string | null;
  workingHours?: string;
  createdAt: string;
}

export default CreateJobPayload;
