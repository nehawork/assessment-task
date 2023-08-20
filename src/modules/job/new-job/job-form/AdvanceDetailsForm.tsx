import FormItem from "@/components/form-wrapper/FormItem";
import JOB_CONSTANTS from "@/constants/jobs-constants";

type JobAdvanceDetailsFormProps = {
  handleChange: (value: any) => void;
  values: any;
  errors: any;
};

const JobAdvanceDetailsForm = ({
  values,
  handleChange,
  errors
}: JobAdvanceDetailsFormProps): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <FormItem>
          <FormItem.Label title="Experience(in years)" />
          <FormItem.Input
            name="minExp"
            type="number"
            placeholder="Minimum"
            onChange={handleChange}
            value={values.minExp}
            hasError={errors.minExp !== undefined}
          />
        </FormItem>
        <FormItem>
          <FormItem.Label title="" />
          <FormItem.Input
            name="maxExp"
            type="number"
            placeholder="Maximum"
            onChange={handleChange}
            value={values.maxExp}
            hasError={errors.maxExp !== undefined}
          />
        </FormItem>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <FormItem>
          <FormItem.Label title="Salary(per month)" />
          <FormItem.Input
            name="minSalary"
            type="number"
            placeholder="Minimum"
            onChange={handleChange}
            value={values.minSalary}
            hasError={errors.minSalary !== undefined}
          />
        </FormItem>
        <FormItem>
          <FormItem.Label title="" />
          <FormItem.Input
            name="maxSalary"
            type="number"
            placeholder="Maximum"
            onChange={handleChange}
            value={values.maxSalary}
            hasError={errors.maxSalary !== undefined}
          />
        </FormItem>
      </div>

      <FormItem>
        <FormItem.Label title="Total Employee" />
        <FormItem.Input
          name="totalEmployee"
          type="text"
          placeholder="ex. 100"
          onChange={handleChange}
          value={values.totalEmployee}
          hasError={errors.totalEmployee !== undefined}
        />
      </FormItem>

      <FormItem>
        <FormItem.Label title="Apply Type" />
        <FormItem.RadioGroup
          data={[
            {
              name: "applyType",
              value: JOB_CONSTANTS.APPLY_TYPE.QUICK_APPLY,
              isChecked:
                values.applyType === JOB_CONSTANTS.APPLY_TYPE.QUICK_APPLY,
              label: JOB_CONSTANTS.APPLY_TYPE.QUICK_APPLY
            },
            {
              name: "applyType",
              value: JOB_CONSTANTS.APPLY_TYPE.EXTERNAL_APPLY,
              isChecked:
                values.applyType === JOB_CONSTANTS.APPLY_TYPE.EXTERNAL_APPLY,
              label: JOB_CONSTANTS.APPLY_TYPE.EXTERNAL_APPLY
            }
          ]}
          onChange={handleChange}
        />
      </FormItem>
    </>
  );
};

export default JobAdvanceDetailsForm;
