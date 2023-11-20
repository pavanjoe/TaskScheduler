import React, { useState } from 'react';
import styles from '../styles/InputBox.module.css';
import axios from 'axios';

export default function FormFill() {
  const userEmail = 'abc.xyz@google.com';
  const [itemText, setItemText] = useState('');
  const [setListItems] = useState([]);
  const [date, setDate] = useState(null);
  const [priority, setPriority] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [notesText, setNotesText] = useState('');
  const [category, setCategory] = useState('');
  const [notification, setNotification] = useState(0);

  const addItem = async (e) => {
    e.preventDefault();

    if (!date) {
      alert('Please select a date before submitting.');
      return;
    }

    try {
      const res = await axios.post('https://planifybackend.onrender.com/api/item', {
        item: itemText,
        priority: priority,
        completed: completed,
        date: date,
        notes: notesText,
        createdDate: date,
        category: category,
        notification: notification,
        userEmail: userEmail,
      });

      setListItems((prev) => [...prev, res.data]);
      setItemText('');
      setPriority(null);
      setDate(null);
      setCompleted(false);
      setNotesText('');
      setCategory('');
      setNotification(0);
      window.location.reload();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => addItem(e)}>
        <h1 style={{fontFamily:"cursive", marginBottom:"5%"}}>Add A Task</h1>

        <input
          type="text"
          placeholder="Add an Item"
          style={{ textAlign: 'left', marginRight: '500px' }}
          className={styles.inputbox}
          onChange={(e) => setItemText(e.target.value)}
          value={itemText}
          required
        />

        <br />
        <br />
        <input
          type="date"
          required
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className={styles.datebox}
        ></input>

        <br />
        <br />
        <p>
          <b>Select Task Priority</b>
        </p>
        <div className={styles.radio_input}>
          <input
            type="radio"
            id="low"
            name="priority"
            value="low"
            checked={priority === 'low'}
            onChange={() => setPriority('low')}
          />
          <label htmlFor="low" className='m-2'>
            Low
            <span className='ms-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <g id="Interface / Check">
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="#199f6b"
                    d="M6 12L10.2426 16.2426L18.727 7.75732"
                  ></path>
                </g>
              </svg>
            </span>
          </label>

          <input
            type="radio"
            id="medium"
            name="priority"
            value="medium"
            checked={priority === 'medium'}
            onChange={() => setPriority('medium')}
          />
          <label htmlFor="medium" className='m-2'>
            Medium
            <span className='ms-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <g id="Interface / Check">
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="#1a89c1"
                    d="M6 12L10.2426 16.2426L18.727 7.75732"
                  ></path>
                </g>
              </svg>
            </span>
          </label>

          <input
            type="radio"
            id="high"
            name="priority"
            value="high"
            checked={priority === 'high'}
            onChange={() => setPriority('high')}
          />
          <label htmlFor="high" className='m-2'>
            High
            <span className='ms-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <g id="Interface / Check">
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="#a81f1f"
                    d="M6 12L10.2426 16.2426L18.727 7.75732"
                  ></path>
                </g>
              </svg>
            </span>
          </label>
        </div>

        <br />
        <div style={{ display: 'flex', alignItems: 'right' }}>
          <label
            style={{
              fontSize: '18px',
              marginRight: '30px',
              marginLeft: '3%',
              color: '#021039',
            }}
          >
            Add a Tag
          </label>
          <select
            className={styles.textar}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="None">Select</option>
            <option value="Work">Work</option>
            <option value="School">School</option>
            <option value="Extra">Extra-Curricular</option>
            <option value="Personal">Personal</option>
          </select>
        </div>

        <br />
        <br />
        <div>
          <textarea
            draggable="false"
            placeholder="Add A Note..."
            className={styles.textarea}
            onChange={(e) => setNotesText(e.target.value)}
            value={notesText}
          ></textarea>
        </div>

        <div style={{ display: 'flex', alignItems: 'right' }}>
          <label
            style={{
              fontSize: '18px',
              marginRight: '10px',
              marginLeft: '3%',
              color: '#021039',
              textAlign: 'right',
              paddingRight: '10px',
              marginTop: '8px',
            }}
          >
            Enable Push Notifications?
          </label>
          <label className="switch" style={{ marginTop: '10px' }}>
            <input
              type="checkbox"
              checked={notification === 1}
              onChange={(e) => setNotification(e.target.checked ? 1 : 0)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <br />
        <br />
        <button type="submit" className={styles.save_button}>
          Save
        </button>
      </form>
    </div>
  );
}
