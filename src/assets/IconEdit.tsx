import { IconProps } from "./types";

export const IconEdit = (props: IconProps) => {
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
        d="M15.63 8.12L4.75 19H1v-3.75L11.88 4.37l3.75 3.75zm3.08-4.49l-2.34-2.34a.996.996 0 00-1.41 0L13.3 2.95l3.75 3.75 1.66-1.66a.996.996 0 000-1.41z"
        fill="#ccc"
        opacity={props.disabled ? 0.3 : 1}
      />
    </svg>
  );
};

export default IconEdit;
