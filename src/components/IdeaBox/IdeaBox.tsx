import React from 'react';
import './IdeaBox.css';

type Props = {
  idea: {
    title: string;
    description: string;
  };
  deleteIdea: any;
};

const IdeaBox = ({idea, deleteIdea}: Props) => {

  const deleteIdeaBox = () => {
    deleteIdea(idea);
  }

  return (
    <article className='idea-box'>
      <div className='idea-title-container'>
        <h3 className='idea-box-title'>{idea.title}</h3>
      </div>
      <p className='idea-box-description'>{idea.description}</p>
      <div className='idea-button-container'>
        <button className='delete-btn' onClick={deleteIdeaBox}>Delete Idea</button>
      </div>
    </article>
  )
}

export default IdeaBox;
