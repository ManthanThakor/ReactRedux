import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// Correct import for MdDeleteForever from react-icons
import { MdDeleteForever } from "react-icons/md";

const DisplayUser = () => {
  const data = useSelector((state) => state.users);

  return (
    <Wrapper>
      {data.length === 0 ? (
        <p className="no-found">No users found ⚠︎</p>
      ) : (
        data.map((user, id) => {
          return (
            <li key={id}>
              <h3>{user}</h3>
              <button onClick={() => DeleteAllUser()}>
                <MdDeleteForever className="delete-icon" />
              </button>
            </li>
          );
        })
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .no-found {
    text-align: left;
    color: red;
    padding-bottom: 10px;
    font-size: 20px;
  }

  li {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    margin: 0;
    font-size: 1.6rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .delete-icon {
    color: red;
    font-size: 1.5rem;
  }
`;

export default DisplayUser;
