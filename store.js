import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import watchlistReducer from '../features/watchlist/watchlistSlice';
import bookingReducer from '../features/booking/bookingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    watchlist: watchlistReducer,
    booking: bookingReducer,
  },
});