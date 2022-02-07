import { useState } from "react";

const Input = ({ onNote = () => {} }) => {
  const [note, setNote] = useState("");

  const onKeyup = (event) => {
    if (event.key === "Enter") {
      pushNote();
    }
  };

  const onInputChange = (event) => {
    setNote((prev) => event.target.value);
  };

  const pushNote = () => {
    if (onNote) onNote(note);
    setNote((prev) => "");
  };

  return (
    <div className="flex flex-row">
      <input
        value={note}
        onChange={onInputChange}
        onKeyUp={onKeyup}
        className="w-full"
        type="text"
        placeholder="Add new note here"
      />
      <button onClick={pushNote} className="ml-4 px-4" title="Add note">
        <i className="bi bi-check-lg text-xl text-green-600"></i>
      </button>
    </div>
  );
};

export default Input;
