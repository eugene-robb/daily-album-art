import React, { useState } from "react";
import { Shuffle } from "@styled-icons/entypo/Shuffle";
import styled from "styled-components";

const RandomButton = styled.button`
  grid-area: random;
  justify-self: end;
  align-self: start;
  margin-top: 10px;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Random = ({
  total,
  today,
  handleUpdateAlbum,
  handleDirectionDisplay,
  setBackDisplay,
}) => {
  const albumArray = [...Array(parseInt(total)).keys()];

  //remove todays album from array
  albumArray.splice(today, 1);

  const [totalAlbumList, setTotalAlbumList] = useState(albumArray);

  const handleRandomAlbum = () => {
    handleDirectionDisplay(false);
    // setBackDisplay(true)

    const newTotalAlbumList = [...totalAlbumList];
    let newRandomAlbum = [];
    const randomAlbumIndex = Math.floor(
      newTotalAlbumList.length * Math.random()
    );

    if (newTotalAlbumList.length === 0) {
      //TODO
      console.log("end of list - restart array");
    } else {
      newRandomAlbum = newTotalAlbumList.splice(randomAlbumIndex, 1);
      setTotalAlbumList(newTotalAlbumList);
    }

    handleUpdateAlbum(newRandomAlbum[0]);
  };

  return (
    <RandomButton>
      <Shuffle size={35} onClick={handleRandomAlbum} />
    </RandomButton>
  );
};
