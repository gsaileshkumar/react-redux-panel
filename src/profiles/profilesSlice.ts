import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Profile = {
  id: string;
  name: string;
};

export type ProfilesState = {
  profiles: Profile[];
  selectedProfile: {
    id: string;
    index: number;
    isEditing: boolean;
  };
};

const DEFAULT_SELECTED_PROFILE_ID = "default"

const initialState: ProfilesState = {
  profiles: [
    {id: DEFAULT_SELECTED_PROFILE_ID, name:"Default"},
    { id: "game", name: "Game" },
    { id: "movie", name: "Movie" },
    { id: "music", name: "Music" },
  ],
  selectedProfile: {
    id: DEFAULT_SELECTED_PROFILE_ID,
    index: 0,
    isEditing: false,
  },
};

export const defaultProfiles = initialState.profiles.map((profile) => profile.id);

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    selectProfile(state, action: PayloadAction<string>) {
      const index = state.profiles.findIndex(
        (profile) => profile.id === action.payload
      );
      const newSelectedProfile = state.profiles[index]
      if (index !== -1) {
        state.selectedProfile.index = index;
        state.selectedProfile.id = newSelectedProfile.id;
      }
    },
    startEditing(state) {
      const profile = state.profiles.find(
        (profile) => profile.id === state.selectedProfile.id
      );
      if (profile && !defaultProfiles.includes(profile.id)) {
        state.selectedProfile.isEditing = true;
      }
    },
    cancelEditing(state) {
      state.selectedProfile.isEditing = false
    },
    moveProfile(state, action: PayloadAction<"up" | "down">) {
      const direction = action.payload;
      const index = state.profiles.findIndex(
        (profile) => profile.id === state.selectedProfile.id
      );
      const newIndex = direction === "up" ? index - 1 : index + 1;

      if (index !== -1 && newIndex >= 0 && newIndex < state.profiles.length) {
        const [removedProfile] = state.profiles.splice(index, 1);
        state.profiles.splice(newIndex, 0, removedProfile);
        state.selectedProfile.index = newIndex;
      }
    },
    addProfile(state) {
      const newProfile: Profile = {
        name: `New Profile`,
        id: `new-profile-${new Date().getTime()}`,
      };
      state.profiles.push(newProfile);
      state.selectedProfile.id = newProfile.id;
      state.selectedProfile.index = state.profiles.length - 1;
    },
    deleteProfile(state) {
      if (
        !defaultProfiles.includes(state.selectedProfile.id)
      ) {
        const deletingProfileIndex = state.selectedProfile.index
        if(deletingProfileIndex === 0){
          state.profiles = state.profiles.filter(
            (profile) => profile.id !== state.selectedProfile.id
          );
          state.selectedProfile.id = state.profiles[0].id;
          state.selectedProfile.index = 0
        } else{
          state.profiles = state.profiles.filter(
            (profile) => profile.id !== state.selectedProfile.id
          );
          state.selectedProfile.id = state.profiles[deletingProfileIndex - 1].id;
          state.selectedProfile.index = deletingProfileIndex - 1
        }
        
      }
    },
    renameProfile(
      state,
      action: PayloadAction<{ profileId: string; newName: string }>
    ) {
      const { profileId, newName } = action.payload;
      const trimmedNewName = newName.trim();
      const profile = state.profiles.find(
        (profile) => profile.id === profileId
      );
      if (
        trimmedNewName &&
        profile
      ) {
        profile.name = trimmedNewName;
      }
    },
  },
});

export const {
  selectProfile,
  moveProfile,
  addProfile,
  deleteProfile,
  renameProfile,
  startEditing,
  cancelEditing,
} = profilesSlice.actions;
export default profilesSlice.reducer;
