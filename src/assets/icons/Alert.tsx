import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Alert({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2530_13036)">
        <path
          d="M21 18V19H3V18L5 16V10C5 6.9 7.03 4.17 10 3.29V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.29C16.97 4.17 19 6.9 19 10V16L21 18ZM14 20C14 20.5304 13.7893 21.0391 13.4142 21.4142C13.0391 21.7893 12.5304 22 12 22C11.4696 22 10.9609 21.7893 10.5858 21.4142C10.2107 21.0391 10 20.5304 10 20"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_13036">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
