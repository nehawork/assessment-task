import { PencilSquareIcon } from "@heroicons/react/20/solid";

const EditIcon = ({
  className = "",
  onClick
}: {
  className?: string;
  onClick: () => void;
}): JSX.Element => {
  return (
    <PencilSquareIcon
      className={"h-6 w-6 text-primary-80 cursor-pointer " + className}
      onClick={onClick}
    />
  );
};

export default EditIcon;
