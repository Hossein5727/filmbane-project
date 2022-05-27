import React, { useCallback, useEffect, useState } from "react";

function MovieData() {
  const [isType, setIsType] = useState(false);

  useEffect(() => {
    captureSpace();

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    return () => {
      captureSpace();
    };
  }, []);

  const captureSpace = useCallback(
    (event) => {
      document.body.addEventListener("keypress", (event) => {
        if (event.keyCode === 32) {
          setIsType(true);
        }
      });

      document.body.addEventListener("keyup", (event) => {
        if (event.keyCode === 32) {
          setIsType(false);
        }
      });
    },
    [isType]
  );

  return (
    <div className="text-black bg-red-600 pt-[80px]">
      <p>MovieData</p>
      {isType && <p>Fuck you mean</p>}
    </div>
  );
}

export default MovieData;
