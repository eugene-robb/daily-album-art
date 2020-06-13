import React, { useState, useEffect } from "react";
import moment from "moment";
import { Back } from "@styled-icons/entypo/Back";
import styled from "styled-components";

import { Artwork } from "./Artwork";
import { Random } from "./Random";

import { useQuery } from "@apollo/react-hooks";
import { GET_PLAYLIST_TOTAL } from "../queries/queries";

const MainStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: "back main random";
`;

const BackButton = styled(Back)`
  background-color: white;
  grid-area: back;
  align-self: start;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Main = () => {
  const FROM_DATE = moment("13-05-2020", "DD-MM-YYYY");
  const CURRENT_DATE = moment().startOf("day");
  const today = moment.duration(CURRENT_DATE.diff(FROM_DATE)).asDays();
  const [DISPLAY_DATE, setDisplayDate] = useState(today);
  const [isDisplayDirections, setDisplayDirections] = useState(true);
  const [isBackDisplay, setBackDisplay] = useState(false);

  const { data, loading, error } = useQuery(GET_PLAYLIST_TOTAL);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleUpdateAlbum = (newAlbum) => {
    if (newAlbum !== today) {
      setBackDisplay(true);
    }
    setDisplayDate(newAlbum);
  };

  const handleDirectionDisplay = (shouldDisplay) => {
    setDisplayDirections(shouldDisplay);
  };

  const handleBack = () => {
    handleUpdateAlbum(today);
    handleDirectionDisplay(true);
    setBackDisplay(false);
  };

  return (
    <MainStyles>
      <Artwork
        handleUpdateAlbum={handleUpdateAlbum}
        display={DISPLAY_DATE}
        today={today}
        displayDirections={isDisplayDirections}
      />
      {isBackDisplay && <BackButton size={35} onClick={handleBack} />}
      <Random
        handleUpdateAlbum={handleUpdateAlbum}
        handleDirectionDisplay={handleDirectionDisplay}
        display={DISPLAY_DATE}
        today={today}
        total={data.playlist.playlist_total}
      />
    </MainStyles>
  );
};
