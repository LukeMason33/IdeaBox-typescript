import React, {useState} from 'react';
import './NewIdeaForm.css';

type FormProps = {
  addIdea: any;
  ideas: any;
}

const NewIdeaForm = ({addIdea, ideas}: FormProps) => {
  const [description, setDescription] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const clearInputs = () => {
    setDescription('');
    setTitle('');
  }

  const submitIdea = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newIdea = {
      title: title,
      description: description
    }
    clearInputs();
    addIdea([...ideas, newIdea]);
  }

  return (
    <>
      <div className='text-line'>
        <h2><span className='form-title'>Create an Idea</span></h2>
      </div>
      <section className='form'>
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
        </form>
        <button className='submit-idea' onClick={submitIdea} >Submit</button>
      </section>
    </>
  )
}

export default NewIdeaForm;
