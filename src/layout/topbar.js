import React, { useEffect, useState } from "react";

function Topbar(props) {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      console.log(window.location.hash);
    };

    // 해시 변경을 감지하는 이벤트 리스너 등록
    window.addEventListener("hashchange", handleHashChange);

    // 컴포넌트 언마운트 시 이벤트 리스너 해제
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="topbar">
      <div className={currentHash === "#1" ? "bold underline" : ""}>MAIN</div>
      <div
        className={
          currentHash === "#2" || currentHash === "#3" || currentHash === "#4"
            ? "bold underline"
            : ""
        }
      >
        INTRO
      </div>
      <div>SERVICE</div>
      <div>CUSTOMER</div>
      <div>CONTACT US</div>
    </div>
  );
}

export default Topbar;
