"use client";

import React, { useContext, useEffect, useState } from "react";

type StateContextType = {
  galleryState: {
    scrollY: number;
    currentSlide: number;
  };
  setGalleryState: React.Dispatch<
    React.SetStateAction<{
      scrollY: number;
      currentSlide: number;
    }>
  >;
};

const StateContext = React.createContext<StateContextType>({
  galleryState: {
    scrollY: 0,
    currentSlide: 0,
  },
  setGalleryState: () => {},
});

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [galleryState, setGalleryState] = useState({
    scrollY: 0,
    currentSlide: 0,
  });

  return (
    <StateContext.Provider
      value={{
        galleryState,
        setGalleryState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
