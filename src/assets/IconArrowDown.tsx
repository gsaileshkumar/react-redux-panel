import { IconProps } from "./types";

export const IconArrowDown = (props: IconProps) => {
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
        d="M3.31 12.31A.997.997 0 014 10.59c.29 0 .54.12.72.32L9 15.17V2c0-.55.45-1 1-1s1 .45 1 1v13.17l4.28-4.27a.997.997 0 111.41 1.41L10 19l-6.69-6.69z"
        fill="#ccc"
        opacity={props.disabled ? 0.3 : 1}
      />
    </svg>
  );
};

export default IconArrowDown;
