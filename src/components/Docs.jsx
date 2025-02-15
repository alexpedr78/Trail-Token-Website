import React, { useState } from "react";

function Docs() {
  // White paper sections
  const whitePaperSections = [
    {
      title: "Executive Summary",
      content:
        "Token Trail is a groundbreaking visit-to-earn game that combines geolocation, augmented reality (AR), and blockchain technology to encourage players to explore the real world. Built with React Native and leveraging the Solana blockchain, this game offers players daily challenges to visit physical locations, complete AR-based tasks, and earn tradable Visit Tokens. Our unique tokenomics incentivize early adoption while fostering engagement with local landmarks and businesses.",
    },
    {
      title: "Problem Statement",
      content:
        "In today’s digital age, sedentary lifestyles are becoming increasingly prevalent, leading to various health issues and a disconnect from the physical environment. Traditional mobile games often contribute to this sedentary behavior. Additionally, there’s a growing interest in integrating blockchain technology with gaming to provide tangible rewards and ownership to players.",
    },
    {
      title: "Core Gameplay",
      content:
        "Players connect their Solana wallet and play one round daily. They select from three difficulty levels: Easy (1–5 km away), Medium (5–10 km away, with double rewards), and Hard (15–20 km away, with triple rewards). Players receive a geolocation point on a map, reach the location, switch to AR mode, tap a virtual object, upload a photo, and earn Visit Tokens (1 for Easy, 2 for Medium, 3 for Hard).",
    },
    {
      title: "Tokenomics",
      content:
        "To incentivize early participation, the token rewards follow a halving mechanism: Token Reward = Base Reward / 2 ^ ⌊ Total Tokens Minted / 1,000,000 ⌋. Every 1 million tokens minted reduces rewards per round by half. Visit Tokens are tradable for Solana (SOL) once 1 million tokens are minted. Partnerships with local businesses may offer discounts or exclusive perks to players using Visit Tokens. Token holders can vote on seasonal themes, new AR objects, and additional landmarks, ensuring a decentralized approach to updates.",
    },
    {
      title: "Anti-Cheating Measures",
      content:
        "To ensure fair gameplay, we implement GPS Drift Detection, Trusted Location APIs, Multi-Factor Validation (photo uploads, AR interaction), Human Verification (CAPTCHAs), Behavioral Analysis, and a Photo Review System. Tokens earned through detected cheating will be burned, and cheaters may face account suspension.",
    },
    {
      title: "Partnerships and Monetization",
      content:
        "Partnerships include local businesses (drive foot traffic, offer discounts), tourism organizations (promote landmarks, AR culture highlights), and global brands (sponsor premium locations and themed AR objects). Monetization strategies include token trading (fees on Visit Token trades), sponsored locations (businesses pay for placements), and premium features (cosmetic upgrades, exclusive challenges).",
    },
    {
      title: "Roadmap",
      content:
        "Phase 1 (Development & Alpha Testing - 2 months): Build core features (geolocation, AR, Solana wallet integration) and launch small-scale testing. Phase 2 (Beta Release - 4 months): Expand location database and onboard initial partnerships. Phase 3 (Public Launch - 6 months): Global release, introduce trading, and implement sponsored content.",
    },
    {
      title: "Conclusion",
      content:
        "Token Trail merges physical activity, augmented reality, and blockchain into a dynamic and rewarding experience. By incentivizing exploration and interaction with digital spaces, the game promotes a healthy lifestyle and bridges the gap between virtual and physical worlds. Business partnerships and community engagement further amplify its potential, creating a vibrant ecosystem of players and real-world interactions.",
    },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const goToPreviousSection = () => {
    setCurrentSectionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const goToNextSection = () => {
    setCurrentSectionIndex((prevIndex) =>
      prevIndex < whitePaperSections.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

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
      <h4>Token Trail White Paper</h4>
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
