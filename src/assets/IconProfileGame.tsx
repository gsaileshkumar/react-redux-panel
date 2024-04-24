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
        d="M7 9h1v1H7v1H6v-1H5V9h1V8h1v1zm6.5-1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm5.56-2.74a.854.854 0 00-.26-.45C18.26 4.3 16.81 3 16 3c-.29 0-.65-.02-1.05-.02-.98 0-2.16.13-2.95 1.02H8c-.79-.89-1.97-1.02-2.95-1.02-.4 0-.76.02-1.05.02-.81 0-2.26 1.3-2.8 1.8-.13.13-.22.28-.26.46C.72 6.19 0 9.45 0 12c0 2 0 5 2 5s3-2 5-2h6c2 0 3 2 5 2s2-3 2-5c0-2.55-.72-5.81-.94-6.74zm-1.2 8.66c-.05.49-.57.77-1 .53C15.81 13.86 14.07 13 13 13H7c-1.07 0-2.81.86-3.86 1.45a.677.677 0 01-1-.53C2.07 13.22 2 12.36 2 12c0-2.09.55-4.81.81-5.96.52-.47 1.09-.9 1.38-1.04.1 0 .66-.02.86-.02.77 0 1.25.11 1.45.34l.6.68h5.8l.6-.68c.2-.23.68-.34 1.45-.34.2 0 .76.02.86.02.29.14.86.57 1.38 1.04.26 1.15.81 3.87.81 5.96 0 .36-.07 1.22-.14 1.92z"
        fill={props.selected ? "rgba(68,214,44,.5)" : "#5d5d5d"}
      />
    </svg>
  );
};

export default IconProfileCustom;