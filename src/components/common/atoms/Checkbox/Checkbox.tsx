type Props = {
  onChange: () => void;
};

const Checkbox = (props: Props) => {
  return (
    <label>
      <input type="checkbox" name="" id="" onChange={props.onChange} />
    </label>
  );
};

export default Checkbox;
