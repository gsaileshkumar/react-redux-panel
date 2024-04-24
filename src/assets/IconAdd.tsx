import { IconProps } from "./types";

export const IconAdd = (props: IconProps) => {
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
        d="M18 9h-7V2c0-.55-.45-1-1-1s-1 .45-1 1v7H2c-.55 0-1 .45-1 1s.45 1 1 1h7v7c0 .55.45 1 1 1s1-.45 1-1v-7h7c.55 0 1-.45 1-1s-.45-1-1-1z"
        fill="#ccc"
        opacity={props.disabled ? 0.3 : 1}
      />
    </svg>
  );
};

export default IconAdd;
