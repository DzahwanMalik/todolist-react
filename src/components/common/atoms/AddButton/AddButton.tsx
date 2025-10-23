type AddButtonProps = {
  handleClick: () => void;
};

const AddButton = (props: AddButtonProps) => {
  return (
    <button
      className="bg-indigo-600 text-white p-3 rounded-md"
      onClick={props.handleClick}
    >
      Add
    </button>
  );
};

export default AddButton;
