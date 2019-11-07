import React, { Component } from 'react'
import NotefulContext from '../NotefulContext'
import config from '../config';

function addFolderRequest(name, callback) {
  fetch(`${config.API_ENDPOINT}/folders`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ name: name })
  })
    .then(r => {
      if (!r.ok) {
        return r.json().then(err => {
          throw new Error(err.status)
        })
      }
      return r.json()
    })
    .then(data => {
      callback(data)
    })
    .catch(error => {
      console.log(error)
    })
}

export default class AddFolder extends Component {
  static contextType = NotefulContext;

  handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name)
    addFolderRequest(name, this.context.addFolder);
    this.props.history.push('/');
  }


  render() {

    return (
      <form className='addFolder' onSubmit={e => this.handleSubmit(e)}>
        <h2>Add a new folder</h2>
        <div className='form-group'>
          <label htmlFor='name'>Folder name: </label>
          <input type='text' name='name' id='name' required/>
        </div>

        <button onClick={e => this.props.history.push('/')}>
          Cancel
        </button>
        {' '}
        <button
          type='submit'
          className='folder-btn'>
          Save
          </button>


      </form>
    )
  }
}