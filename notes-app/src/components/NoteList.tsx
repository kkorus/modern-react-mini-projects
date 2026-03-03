import NoteComponent from './Note';
import type { Note } from '../App';

function NoteList({
  notes,
  onDeleteNote,
}: {
  notes: Note[];
  onDeleteNote: (id: string) => void;
}) {
  if (!notes.length) {
    return <p className="text-center text-gray-500">No notes found</p>;
  }

  return (
    <ul className="space-y-6">
      {notes.map((note) => (
        <NoteComponent key={note.id} note={note} onDeleteNote={onDeleteNote} />
      ))}
    </ul>
  );
}

export default NoteList;
