import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Calender({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2530_13057)">
        <path
          d="M7.5 0C8.32969 0 9 0.670312 9 1.5V3H15V1.5C15 0.670312 15.6703 0 16.5 0C17.3297 0 18 0.670312 18 1.5V3H20.25C21.4922 3 22.5 4.00781 22.5 5.25V7.5H1.5V5.25C1.5 4.00781 2.50781 3 3.75 3H6V1.5C6 0.670312 6.67031 0 7.5 0ZM1.5 9H22.5V21.75C22.5 22.9922 21.4922 24 20.25 24H3.75C2.50781 24 1.5 22.9922 1.5 21.75V9ZM4.5 12.75V14.25C4.5 14.6625 4.8375 15 5.25 15H6.75C7.1625 15 7.5 14.6625 7.5 14.25V12.75C7.5 12.3375 7.1625 12 6.75 12H5.25C4.8375 12 4.5 12.3375 4.5 12.75ZM10.5 12.75V14.25C10.5 14.6625 10.8375 15 11.25 15H12.75C13.1625 15 13.5 14.6625 13.5 14.25V12.75C13.5 12.3375 13.1625 12 12.75 12H11.25C10.8375 12 10.5 12.3375 10.5 12.75ZM17.25 12C16.8375 12 16.5 12.3375 16.5 12.75V14.25C16.5 14.6625 16.8375 15 17.25 15H18.75C19.1625 15 19.5 14.6625 19.5 14.25V12.75C19.5 12.3375 19.1625 12 18.75 12H17.25ZM4.5 18.75V20.25C4.5 20.6625 4.8375 21 5.25 21H6.75C7.1625 21 7.5 20.6625 7.5 20.25V18.75C7.5 18.3375 7.1625 18 6.75 18H5.25C4.8375 18 4.5 18.3375 4.5 18.75ZM11.25 18C10.8375 18 10.5 18.3375 10.5 18.75V20.25C10.5 20.6625 10.8375 21 11.25 21H12.75C13.1625 21 13.5 20.6625 13.5 20.25V18.75C13.5 18.3375 13.1625 18 12.75 18H11.25ZM16.5 18.75V20.25C16.5 20.6625 16.8375 21 17.25 21H18.75C19.1625 21 19.5 20.6625 19.5 20.25V18.75C19.5 18.3375 19.1625 18 18.75 18H17.25C16.8375 18 16.5 18.3375 16.5 18.75Z"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_13057">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
