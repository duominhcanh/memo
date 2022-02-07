import { useState } from "react";

const Note = ({ value, remove = () => {}, edit = () => {} }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNewValue] = useState(value);

  return (
    <div className="flex flex-row cursor-pointer">
      {isEdit ? (
        <input
          value={newValue}
          onChange={(event) => setNewValue((prev) => event.target.value)}
          className="w-full"
          type="text"
          placeholder="Set new note value"
        />
      ) : (
        <span
          onClick={() => {
            setIsEdit((prev) => !prev);
          }}
          className="flex-grow"
          title="Double click to edit"
        >
          {value}
        </span>
      )}
      <div className="flex flex-row space-x-2">
        {isEdit ? (
          <button
            onClick={() => {
              edit(value, newValue);
              setIsEdit((prev) => !prev);
            }}
            className="ml-4 px-4"
          >
            <i className="bi bi-check-lg text-xl text-green-600"></i>
          </button>
        ) : (
          <button
            onClick={() => {
              remove(value);
            }}
            className="ml-4 px-4"
          >
            <i className="text-red-600 bi bi-x text-2xl"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Note;
