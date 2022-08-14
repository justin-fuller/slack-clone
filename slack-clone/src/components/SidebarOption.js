import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Please Enter the Channel Name");

    if (channelName) {
      //if channelName has a value, add a room with the channelName we just collected from the prompt
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    // if id is passed through as a prop, dispatch an id value to the global store
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
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

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
