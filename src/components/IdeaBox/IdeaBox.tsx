import React from 'react';

type Props = {
  idea: {
    title: string;
    description: string;
  }
};

const IdeaBox = ({idea}: Props) => {
  return (
    <article className='idea-box'>
      <h2 className='idea-box-title'>{idea.title}</h2>
      <p className='idea-box-description'>{idea.description}</p>
    </article>
  )
}

export default IdeaBox;
