import { Link } from "react-router-dom";

const RingLink = (props) => {
  return (
    <Link
      to={props.url}
      className={`block w-1/2 self-center p-2 my-2 ring-2 ring-${props.ringColor}-600 rounded-full`}
      onClick={props.onClick}
    >
      {props.text}
    </Link>
  );
};

export default RingLink;
