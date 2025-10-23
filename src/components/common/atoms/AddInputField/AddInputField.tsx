import { forwardRef, type Ref } from "react";

const AddInputField = forwardRef((props, ref) => {
  return (
    <input
      type="text"
      placeholder="Apa yang ingin kamu lakukan?"
      className="p-3 border-1 border-gray-100 rounded-md w-full"
      ref={ref as Ref<HTMLInputElement>}
      {...props}
    />
  );
});

export default AddInputField;
