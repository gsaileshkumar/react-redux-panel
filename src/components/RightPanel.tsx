import { useAppSelector } from "../hooks/redux";

const RightPanel = () => {
  const selectedProfileName = useAppSelector((state) => {
    const { index } = state.profiles.selectedProfile;
    return state.profiles.profiles[index].name;
  });

  return (
    <div className="w-full px-20 py-5 bg-[#222]">
      <h1 className="text-center font-normal text-lg leading-5 m-0 mb-5">
        {selectedProfileName}
      </h1>
    </div>
  );
};

export default RightPanel;
