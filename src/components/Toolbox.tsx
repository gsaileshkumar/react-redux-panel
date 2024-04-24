import { useState } from "react";
import IconAdd from "../assets/IconAdd";
import IconArrowDown from "../assets/IconArrowDown";
import IconArrowUp from "../assets/IconArrowUp";
import IconDelete from "../assets/IconDelete";
import IconEdit from "../assets/IconEdit";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  addProfile,
  defaultProfiles,
  deleteProfile,
  moveProfile,
  startEditing,
} from "../profiles/profilesSlice";
import DeleteModal from "./DeleteModal";

const Toolbox = () => {
  const profiles = useAppSelector((state) => state.profiles.profiles);
  const selectedProfile = useAppSelector(
    (state) => state.profiles.selectedProfile
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="flex border border-solid border-[#5d5d5d] bg-[#222]">
      <button
        className="disabled:cursor-not-allowed h-[28px] w-[28px]"
        onClick={() => dispatch(moveProfile("up"))}
        disabled={selectedProfile.index === 0}
      >
        <IconArrowUp disabled={selectedProfile.index === 0} />
      </button>
      <button
        className="disabled:cursor-not-allowed h-[28px] w-[28px]"
        onClick={() => dispatch(moveProfile("down"))}
        disabled={selectedProfile.index === profiles.length - 1}
      >
        <IconArrowDown
          disabled={selectedProfile.index === profiles.length - 1}
        />
      </button>
      <button
        className="disabled:cursor-not-allowed h-[28px] w-[28px] ml-auto"
        onClick={() => setIsPopupOpen(true)}
        disabled={defaultProfiles.includes(selectedProfile.id)}
      >
        <IconDelete disabled={defaultProfiles.includes(selectedProfile.id)} />
      </button>
      <button
        className="disabled:cursor-not-allowed h-[28px] w-[28px]"
        onClick={() => dispatch(startEditing())}
        disabled={defaultProfiles.includes(selectedProfile.id)}
      >
        <IconEdit disabled={defaultProfiles.includes(selectedProfile.id)} />
      </button>
      <button
        className="disabled:cursor-not-allowed h-[28px] w-[28px]"
        onClick={() => dispatch(addProfile())}
      >
        <IconAdd />
      </button>
      <DeleteModal
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
        }}
        content={profiles[selectedProfile.index].name}
        onConfirm={() => {
          dispatch(deleteProfile());
          setIsPopupOpen(false);
        }}
      />
    </div>
  );
};

export default Toolbox;
