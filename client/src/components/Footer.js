import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  background-color: #262626;
  color: #5d5d5d;
  padding: 33px 22px 0 22px;
  line-height: 30px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr;
  justify-items: center;
  margin-top: 35px;

  .copy {
    margin-top: 35px;
    grid-column: span 2;
  }

  h3 {
    color: #c9c9c9;
    font-size: 26px;
  }
  p {
    font-size: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 20px;
  }

  a {
    text-decoration: none;
    color: #8d8e8e;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Footer = (props) => {
  return (
    <FooterStyles>
      <div>
        <h3>About</h3>
        <p>
          <i>Daily Album Art</i> is a website which displays cool and/or
          interesting album art. Each day, a new album art is generated along
          with a little info about the album itself. The album art is curated by
          me but what the hell do I know? I'm just an idiot who listens to music
          when I build websites so I thought... why not combine the two? The
          site is powered by the{" "}
          <a
            href="https://developer.spotify.com/documentation/web-api/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify Web API
          </a>
          &nbsp;and if you wanna take a look at the code, you can find that on
          my{" "}
          <a
            href="https://github.com/eugene-robb/daily-album-art"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . Anyway, enough of this chitchat, go ahead and hit that shuffle button and take
          this baby for a spin.
        </p>
        <p>Because album art is cool, right?</p>
      </div>
      <div>
        <h3>Links</h3>
        <ul>
          <li>
            <a
              href="https://twitter.com/eugene_robb"
              target="_blank"
              rel="noopener noreferrer"
              title="Tweet me"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/eugene-robb"
              target="_blank"
              rel="noopener noreferrer"
              title="Have a look my GitHub"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <p className="copy">Eugene Robb &copy; {new Date().getFullYear()}</p>
    </FooterStyles>
  );
};
