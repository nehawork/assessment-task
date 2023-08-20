import FormItem from "@/components/form-wrapper/FormItem";

type JobBasicDetailsFormProps = {
  handleChange: (value: any) => void;
  values: any;
  errors: any;
};

const JobBasicDetailsForm = ({
  handleChange,
  values,
  errors
}: JobBasicDetailsFormProps): JSX.Element => {
  return (
    <>
      <FormItem>
        <FormItem.Label title="Job title" isRequired />
        <FormItem.Input
          name="jobTitle"
          type="text"
          onChange={handleChange}
          value={values.jobTitle}
          hasError={errors.jobTitle !== undefined}
          placeholder="ex. UX UI Designer"
        />
      </FormItem>

      <FormItem>
        <FormItem.Label title="Company name" isRequired />
        <FormItem.Input
          name="companyName"
          type="text"
          placeholder="ex. Google"
          onChange={handleChange}
          value={values.companyName}
          hasError={errors.companyName !== undefined}
        />
      </FormItem>

      <FormItem>
        <FormItem.Label title="Industry" isRequired />
        <FormItem.Input
          name="industry"
          type="text"
          placeholder="ex. Information Technology"
          onChange={handleChange}
          value={values.industry}
          hasError={errors.industry !== undefined}
        />
      </FormItem>

      <div className="grid grid-cols-2 gap-6">
        <FormItem>
          <FormItem.Label title="Location" />
          <FormItem.Input
            name="location"
            type="text"
            placeholder="ex. Chennai"
            onChange={handleChange}
            value={values.location}
            hasError={errors.location !== undefined}
          />
        </FormItem>
        <FormItem>
          <FormItem.Label title="Remote Type" />
          <FormItem.Input
            name="remoteType"
            type="text"
            placeholder="ex. In-Office"
            onChange={handleChange}
            value={values.remoteType}
            hasError={errors.remoteType !== undefined}
          />
        </FormItem>
      </div>
    </>
  );
};

export default JobBasicDetailsForm;
