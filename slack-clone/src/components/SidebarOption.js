import React from "react";
import styled from "styled-components";

function SidebarOption({ Icon, title, addChannelOption }) {
  const addChannel = () => {};

  const selectChannel = () => {};
  return (
    <SidebarOptionContainer
      // if you have addChannelOption passed as a prop, trigger addChannel function, else, trigger selectChannel
      // option
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {/* If you pass in an icon, render the Icon out. "&&" is included in the case where no Icon is passed in */}
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {/* If the icon is found, render out the title, if icon not found, render out a # as the icon and render
      out the title*/}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.div``;
