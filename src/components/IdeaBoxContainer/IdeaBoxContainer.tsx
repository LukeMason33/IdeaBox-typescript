import React from 'react';

type Props = {
  ideas: any;
}

const IdeaBoxContainer = ({ideas}: Props) => {

  const createIdeaBoxes = () =>
    ideas.map((idea:any) => {
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
