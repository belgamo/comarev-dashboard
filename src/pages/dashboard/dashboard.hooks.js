import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/modules/user/actions';

// use testing library hooks

export const useHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logoutUser());
    localStorage.removeItem('user');
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return { handleSignOut, handleMenu, handleClose, anchorEl, open };
};
