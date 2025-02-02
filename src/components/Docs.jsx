import React, { useState } from "react";

function Docs() {
  // Array of white paper sections
  const whitePaperSections = [
    {
      title: "Introduction",
      content: "This is the introduction section of the white paper.",
    },
    {
      title: "Problem Statement",
      content: "This section discusses the problem being addressed.",
    },
    {
      title: "Solution",
      content: "This section explains the proposed solution.",
    },
    {
      title: "Implementation",
      content: "This section covers the implementation details.",
    },
    {
      title: "Conclusion",
      content: "This is the conclusion of the white paper.",
    },
  ];

  // State to track the current section index
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Function to go to the previous section
  const goToPreviousSection = () => {
    setCurrentSectionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  // Function to go to the next section
  const goToNextSection = () => {
    setCurrentSectionIndex((prevIndex) =>
      prevIndex < whitePaperSections.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  // Get the previous and next section titles
  const previousSectionTitle =
    currentSectionIndex > 0
      ? whitePaperSections[currentSectionIndex - 1].title
      : null;

  const nextSectionTitle =
    currentSectionIndex < whitePaperSections.length - 1
      ? whitePaperSections[currentSectionIndex + 1].title
      : null;

  return (
    <div>
      <h4>White Paper</h4>
      <div className="card-HomePage">
        <h2>{whitePaperSections[currentSectionIndex].title}</h2>
        <p>{whitePaperSections[currentSectionIndex].content}</p>
      </div>
      <div className="navigation-buttons">
        <button
          className="button-regular"
          onClick={goToPreviousSection}
          disabled={currentSectionIndex === 0}
        >
          {previousSectionTitle ? `← ${previousSectionTitle}` : "Previous"}
        </button>
        <button
          className="button-regular"
          onClick={goToNextSection}
          disabled={currentSectionIndex === whitePaperSections.length - 1}
        >
          {nextSectionTitle ? `${nextSectionTitle} →` : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Docs;
