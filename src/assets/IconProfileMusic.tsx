import { IconProps } from "./types";

export const IconProfileCustom = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 20 20"
      style={{
        width: 20,
        height: 20,
      }}
      xmlSpace="preserve"
    >
      <path
        d="M289 263h-10v11c0 1.66-1.57 3-3.5 3s-3.5-1.34-3.5-3 1.57-3 3.5-3c.54 0 1.05.1 1.5.29V259c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v13c0 1.66-1.57 3-3.5 3s-3.5-1.34-3.5-3 1.57-3 3.5-3c.54 0 1.05.1 1.5.29V263zm0-2v-2h-10v2h10z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={props.selected ? "rgba(68,214,44,.5)" : "#5d5d5d"}
        transform="translate(-271 -257)"
      />
    </svg>
  );
};

export default IconProfileCustom;
