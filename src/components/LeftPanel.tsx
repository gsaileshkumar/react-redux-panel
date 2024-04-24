import IconProfileCustom from "../assets/IconProfileCustom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  cancelEditing,
  renameProfile,
  selectProfile,
} from "../profiles/profilesSlice";
import Toolbox from "./Toolbox";

const LeftPanel = () => {
  const profiles = useAppSelector((state) => state.profiles.profiles);
  const selectedProfile = useAppSelector(
    (state) => state.profiles.selectedProfile
  );
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col w-[240px] max-w-[240px] p-[20px] bg-[#111]">
      <div className="text-[#44d62c] uppercase text-xl leading-6 font-normal mb-5 max-h-[24px]">
        Profile List
      </div>
      <div className="w-[200px] h-[220px] flex-col max-h-[220px] border border-solid border-[#5d5d5d] overflow-y-auto overflow-x-hidden">
        {profiles.map((profile) => {
          const isSelected = profile.id === selectedProfile.id;
          const isEditing = selectedProfile.isEditing && isSelected;
          return (
            <div
              key={profile.id}
              className="w-full flex items-center gap-1 p-1 hover:bg-[#ffffff1a] cursor-pointer"
              onClick={() => dispatch(selectProfile(profile.id))}
            >
              <div className="h-[20px] w-[20px]">
                <IconProfileCustom selected={isSelected} />
              </div>
              {isEditing ? (
                <input
                  type="text"
                  className="form-input w-full border border-solid border-[#44d62c] bg-inherit"
                  value={profile.name}
                  onChange={(event) =>
                    dispatch(
                      renameProfile({
                        profileId: profile.id,
                        newName: event.target.value,
                      })
                    )
                  }
                  onBlur={() => dispatch(cancelEditing())}
                />
              ) : (
                <div
                  className={`${
                    isSelected ? "text-[#44d62c]" : ""
                  } text-ellipsis	truncate overflow-hidden`}
                >
                  {profile.name}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Toolbox />
    </div>
  );
};

export default LeftPanel;
