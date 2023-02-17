import React from "react";

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons-container" id="wheel" draggable="false">
        <button className="menu-button button">Menu</button>

        <div className="centre-buttons">
          <button className="prev-button button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8839/8839074.png"
              alt="prev"
            />
          </button>
          <button className="select-button button"></button>
          <button className="next-button button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9392/9392267.png"
              alt="next"
            />
          </button>
        </div>
        <button className="play-button button">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5725/5725942.png"
            alt="play/pause"
          />
        </button>
      </div>
    );
  }
}

export default Buttons;
