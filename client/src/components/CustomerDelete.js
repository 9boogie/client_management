import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function CustomerDelete(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };


  const deleteCustomer = (id) => {
    const url = '/api/customers/' + id;
    fetch(url, {
      method: 'DELETE'
    });
    props.setState((prev) =>  ({...prev, complete: true}));
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen} >Delete</Button>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle onClose={handleClickClose}>
          Warning
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Selected Information will be deleted
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={(e) => {deleteCustomer(props.id)}}>Delete</Button>
          <Button variant="outlined" color="primary" onClick={handleClickClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};
