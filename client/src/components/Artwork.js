import React, { useState, useEffect } from "react";
import { Direction } from "./Direction";
import { Spotify } from "@styled-icons/boxicons-logos/Spotify";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import moment from "moment";

import { GET_ALBUM_QUERY } from "../queries/queries";
import { Loading } from "./Loading";

const ArtworkStyles = styled.div`
  grid-area: main;
  grid-column-start: back;
  grid-column-end: random;

  section {
    display: grid;
    grid-template-columns: ${(props) =>
      props.displayDirection ? "1fr 4fr 1fr" : "auto"};
    align-items: center;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4) 0,
        rgba(0, 0, 0, 0.65) 70%
      ),
      ${(props) => `url(${props.url})`};
    background-size: cover;
    padding: 50px 0;
  }

  img {
    border: solid black 2px;
    justify-self: center;
    max-width: 100%;
    height: auto;
  }

  article {
    text-align: center;
    margin: 0 10%;

    h4 {
      font-size: 16px;
      color: #5d5d5d;
      padding: 0;
      margin: 15px 0 2px 0;
    }

    h3 {
      border-bottom: 1px solid #000;
      border-top: 1px solid #000;
      padding: 7px 0;
      font-style: italic;
      font-weight: normal;
      color: red;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 0;
    }

    img {
      grid-row: 1;
      grid-column: 1 / span 3;
      border: none;
      border-bottom: solid black 2px;
    }

    section > div:nth-child(1) {
      grid-row: 1;
      grid-column: 1;
      z-index: 1;
    }

    section > div:nth-child(3) {
      grid-row: 1;
      grid-column: 3;
    }
  }
`;

const SpotifyIcon = styled(Spotify)`
  color: #1db954;
`;

export const Artwork = ({
  display,
  today,
  handleUpdateAlbum,
  todaysAlbumDate,
  displayDirections,
  isDateDisplay,
  handleUpdateDisplayDate,
}) => {
  const [isPreviousHidden, setPreviousHidden] = useState(false);
  const [isNextHidden, setNextHidden] = useState(true);

  useEffect(() => {
    if (!displayDirections) {
      setPreviousHidden(true);
      setNextHidden(true);
    } else {
      setPreviousHidden(false);
      setNextHidden(true);
    }
  }, [displayDirections]);

  const { data, loading } = useQuery(GET_ALBUM_QUERY, {
    variables: { display },
  });

  if (loading) return <Loading />;

  const {
    artist,
    album,
    total_tracks,
    url,
    release_date,
    img_large,
  } = data.album;

  const handleDirection = (direction) => {
    if (direction === "Previous") {
      setNextHidden(false);
      handleUpdateAlbum(display - 1);
      handleUpdateDisplayDate(moment(todaysAlbumDate).subtract(1, "days"));

      if (display === 1) {
        setPreviousHidden(true);
      }
    }

    if (direction === "Next") {
      setPreviousHidden(false);
      handleUpdateAlbum(display + 1);
      handleUpdateDisplayDate(moment(todaysAlbumDate).add(1, "days"));

      if (display === today - 1) {
        setNextHidden(true);
      }
    }
  };

  return (
    <ArtworkStyles displayDirection={displayDirections} url={img_large}>
      <section>
        {!isPreviousHidden ? (
          <Direction handleDirection={handleDirection} direction="Previous" />
        ) : (
          <div />
        )}
        <img alt={album} src={img_large} />
        {!isNextHidden && (
          <Direction handleDirection={handleDirection} direction="Next" />
        )}
      </section>
      <article>
        {isDateDisplay && <h4>{todaysAlbumDate.format("MMMM DD")}</h4>}
        <h1>{album}</h1>
        <h3>{artist}</h3>
        <p>{release_date}</p>
        <p>Total Tracks: {total_tracks}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <SpotifyIcon size={45} />
        </a>
      </article>
    </ArtworkStyles>
  );
};
