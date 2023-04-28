import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "./userSlice";
import { nanoid } from "nanoid";

const UserView = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [updateUserName, setUpdateUserName] = useState("");
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="your user name..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <button
          onClick={() =>
            dispatch(addUser({ id: nanoid(), name, username: userName }))
          }
        >
          Add User
        </button>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id} className="users">
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <div>
              <input
                type="text"
                placeholder="update user name"
                value={updateUserName}
                onChange={(e) => setUpdateUserName(e.target.value)}
              />
              <button
                onClick={() =>
                  dispatch(
                    updateUser({ id: user.id, username: updateUserName })
                  )
                }
              >
                Update username
              </button>
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
                Delete User
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserView;
