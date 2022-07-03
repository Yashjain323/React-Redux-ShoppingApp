import React from "react";

const Header = () => {
  return (
    <div className="myHeader">
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2 className="fakeShop">FakeShop</h2>
          <ul>
            <li>
              <a href="default.asp">Home</a>
            </li>
            <li>
              <a href="news.asp">News</a>
            </li>
            <li>
              <a href="contact.asp">Contact</a>
            </li>
            <li>
              <a href="about.asp">About</a>
            </li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Header;
