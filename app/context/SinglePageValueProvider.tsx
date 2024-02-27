"use client";

import React, { useContext, useState } from "react";

type SinglePageValueContextType = {
  photo: string;
  setPhoto: React.Dispatch<React.SetStateAction<string>>;
  video: string;
  setVideo: React.Dispatch<React.SetStateAction<string>>;
};

const SinglePageValueContext = React.createContext<SinglePageValueContextType>({
  photo: "",
  setPhoto: () => {},
  video: "",
  setVideo: () => {},
});

export const useSinglePageValueContext = () =>
  useContext(SinglePageValueContext);

export const SinglePageValueProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [photo, setPhoto] = useState("");
  const [video, setVideo] = useState("");

  return (
    <SinglePageValueContext.Provider
      value={{
        photo,
        setPhoto,
        video,
        setVideo,
      }}
    >
      {children}
    </SinglePageValueContext.Provider>
  );
};
