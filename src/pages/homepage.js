import { useState,useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PopUpComponent from './PopUpComponent';
import axios from 'axios';
import TaskPopUp from "../components/TaskPopUp";


import "../styles/HomePage.css";

const Homepage = () => {

  const [view, setView] = useState(localStorage.getItem('view') || "list");
  const [show, setShow] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [sortedTasks, setSortedTasks] = useState(null);
  const [sortType, setSortType] = useState(null);
  const [isUpdating, setIsUpdating] = useState('');
  const [updateItemText, setUpdateItemText] = useState('');
  const [newDateValue, setNewDateValue] = useState('');
  const [newNotesValue, setNewNotesValue] = useState('');

  const loggedInUserId = 'abc.xyz@google.com';

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleViewClick = (task) => {
    setSelectedTask(task);
    setShowPopUp(true);
  };

  const handleViewChange = (newView) => {
    setView(newView);
    localStorage.setItem('view', newView);
  };


  const handleCheckboxChange = (taskId) => {
    if (checkedTasks.includes(taskId)) {
      setCheckedTasks(checkedTasks.filter(id => id !== taskId));
    } else {
      setCheckedTasks([...checkedTasks, taskId]);
    }
  };

  const fetchUserTasks = async () => {
    try {
      const res = await axios.get(`https://planifybackend.onrender.com/api/user/${loggedInUserId}/tasks`);
      setListItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`https://planifybackend.onrender.com/api/item/${id}`);
      const updatedListItems = listItems.filter(task => task._id !== id);
      setListItems(updatedListItems);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSort = (type) => {
    let sortedTasksData;
  
    if (type === "alphabetical") {
      sortedTasksData = [...(listItems || [])].sort((a, b) => (a.item || '').localeCompare(b.item || ''));
    } else if (type === "deadline") {
      sortedTasksData = [...(listItems || [])].sort((a, b) => {
        const dateA = new Date(a.Deadline);
        const dateB = new Date(b.Deadline);
        return dateA - dateB;
      });
    }
  
    setSortedTasks(sortedTasksData);
    setSortType(type);
  };

       
  const updateItem = async (e, taskId) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://planifybackend.onrender.com/api/item/${taskId}`, {
        item: updateItemText, 
        date: newDateValue, 
        notes: newNotesValue 
      });
      
      const updatedTask = res.data; 
  
      const updatedListItems = listItems.map(task => {
        if (task._id === taskId) {
          return { ...task, ...updatedTask }; 
        }
        return task;
      });
  
      setListItems(updatedListItems);
      setUpdateItemText('');
      setIsUpdating('');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
    
const renderUpdateForm = (task) => (
  <form
    className="update-form"
    style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '300px',
      margin: '0 auto' 
    }}
    onSubmit={(e) => updateItem(e, task._id)}
  >
    <input
      className='update-new-input'
      style={{
        marginBottom: '10px',
        padding: '8px',
        fontSize: '16px'
      }}
      type="text"
      placeholder="New Item"
      onChange={e => setUpdateItemText(e.target.value)}
      value={updateItemText}
      required
    />
    <input
      className='update-new-input'
      style={{
        marginBottom: '10px',
        padding: '8px',
        fontSize: '16px'
      }}
      type="date"
      placeholder="New Date"
      onChange={e => setNewDateValue(e.target.value)}
      value={newDateValue}
      required
    />
    <textarea
      className='update-new-input'
      style={{
        marginBottom: '10px',
        padding: '8px',
        fontSize: '16px',
        resize: 'vertical',
        minHeight: '100px'
      }}
      placeholder="New Notes"
      onChange={e => setNewNotesValue(e.target.value)}
      value={newNotesValue}
    ></textarea>
    <button
      className="update-new-btn"
      style={{
        padding: '10px 20px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
      }}
      type='submit'
    >
      Update
    </button>
  </form>
        );

  useEffect(() => {
    fetchUserTasks();
  }, [loggedInUserId]);

    return (
        <>
          <Nav />
          <div className="homepage-wrapper pb-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9">
                  <div className="btn-group">
                    <div
                      className="dropdown-toggle m-3"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Views
                    </div>
                    <div className="dropdown-menu">
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          handleViewChange("list");
                        }}
                      >
                        List View
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          handleViewChange("grid");
                        }}
                      >
                        Grid View
                      </button>
                    </div>
    
                    <div
                      className="dropdown-toggle m-3"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by
                    </div>
                    <div className="dropdown-menu">
                      <button className="dropdown-item" onClick={() => handleSort("alphabetical")}>Alphabetical</button>
                      <button className="dropdown-item" onClick={() => handleSort("deadline")}>Deadline</button>
                    </div>
                    <div className="dropdown-menu">
                      <button className="dropdown-item">Category</button>
                      <button className="dropdown-item">Priority</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-end"> 
                <button onClick={handleShow} className="btn btn-success m-3">Create Task</button>
                <PopUpComponent show={show} handleClose={handleClose} />
                </div>
              </div>
            </div>

            {showPopUp && selectedTask && (
                <TaskPopUp task={selectedTask} onClose={() => setShowPopUp(false)} deleteItem={deleteItem} />
              )}

            {view === "grid" && (
              <div className="container-fluid grid-view">
                <div className="row">
                  {(sortedTasks || listItems).map((task) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 todo-item" key={task.name}>
                      <div className="card my-3">
                      <div className="card-body">
                            <h5 className={`me-2 d-inline ${checkedTasks.includes(task._id) ? 'text-decoration-line-through' : ''}`}>
                              {task.item}
                            </h5>
                            <input
                              type="checkbox"
                              checked={checkedTasks.includes(task._id)}
                              onChange={() => handleCheckboxChange(task._id)}
                              ></input>
                            <p className="card-text">{task.notes}</p>
                            <div>
                              {isUpdating === task._id
                              ? renderUpdateForm(task)
                              : (
                              <>
                              <button className="btn btn-primary me-2 " onClick={() => handleViewClick(task)}>View</button>
                              <button className="btn btn-success" onClick={() => setIsUpdating(task._id)}>Update</button>
                              </>
                              )
                              }
                            </div>
                          </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}




            {view === "list" && (
              <div className="container-fluid list-view">
                <div className="row d-flex flex-column align-items-center">
                  {(sortedTasks || listItems).map((task) => (
                    <div className="col-8 m-3 todo-item"  key={task.name}>
                      <div className="card">
                        <div className="card-body d-flex justify-content-between align-items-center">
                          <div style={{ width: "70%" }}>
                            <h5 className={`me-2 d-inline ${checkedTasks.includes(task._id) ? 'text-decoration-line-through' : ''}`}>
                              {task.item}
                            </h5>
                            
                            <input
                            className="d-inline"
                            type="checkbox"
                            checked={checkedTasks.includes(task._id)}
                            onChange={() => handleCheckboxChange(task._id)}
                            ></input>
                            <span className={`priority-tag ms-2 priority-${task.priority.toLowerCase()} `}>
                                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1).toLowerCase()}
                              </span>
                          </div>
                          <div>
                            {isUpdating === task._id
                            ? renderUpdateForm(task)
                            : (
                            <>
                            <button className="btn btn-primary me-2 " onClick={() => handleViewClick(task)}>View</button>
                            <button className="btn btn-success" onClick={() => setIsUpdating(task._id)}>Update</button>
                            </>
                            )
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Footer />
        </>
      );
    };
    
    export default Homepage;
