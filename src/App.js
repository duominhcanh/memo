import Input from "./components/Input";
import "./App.css";
import { useState } from "react";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  const removeNote = (note) => {
    setNotes((prev) => [...prev.filter((e) => e !== note)]);
  };

  const editNote = (oldValue, newValue) => {
    const index = notes.findIndex((e) => e === oldValue);
    notes[index] = newValue;
    setNotes((prev) => [...prev]);
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col p-4">
      <div className="box">
        <Input onNote={addNote} />
      </div>
      <div className="flex flex-col flex-grow">
        {notes.map((note, i) => {
          return (
            <div key={i} className="box mt-2">
              <Note value={note} remove={removeNote} edit={editNote} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
