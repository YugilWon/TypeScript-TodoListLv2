import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

function TopBar() {
  return (
    <TopBarContainer>
      <div className="MyList">
        <h2>Personal Todo List</h2>
      </div>
      <h2>리에잇트!</h2>
    </TopBarContainer>
  );
}

export default TopBar;
