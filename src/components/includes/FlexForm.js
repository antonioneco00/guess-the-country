const FlexForm = (props) => {
  return (
    <form className="flex flex-col items-center mt-2" onSubmit={props.onSubmit}>
        {props.children}
    </form>
  );
};

export default FlexForm;
