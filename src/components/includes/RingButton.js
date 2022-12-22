const RingButton = (props) => {
  return (
    <button
      className={`block w-1/2 self-center p-2 my-2 ring-2 ring-${props.ringColor}-600 rounded-full`}
    >
      {props.text}
    </button>
  );
};

export default RingButton;
