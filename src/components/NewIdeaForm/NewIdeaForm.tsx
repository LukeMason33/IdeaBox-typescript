import React, {useState} from 'react';

type FormState = {
  title: string,
  description: string
}

const NewIdeaForm = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  return (
    <form className='idea-form'>
      <div className='input-section'>
        <label htmlFor='title'>Title</label>
        <input name='title' className='title' type='text' onChange={event => setTitle(event.target.value)}/>
      </div>
      <div className='input-section'>
        <label htmlFor='title'>Description</label>
        <input name='title' className='title' type='text'onChange={event => setDescription(event.target.value)}/>
      </div>
    </form>
  )
}

export default NewIdeaForm;
