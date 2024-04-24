import { ProfilesState } from "../profiles/profilesSlice";

const PROFILES_STATE_KEY = "profilesState";

export const loadState = (): {profiles: ProfilesState} | undefined => {
  try {
    const serializedState = localStorage.getItem(PROFILES_STATE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("Error occured while retriving state from local storage");
    return undefined;
  }
};

export const saveState = (state: {profiles: ProfilesState}) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(PROFILES_STATE_KEY, serializedState);
  } catch (err) {
    console.log("Error occured while saving state to local storage");
  }
};
