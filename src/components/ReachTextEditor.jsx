import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [text, setText] = useState(localStorage.getItem('richText') || '');

  const handleChange = (value) => {
    setText(value);
    localStorage.setItem('richText', value);
  };

  return <ReactQuill value={text} onChange={handleChange} />;
};

export default RichTextEditor;
