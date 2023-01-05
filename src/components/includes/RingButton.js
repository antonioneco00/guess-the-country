const RingButton = (props) => {
  return (
    <button
      className={`block md:w-1/2 w-full self-center p-2 my-2 ring-2 ring-${props.ringColor}-600 rounded-full ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default RingButton;
