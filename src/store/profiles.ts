import { configureStore } from '@reduxjs/toolkit';
import profilesReducer from '../profiles/profilesSlice';
import { loadState, saveState } from '../services/localStorage';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    profiles: profilesReducer
  },
  preloadedState: persistedState
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
