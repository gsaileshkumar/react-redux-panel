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
        d="M19 0H1v20h18V0zm-4 6V2h2v4h-2zM7 18V2h6v16H7zM3 6V2h2v4H3zm12 6V8h2v4h-2zM3 12V8h2v4H3zm12 6v-4h2v4h-2zM3 18v-4h2v4H3z"
        fill={props.selected ? "rgba(68,214,44,.5)" : "#5d5d5d"}
      />
    </svg>
  );
};

export default IconProfileCustom;
