import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  background-color: #262626;
  color: #5d5d5d;
  padding: 33px 35px 0 45px;
  line-height: 30px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr;
  justify-items: center;
  margin-top: 45px;

  .copy{
    margin-top: 35px;
    grid-column: span 2;
  }

  h3{
    color: #c9c9c9;
    font-size: 26px;
  }
  p {
    font-size:20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 20px
  }

  a {
    text-decoration: none;
    color: #5d5d5d;
  }

  a:hover {
    text-decoration: underline;
  }

`;

export const Footer = (props) => {
  return (
    <FooterStyles>
      <div>
        <h3>Daily Album Art</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae iusto eveniet cumque voluptatem, veritatis itaque in, doloremque nulla corrupti quibusdam saepe aliquid maiores. Quas, veritatis accusantium repellendus architecto voluptatibus aspernatur in magni, at laborum labore numquam voluptate nam eaque error consequuntur debitis totam fugit, distinctio natus suscipit ad! Vel ullam officia corporis nesciunt. Incidunt, omnis. Quos dolores esse sed nihil animi! Non, ut. Quaerat quae, sit fugiat ullam animi optio, explicabo exercitationem quisquam expedita repellendus nesciunt ex. Ipsum suscipit nam quidem ullam, delectus voluptatem maxime, ut autem quod tempora voluptas.
          Aliquam culpa voluptate reiciendis praesentium impedit sequi dolorem illum.</p>
      </div>
      <div>

        <h3>Links</h3>
        <ul>
          {/* <li><a href="">About</a></li> */}
          <li><a href="https://twitter.com/eugene_robb" target="_blank" rel="noopener noreferrer" title="Hit me up on Twitter!">Twitter</a></li>
          <li><a href="https://github.com/eugene-robb" target="_blank" rel="noopener noreferrer" title="Have a look my GitHub">GitHub</a></li>
        </ul>
      </div>
      <p className="copy">Eugene Robb &copy; {new Date().getFullYear()}</p>

    </FooterStyles>

  );
};
