import { IconProps } from "./types";

export const IconArrowUp = (props: IconProps) => {
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
        d="M16.68 7.69c.2.18.32.44.32.72 0 .55-.45 1-1 1-.29 0-.54-.12-.72-.32L11 4.83V18c0 .55-.45 1-1 1s-1-.45-1-1V4.83L4.72 9.1a.98.98 0 01-.72.31c-.55 0-1-.45-1-1 0-.28.12-.53.31-.71L10 1l6.68 6.69z"
        fill="#ccc"
        opacity={props.disabled ? 0.3 : 1}
      />
    </svg>
  );
};

export default IconArrowUp;
