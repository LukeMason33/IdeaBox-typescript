import React from 'react';

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
        <>
          <p>{idea.title}</p>
          <p>{idea.description}</p>
        </>
      )
    })

  return (
    <>
      {createIdeaBoxes()}
    </>
  )
}

export default IdeaBoxContainer;
