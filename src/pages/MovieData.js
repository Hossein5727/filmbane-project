import React, { useEffect, useState } from "react";

function MovieData() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      MovieData
    </div>
  );
}

export default MovieData;
