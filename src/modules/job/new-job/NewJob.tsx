"use client";

import { useState, useEffect } from "react";
import { jobService } from "@/services/job-service";
import { useSearchParams, useRouter } from "next/navigation";
import Modal from "@/components/modal/Modal";
import NewJobForm from "./job-form";
import JOB_CONSTANTS from "@/constants/jobs-constants";
import CreateJobPayload from "@/models/create-job-payload";
import Job from "@/models/job-model";

const NewJob = () => {
  const router = useRouter();
  const jobId = useSearchParams().get("id");
  const isEdit = jobId && jobId !== "0";

  const [stepNumber, setStepNumber] = useState(1);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [jobDetails, setJobDetails] = useState<any>(
    JOB_CONSTANTS.INIT_JOB_PAYLOAD
  );

  useEffect(() => {
    if (jobId) {
      if (jobId !== "0") {
        getJobDetails(jobId);
      } else {
        setIsOpen(true);
      }
    } else {
      setIsOpen(false);
    }
  }, [jobId]);

  const getJobDetails = (jobId: string): void => {
    jobService.getJob(jobId).then((response: any) => {
      if (Object.keys(response).length === 0) {
        setIsOpen(false);
      } else {
        setJobDetails({
          ...response,
          applyType: response?.isExternalApply
            ? JOB_CONSTANTS.APPLY_TYPE.EXTERNAL_APPLY
            : JOB_CONSTANTS.APPLY_TYPE.QUICK_APPLY
        });
        setIsOpen(true);
      }
    });
  };

  const onFormSuccessSubmit = (): void => {
    setIsOpen(false);
    setStepNumber(1);
    router.push("/jobs");
    router.refresh();
  };

  const addJob = (jobPayload: CreateJobPayload): void => {
    jobService
      .createJob(jobPayload)
      .then(() => {
        onFormSuccessSubmit();
      })
      .finally(() => {
        setIsFormSubmitting(false);
      });
  };

  const updateJob = (jobPayload: Job): void => {
    jobService
      .updateJob(jobPayload)
      .then(() => {
        onFormSuccessSubmit();
      })
      .finally(() => {
        setIsFormSubmitting(false);
      });
  };

  const getValidValueForNumber = (val: any) => {
    return !Number.isFinite(val) ? undefined : val;
  };

  const handleFormSubmit = (values: any, errors: any) => {
    if (Object.keys(errors).length === 0) {
      if (stepNumber === 1) {
        setStepNumber(2);
      } else {
        setIsFormSubmitting(true);

        const formValues = {
          ...values,
          createdAt: new Date().toUTCString(),
          minExp: getValidValueForNumber(values.minExp),
          maxExp: getValidValueForNumber(values.maxExp),
          minSalary: getValidValueForNumber(values.minSalary),
          maxSalary: getValidValueForNumber(values.maxSalary),
          isExternalApply:
            values.applyType === JOB_CONSTANTS.APPLY_TYPE.EXTERNAL_APPLY,
          id: isEdit ? jobId : undefined
        };

        isEdit ? updateJob(formValues) : addJob(formValues);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      maxHeight="564px"
      maxWidth="577px"
      onClose={() => null}
      titleLeft={isEdit ? "Update Job" : "Create a Job"}
      titleRight={`Step ${stepNumber}`}
    >
      <NewJobForm
        jobDetails={jobDetails}
        stepNumber={stepNumber}
        handleFormSubmit={handleFormSubmit}
        isFormSubmitting={isFormSubmitting}
      />
    </Modal>
  );
};

export default NewJob;
