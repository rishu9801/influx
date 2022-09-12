import React from "react";
import { Draggable } from "react-beautiful-dnd";

const ListItem = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index} key={task.id}>
      {(provided) => {
        return (
          <div
            className="list-item d-flex justify-content-between align-items-center"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div
              className="left d-flex align-items-center"
              status={task.status}
            >
              <div className="form-check mx-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              {task.userImage && (
                <img
                  src={task.userImage}
                  alt=""
                  width={36}
                  className="me-2 rounded-circle"
                />
              )}
              <div className="d-flex flex-column">
                <p className="title">
                  <strong>{task.title}</strong>
                </p>
                <p className="text-secondary fst-italic">{task.description}</p>
              </div>
            </div>
            <div className="right">
              {task.status && (
                <span status={task.status} className="badge text-capitalize">
                  {task.status}
                </span>
              )}
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
