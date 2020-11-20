import React, { useState } from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  hidden: {
    display: 'none'
  }
}));

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
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

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
    setForm(initialState);
    props.setState((prev) =>  ({...prev, complete: true}));
    setOpen(false);
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
  };
 
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        ADD CLIENT
      </Button>
      <Dialog open={open} onClose={handleClickClose} >
        <DialogTitle>New Client</DialogTitle>
        <DialogContent>
          <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={form.file} value={form.fileName} onChange={handleFileChange} /><br/>
          <label htmlFor="raised-button-file">
            <Button variant="contained" color="primary" component="span" name="file">
              {form.fileName === "" ? "Select Profile Image" : form.fileName}
            </Button>
          </label>
          <br/>
          <TextField label='Name' type='text' name="userName" value={form.userName} onChange={handleValueChange}/><br/>
          <TextField label='BirthDay' type='text' name="birthday" value={form.birthday} onChange={handleValueChange}/><br/>
          <TextField label='Gender' type='text' name="gender" value={form.gender} onChange={handleValueChange}/><br/>
          <TextField label='Job' type='text' name="job" value={form.job} onChange={handleValueChange}/><br/>
        </DialogContent>
        <DialogActions>
          <Button variant="container" color="primary" onClick={handleFormSubmit}>ADD</Button>
          <Button variant="outlined" color="primary" onClick={handleClickClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )

};