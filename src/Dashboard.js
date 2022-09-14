import React, { useState, useEffect } from "react";
import ListItem from "./components/ListItem";
import TopMenu from "./components/TopMenu";
import { Droppable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faDatabase,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import chat from "./data/chat";
import Header from "./components/Header";
const Dashboard = ({ taskItems, btnDisabled }) => {
  const [chats, setChats] = useState(chat);
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    chat.push({
      user: "jhon wick",
      userImage: "/images/avatar-2.jpg",
      message: message,
      timeStamp: "10:21 am | Yesterday",
    });
    setChats(chat);
    console.table(chat);
    setMessage("");
  };

  return (
    <div className="container-fluid p-0 bg-light">
      <TopMenu />
      <Header />
      <div className="row flex-wrap cards-container">
        <div className="col-12 col-md-6 ps-md-0 mb-4">
          <div className="card tasks-container">
            <div className="card-header d-flex align-items-center">
              <FontAwesomeIcon icon={faDatabase} className="me-2" size="xl" />
              <h5 className="mb-0 title">Tasks List</h5>
            </div>
            <div className="card-body p-0">
              <Droppable droppableId="task-list">
                {(provided) => (
                  <div
                    className="tasks-list-container"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {taskItems &&
                      taskItems.map((task, index) => {
                        return (
                          <ListItem task={task} key={task.id} index={index} />
                        );
                      })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="card-footer d-flex justify-content-end">
              <button className="btn me-3 text-btn btn-sm">Cancel</button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  console.table(taskItems);
                }}
                disabled={btnDisabled}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 pe-md-0 mb-4">
          <div className="card">
            <div className="card-header d-flex align-items-center">
              <FontAwesomeIcon icon={faComments} className="me-2" size="xl" />
              <h5 className="mb-0 title">Chat Box</h5>
            </div>
            <div className="card-body">
              <div className="chat-container">
                {chats &&
                  chats.map((chat, index) => (
                    <div
                      key={index}
                      className={chat.user === "viggo" ? "sender" : "receiver"}
                    >
                      <div className="user">
                        <div className="user-image">
                          <img
                            src={chat.userImage}
                            alt=""
                            width={36}
                            className="rounded-circle"
                          />
                          <span className="position-absolute bg-success border border-light rounded-circle user-status"></span>
                        </div>
                      </div>
                      <div className="message">
                        <div className="px-4 py-2 message-content">
                          <p className="text-secondary">{chat.message}</p>
                        </div>
                        <p className="message-details text-secondary">
                          <small>
                            <FontAwesomeIcon
                              icon={faCalendarAlt}
                              className="mx-1"
                              size="xs"
                            />
                            {chat.timeStamp}
                          </small>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="card-footer">
              <form onSubmit={sendMessage}>
                <div className="input-group input-group-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write here and hit enter to send..."
                    aria-describedby="basic-addon2"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  <button
                    className="btn btn-success text-white"
                    onClick={sendMessage}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
