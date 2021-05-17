import React from 'react';
import IdeaBox from '../IdeaBox/IdeaBox';
import './IdeaBoxContainer.css';

type Props = {
  ideas: {
    title: string;
    description: string;
  }[];
  deleteIdea: any;
};

type Idea = {
  title: string;
  description: string;
};

const IdeaBoxContainer = ({ideas, deleteIdea}: Props) => {

  const createIdeaBoxes = () =>
    ideas.map((idea:Idea) => {
      return (
        < IdeaBox
          idea={idea}
          key={ideas.indexOf(idea)}
          deleteIdea={deleteIdea}
        />
      )
    })

  return (
    <section className='ideas'>
      <div className='text-line'>
        <h2><span className='section-title'>My Ideas</span></h2>
      </div>
      <div className='my-ideas-container'>
        {createIdeaBoxes()}
      </div>
    </section>
  )
}

export default IdeaBoxContainer;
