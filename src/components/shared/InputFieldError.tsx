import { getInputFieldError, IInputErrorState } from "@/lib/getInputFieldError";
import { FieldError } from "../ui/field";

interface InputFieldErrorProps {
  field: string;
  state: IInputErrorState;
}

const InputFieldError = ({ field, state }: InputFieldErrorProps) => {
  const error = getInputFieldError(field, state);
  if (!error) return null;

  return <FieldError errors={[{ message: error }]} />;
};

export default InputFieldError;