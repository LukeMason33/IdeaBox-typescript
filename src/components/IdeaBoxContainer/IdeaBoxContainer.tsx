import React from 'react';
import IdeaBox from '../IdeaBox/IdeaBox';

type Props = {
  ideas: {
    title: string;
    description: string;
  }[]
};

type Idea = {
  title: string;
  description: string;
};

const IdeaBoxContainer = ({ideas}: Props) => {

  const createIdeaBoxes = () =>
    ideas.map((idea:Idea) => {
      return (
        < IdeaBox idea={idea} key={ideas.length}/>
      )
    })

  return (
    <>
      {createIdeaBoxes()}
    </>
  )
}

export default IdeaBoxContainer;
