import React, { useState } from "react";
import moment from "moment";
import { Back } from "@styled-icons/entypo/Back";
import styled from "styled-components";

import { Artwork } from "./Artwork";
import { Random } from "./Random";
import { Loading } from "./Loading";

import { useQuery } from "@apollo/react-hooks";
import { GET_PLAYLIST_TOTAL } from "../queries/queries";

const MainStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas: "back main random";
`;

const BackButton = styled.button`
  grid-area: back;
  justify-self: start;
  align-self: start;
  margin-top: 10px;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Main = () => {
  const FROM_DATE = moment("01-07-2020", "DD-MM-YYYY");
  const CURRENT_DATE = moment().startOf("day");
  const today = moment.duration(CURRENT_DATE.diff(FROM_DATE)).days();
  const [DISPLAY_DATE, setDisplayDate] = useState(today);
  const [isDateDisplay, setDateDisplay] = useState(true);
  const [todaysAlbumDate, setTodaysAlbumDate] = useState(moment());
  const [showButton, setShowButton] = useState({
    previous: true,
    forward: false,
    back: false,
  });

  const { data, loading, error } = useQuery(GET_PLAYLIST_TOTAL);
  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const handleButtonDisplay = (buttonName, display) => {
    setShowButton(previousState => ({
      ...previousState,
      [buttonName]: display
    }))
  }

  const handleUpdateAlbum = (newAlbum) => {
    if (newAlbum !== today) {
      handleButtonDisplay('back', true)
    }
    console.log(newAlbum);
    setDisplayDate(newAlbum);
  };

  const handleUpdateDisplayDate = (newDate) => {
    setTodaysAlbumDate(newDate);
  };

  const handleDisplayDate = () => {
    setDateDisplay(false);
  };

  const handleBack = () => {
    handleUpdateAlbum(today);
    handleButtonDisplay('back', false)
    handleButtonDisplay('forward', false)
    handleButtonDisplay('previous', true)
    setDateDisplay(true);
    setTodaysAlbumDate(moment());
  };

  return (
    <MainStyles>
      <Artwork
        handleUpdateAlbum={handleUpdateAlbum}
        todaysAlbumDate={todaysAlbumDate}
        display={DISPLAY_DATE}
        today={today}
        handleUpdateDisplayDate={handleUpdateDisplayDate}
        isDateDisplay={isDateDisplay}
        handleButtonDisplay={handleButtonDisplay}
        showButton={showButton}
      />
      {showButton.back && (
        <BackButton onClick={handleBack}>
          <Back size={35} />
        </BackButton>
      )}
      <Random
        handleUpdateAlbum={handleUpdateAlbum}
        handleButtonDisplay={handleButtonDisplay}
        handleDisplayDate={handleDisplayDate}
        display={DISPLAY_DATE}
        today={today}
        total={data.playlist.playlist_total}
      />
    </MainStyles>
  );
};
