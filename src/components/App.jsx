import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createCard(emojiInfo) {
  return (
    <Entry
      key={emojiInfo.id}
      emoji={emojiInfo.emoji}
      name={emojiInfo.name}
      meaning={emojiInfo.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
