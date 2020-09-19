import React from 'react';
import './Header.css'
// import { Container } from './styles';

function components({black}) {
  return (
      <header className={black ? 'black' : ''}>
          <div className="header--logo">
              <a href="/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="logo"/>
              </a>
          </div>
          <div className="header--user">
              <a href="/">
                  <img src="https://avatars2.githubusercontent.com/u/67077847?s=460&u=ff68173fbf35b2fff21cefc891f42b4df45a0e15&v=4" alt="user"/>
              </a>
          </div>
      </header>
  );
}

export default components;