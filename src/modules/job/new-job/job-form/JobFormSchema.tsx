import * as Yup from "yup";

const JobFormSchema = Yup.object().shape({
  jobTitle: Yup.string().required("Job title required"),
  companyName: Yup.string().required("Company name required"),
  industry: Yup.string().required("Industry required"),
  location: Yup.string(),
  remoteType: Yup.string(),
  minExp: Yup.number().min(0),
  maxExp: Yup.number().moreThan(Yup.ref("minExp"), "Max should be > min"),
  minSalary: Yup.number().min(1),
  maxSalary: Yup.number().moreThan(Yup.ref("minSalary"), "Max should be > min"),
  totalEmployee: Yup.string(),
  isExternalApply: Yup.bool()
});

export default JobFormSchema;
