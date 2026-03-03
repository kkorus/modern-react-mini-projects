import { useState } from 'react';
import type { Note } from '../App';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

interface NoteFormProps {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: '',
    category: '',
    description: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (
      !formData.title ||
      !formData.priority ||
      !formData.category ||
      !formData.description
    ) {
      return;
    }

    const newNote: Note = {
      id: Date.now().toString(),
      ...formData,
    };
    setNotes([...notes, newNote]);

    // Reset form data
    setFormData({ title: '', priority: '', category: '', description: '' });
  };

  return (
    <>
      <button
        type="button"
        className="w-full p-2 rounded-md bg-blue-500 text-white mb-4 cursor-pointer hover:bg-blue-600 transition-colors"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? 'Hide Form (X)' : 'Add New Note ( + )'}
      </button>
      {isFormVisible && (
        <form className="mb-6" onSubmit={handleSubmit}>
          <TextInput
            label="Title"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            required
            onChange={handleChange}
          />
          <SelectInput
            label="Priority"
            name="priority"
            options={['low', 'medium', 'high']}
            value={formData.priority}
            placeholder="Select Priority"
            required
            onChange={handleChange}
          />
          <SelectInput
            label="Category"
            name="category"
            options={['personal', 'work', 'other']}
            value={formData.category}
            placeholder="Select Category"
            required
            onChange={handleChange}
          />
          <TextAreaInput
            label="Description"
            name="description"
            placeholder="Enter description"
            value={formData.description}
            required
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full p-2 rounded-md bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors"
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
