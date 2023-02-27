import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Alert_New({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2530_12846)">
        <path
          d="M21 5.50001C21 7.43001 19.43 9.00001 17.5 9.00001C15.57 9.00001 14 7.43001 14 5.50001C14 3.57001 15.57 2.00001 17.5 2.00001C19.43 2.00001 21 3.57001 21 5.50001ZM19 10.79C18.5 10.92 18 11 17.5 11C16.0421 10.9974 14.6447 10.4171 13.6138 9.38617C12.583 8.3553 12.0026 6.95788 12 5.50001C12 4.03001 12.58 2.70001 13.5 1.71001C13.3185 1.48755 13.0897 1.30838 12.8302 1.18555C12.5707 1.06272 12.2871 0.999335 12 1.00001C10.9 1.00001 10 1.90001 10 3.00001V3.29001C7.03 4.17001 5 6.90001 5 10V16L3 18V19H21V18L19 16V10.79ZM12 22C13.11 22 14 21.11 14 20H10C10 20.5304 10.2107 21.0391 10.5858 21.4142C10.9609 21.7893 11.4696 22 12 22Z"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_12846">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
