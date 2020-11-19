import React, { useState } from 'react';
import { post } from 'axios';

const initialState = {
  file: null,
  userName: '',
  birthday: '',
  gender: '',
  job: '',
  fileName: ''
};

export default function CustomerAdd(props) {
  const [form, setForm] = useState(initialState);

  const addCustomer = () => {
    const url = '/api/customers';
    const formData = new FormData();
    formData.append('image', form.file);
    formData.append('name', form.userName);
    formData.append('birthday', form.birthday);
    formData.append('gender', form.gender);
    formData.append('job', form.job);
    // When add file, it requires header
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData, config);

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addCustomer()
      .then((response) => {
        console.log(response.data);
      });
    props.setUpdateData(true);
    setForm(initialState);
  };

  const handleFileChange = (e) => {
    setForm({
      file: e.target.files[0],
      fileName: e.target.value
    })
  };

  const handleValueChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value
    });
  }
 
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Add Client</h2>
      Profile Image: <input type="file" name="file" file={form.file} value={form.fileName} onChange={handleFileChange} /><br/>
      Name: <input type='text' name="userName" value={form.userName} onChange={handleValueChange}/><br/>
      BirthDay: <input type='text' name="birthday" value={form.birthday} onChange={handleValueChange}/><br/>
      Gender: <input type='text' name="gender" value={form.gender} onChange={handleValueChange}/><br/>
      Job: <input type='text' name="job" value={form.job} onChange={handleValueChange}/><br/>
      <button type="submit">ADD</button>
    </form>
  )

};