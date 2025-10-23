import { forwardRef } from "react";

const AddPriority = forwardRef<HTMLSelectElement>((props, ref) => {
  return (
    <select
      name=""
      id=""
      ref={ref}
      {...props}
      className="w-full"
    >
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
  );
});

export default AddPriority;
