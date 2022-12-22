const FlexForm = (props) => {
  return (
    <form className="flex flex-col items-center" onSubmit={props.onSubmit}>
        {props.children}
    </form>
  );
};

export default FlexForm;
