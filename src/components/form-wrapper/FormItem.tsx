const FormItem = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <div className="pb-6">{children}</div>;
};

const Label = ({
  title,
  isRequired
}: {
  title: string;
  isRequired?: boolean;
}): JSX.Element => {
  return (
    <label className="text-sm font-medium flex mb-1">
      <div className="text-black h-5">{title}</div>
      {isRequired && <div className="text-red">*</div>}
    </label>
  );
};

const Input = ({
  name,
  type,
  value,
  placeholder,
  onChange,
  hasError
}: {
  name: string;
  type: string;
  value: any;
  placeholder: string;
  onChange: (value: any) => void;
  hasError: boolean;
}): JSX.Element => {
  const errorClass = hasError ? "border-red" : "";

  return (
    <input
      className={
        "border border-gray-600 h-9 rounded-small px-3 py-2 outline-none text-sm font-normal text-secondary-100 placeholder-gray-900 w-full focus:border-primary-80 " +
        errorClass
      }
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    ></input>
  );
};

const Radio = ({
  name,
  value,
  onChange,
  isChecked,
  label
}: {
  name: string;
  value: any;
  onChange: (value: any) => void;
  isChecked: boolean;
  label: string;
}): JSX.Element => {
  return (
    <div className="flex items-center ">
      <input
        className="border-2 border-gray-800 w-5 h-5 rounded-full outline-none text-sm font-normal text-secondary-100 placeholder-gray-900  focus:border-primary-80"
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={isChecked}
      ></input>
      <label className="text-gray-900 text-sm pl-1 pr-4 ">{label}</label>
    </div>
  );
};

const RadioGroup = ({
  data,
  onChange
}: {
  data: Array<{
    name: string;
    value: string;
    label: string;
    isChecked: boolean;
  }>;
  onChange: (value: any) => void;
}): JSX.Element => {
  return (
    <div className="flex w-full h-9 items-center">
      {data.map(radioData => (
        <Radio key={radioData.value} {...radioData} onChange={onChange} />
      ))}
    </div>
  );
};

FormItem.Label = Label;
FormItem.Input = Input;
FormItem.Radio = Radio;
FormItem.RadioGroup = RadioGroup;

export default FormItem;
