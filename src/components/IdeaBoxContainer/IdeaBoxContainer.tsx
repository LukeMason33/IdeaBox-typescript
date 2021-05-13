import React from 'react';
import IdeaBox from '../IdeaBox/IdeaBox';

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
    <>
      {createIdeaBoxes()}
    </>
  )
}

export default IdeaBoxContainer;
