import { IconProps } from "./@types";

export default function Moon({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3128_42486)">
        <path
          d="M13.4766 1.5C7.6875 1.5 3 6.20156 3 12C3 17.7984 7.6875 22.5 13.4766 22.5C16.3172 22.5 18.8906 21.3656 20.7797 19.5281C21.0141 19.2984 21.075 18.9422 20.925 18.6516C20.775 18.3609 20.4516 18.1969 20.1281 18.2531C19.6687 18.3328 19.2 18.375 18.7172 18.375C14.175 18.375 10.4906 14.6812 10.4906 10.125C10.4906 7.04062 12.1781 4.35469 14.6766 2.93906C14.9625 2.775 15.1078 2.44688 15.0375 2.12813C14.9672 1.80938 14.6953 1.57031 14.3672 1.54219C14.0719 1.51875 13.7766 1.50469 13.4766 1.50469V1.5Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3128_42486">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
