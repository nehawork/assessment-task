import { Formik } from "formik";
import JobAdvanceDetailsForm from "./AdvanceDetailsForm";
import JobBasicDetailsForm from "./BasicDetailsForm";
import JobFormSchema from "./JobFormSchema";
import Loading from "@/components/loading/Loading";
import Button from "@/components/button/Button";

type NewJobFormProps = {
  jobDetails: any;
  stepNumber: number;
  isFormSubmitting: boolean;
  handleFormSubmit: (e: any, values: any, errors: any) => void;
};

const NewJobForm = ({
  jobDetails,
  stepNumber,
  isFormSubmitting,
  handleFormSubmit
}: NewJobFormProps): JSX.Element => {
  return (
    <Formik
      onSubmit={() => {
        //handled externally
      }}
      initialValues={jobDetails}
      validationSchema={JobFormSchema}
    >
      {({ errors, values, handleChange, validateForm }) => (
        <>
          <div className="pt-6 pb-[72px]">
            {stepNumber === 1 ? (
              <JobBasicDetailsForm
                handleChange={handleChange}
                errors={errors}
                values={values}
              />
            ) : (
              <JobAdvanceDetailsForm
                handleChange={handleChange}
                errors={errors}
                values={values}
              />
            )}
          </div>

          <Button
            type="primary"
            onClick={e => {
              validateForm(values).then((validationResponse: any) =>
                handleFormSubmit(e, values, validationResponse)
              );
            }}
            title={
              <div className="flex items-center">
                {isFormSubmitting && <Loading />}
                <div>{stepNumber === 1 ? "Next" : "Save"}</div>
              </div>
            }
          />
        </>
      )}
    </Formik>
  );
};

export default NewJobForm;
