import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLogged: !!localStorage.getItem('isLogged'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
      localStorage.setItem('isLogged', true);
    },
    logout: (state) => {
      state.user = null;
      state.isLogged = false;
      localStorage.removeItem('isLogged');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
