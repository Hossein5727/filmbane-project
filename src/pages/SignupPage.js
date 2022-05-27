import React, { useEffect } from "react";

function SignupPage() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return <div>SignupPage</div>;
}

export default SignupPage;
