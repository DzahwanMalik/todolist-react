type Props = {
  hadleClick: () => void;
};

const RemoveButton = ({ hadleClick }: Props) => {
  return (
    <button
      className="bg-red-600 text-white p-3 rounded-md"
      onClick={hadleClick}
    >
      Remove
    </button>
  );
};

export default RemoveButton;
