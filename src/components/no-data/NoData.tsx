const NoData = ({
  message = "No data available"
}: {
  message: string;
}): JSX.Element => {
  return (
    <div className="flex justify-center items-center text-base text-black">
      {message}
    </div>
  );
};

export default NoData;
