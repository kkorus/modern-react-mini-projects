import { BarLoader } from "react-spinners";

const Spinner = ({color = 'blue'}: {color: string}) => {
  const cssOverride = {
    display: 'block',
    margin: '0 auto',
  };
  return (
    <div>
      <BarLoader color={color} cssOverride={cssOverride} />
    </div>
  );
};

export default Spinner;