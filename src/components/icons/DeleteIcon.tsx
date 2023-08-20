import { TrashIcon } from "@heroicons/react/24/solid";

const DeleteIcon = ({
  className = "",
  onClick
}: {
  className?: string;
  onClick: () => void;
}): JSX.Element => {
  return (
    <TrashIcon
      className={"h-6 w-6 text-red cursor-pointer " + className}
      onClick={onClick}
    />
  );
};

export default DeleteIcon;
