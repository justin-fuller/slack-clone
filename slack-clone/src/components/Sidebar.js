import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";

function Sidebar() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>JF Technologies</h2>
          <h3>
            <FiberManualRecordIcon />
            Ruth Ann Carlson
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>
    </SideBarContainer>
  );
}

export default Sidebar;

const SideBarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  /* Targeting the CreateIcon */
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  /* Targeting the FiberManualRecordIcon in the h3 in SideBarInfo */
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
