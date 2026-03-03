import type { Note as NoteType } from '../App';

interface NoteProps {
  note: NoteType;
  onDeleteNote: (id: string) => void;
}

const Note: React.FC<NoteProps> = ({ note, onDeleteNote }) => {
  return (
    <li
      key={note.id}
      className="bg-gradient-to-tr from-blue-50 via-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 transition-all hover:shadow-xl"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-gray-800">{note.title}</h3>
        <span
          className={`
					text-xs font-semibold px-3 py-1 rounded-full
					${
            note.priority === 'high'
              ? 'bg-red-100 text-red-700'
              : note.priority === 'medium'
                ? 'bg-yellow-100 text-yellow-700'
                : note.priority === 'low'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-400'
          }
				`}
        >
          {note.priority.charAt(0).toUpperCase() + note.priority.slice(1)}
        </span>
      </div>
      <p className="mb-3 text-gray-700 whitespace-pre-wrap">
        {note.description}
      </p>
      <div className="flex items-center justify-between text-sm">
        <span
          className={`
					inline-block px-2 py-0.5 rounded
					${
            note.category === 'personal'
              ? 'bg-blue-100 text-blue-600'
              : note.category === 'work'
                ? 'bg-purple-100 text-purple-600'
                : note.category === 'other'
                  ? 'bg-gray-200 text-gray-600'
                  : 'bg-gray-100 text-gray-500'
          }
				`}
        >
          {note.category.charAt(0).toUpperCase() + note.category.slice(1)}
        </span>
        <span className="text-gray-400 text-xs">#{note.id}</span>
        <button
          type="button"
          className="ml-3 px-2 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200 transition"
          onClick={() => {
            if (
              typeof window !== 'undefined' &&
              window.confirm('Delete this note?')
            ) {
              if (typeof onDeleteNote === 'function') {
                onDeleteNote(note.id);
              }
            }
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Note;
