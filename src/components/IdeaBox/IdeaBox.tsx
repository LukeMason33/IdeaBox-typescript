import React from 'react';

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
      <h2 className='idea-box-title'>{idea.title}</h2>
      <p className='idea-box-description'>{idea.description}</p>
      <button className='delete-btn' onClick={deleteIdeaBox}>Delete Idea</button>
    </article>
  )
}

export default IdeaBox;
