import React, {useState} from 'react';

type FormState = {
  title: string,
  description: string
}

const NewIdeaForm = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const clearInputs = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setDescription('');
    setTitle('');
  }

  return (
    <form className='idea-form'>
      <div className='input-section'>
        <label htmlFor='title'>Title</label>
        <input
          name='title'
          className='title'
          type='text'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>
      <div className='input-section'>
        <label htmlFor='title'>Description</label>
        <input
          name='title'
          className='title'
          type='text'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </div>
      <button className='submit-idea' onClick={clearInputs}>Submit</button>
    </form>
  )
}

export default NewIdeaForm;
