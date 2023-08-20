type ButtonProps = {
  title: any;
  type: "primary" | "secondary";
  extraClassName?: string;
  onClick?: () => void;
};

const Button = ({
  title,
  type,
  extraClassName,
  onClick
}: ButtonProps): JSX.Element => {
  const displayClass =
    "block ml-auto mr-0 outline-0 px-4 py-2 h-10  drop-shadow ";
  const borderClass = "rounded-md border border-primary-80";
  const textClass = "text-base  font-medium";

  const buttonTypeClass =
    type === "secondary"
      ? "bg-white text-primary-80"
      : "bg-primary-80 text-white";
  return (
    <button
      className={`${displayClass} ${borderClass} ${textClass} ${buttonTypeClass} ${extraClassName ??
        ""}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
