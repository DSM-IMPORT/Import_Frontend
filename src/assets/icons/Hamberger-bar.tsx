import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Hamberger_Bar({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3081_41283)">
        <path
          d="M0 4.5C0 3.67031 0.766071 3 1.71429 3H22.2857C23.2339 3 24 3.67031 24 4.5C24 5.32969 23.2339 6 22.2857 6H1.71429C0.766071 6 0 5.32969 0 4.5ZM0 12C0 11.1703 0.766071 10.5 1.71429 10.5H22.2857C23.2339 10.5 24 11.1703 24 12C24 12.8297 23.2339 13.5 22.2857 13.5H1.71429C0.766071 13.5 0 12.8297 0 12ZM24 19.5C24 20.3297 23.2339 21 22.2857 21H1.71429C0.766071 21 0 20.3297 0 19.5C0 18.6703 0.766071 18 1.71429 18H22.2857C23.2339 18 24 18.6703 24 19.5Z"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3081_41283">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
