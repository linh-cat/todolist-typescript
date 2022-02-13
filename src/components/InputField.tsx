import React, { useRef } from "react";
import "./styles.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        className="input_submit"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit" className="btn_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
