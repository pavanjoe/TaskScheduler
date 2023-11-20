import React from 'react';

const TaskPopUp = ({ task, onClose, deleteItem }) => {
  
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleDelete = () => {
    if (task && task._id) {
      deleteItem(task._id);
      onClose();
    }
  };

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1f3345',
    color: 'rgb(226, 168, 43)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    zIndex: '999',
    maxWidth: '80%',
    width: '400px',
    textAlign: 'left',
  };

  const paragraphStyle = {
    color: 'white',
  };

  return (
    <div style={popupStyle} className={`popup ${task ? 'show' : ''}`}>
      {task && (
        <>
          <h3>{capitalizeFirstLetter(task.item)}</h3>
          {task.status && <p style={paragraphStyle}>Status: {capitalizeFirstLetter(task.status)}</p>}
          {task.priority && <p style={paragraphStyle}>Priority: {capitalizeFirstLetter(task.priority)}</p>}
          {task.category && <p style={paragraphStyle}>Category: {capitalizeFirstLetter(task.category)}</p>}
          {task.notes && <p style={paragraphStyle}>Description: {capitalizeFirstLetter(task.notes)}</p>}
          {task.date && <p style={paragraphStyle}>Completion Date: {capitalizeFirstLetter(task.date)}</p>}
          <center>
            <button onClick={onClose} style={{margin: '2px'}} className='btn btn-warning'>Close</button>
            <button onClick={handleDelete} style={{margin: '2px'}} className='btn btn-danger'>Delete</button>
          </center>
        </>
      )}
    </div>
  );
};

export default TaskPopUp;
