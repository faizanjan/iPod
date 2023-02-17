import React from "react";
// import MainMenu from "./MainMenu";
class Display extends React.Component {
  render() {
    let { mainMenu, coverFlow, music, games, settings } = this.props.menuItems;
    let { handleButtonClick, navigate } = this.props;
    return (
      <div className="display" draggable="false">
        {mainMenu && (
          <ul
            className="main-menu"
            onMouseDown={handleButtonClick}
            onMouseUp={navigate}
          >
            <h2> iPod.js </h2>
            <li
              className="menu-item cover-flow active"
              data-navigate="coverFlow"
            >
              Cover Flow
            </li>
            <li className="menu-item music" data-navigate="music">
              Music
            </li>
            <li className="menu-item games" data-navigate="games">
              Games
            </li>
            <li className="menu-item settings" data-navigate="settings">
              Settings
            </li>
          </ul>
        )}
        {coverFlow && (
          <img
            className="menu-img"
            src="https://www.cultofmac.com/wp-content/uploads/2010/10/post-61758-image-221f26e399e464c71248d2528ef2eeaf.jpg"
          />
        )}
        {music && (
          <img
            className="menu-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkM-C_Kg3MxSycfzTGXrcxsLKA311g9Sd5YQ&usqp=CAU"
          />
        )}
        {games && (
          <img
            className="menu-img"
            src="https://imageio.forbes.com/specials-images/imageserve/61f2cd47ed2d88f6ccaa4d82/0x0.jpg?format=jpg&crop=2373,1582,x0,y51,safe&wclassNamethmenu1200"
          />
        )}
        {settings && (
          <img
            className="menu-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTEp8HsOCzStCnx21yS5Vo4y_G-2iBTBXPQ&usqp=CAU"
          />
        )}
      </div>
    );
  }
}

export default Display;
