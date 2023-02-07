import { IconProps } from "./@types";

export default function Scale_Up({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2530_13038)">
        <path
          d="M9.5 2H3.07143C2.47768 2 2 2.47768 2 3.07143V9.5C2 9.93304 2.25893 10.3259 2.66071 10.4911C3.0625 10.6562 3.52232 10.567 3.83036 10.2589L5.61607 8.47321L9.14286 12L5.61607 15.5268L3.83036 13.7411C3.52232 13.433 3.0625 13.3438 2.66071 13.5089C2.25893 13.6741 2 14.067 2 14.5V20.9286C2 21.5223 2.47768 22 3.07143 22H9.5C9.93304 22 10.3259 21.7411 10.4911 21.3393C10.6562 20.9375 10.567 20.4777 10.2589 20.1696L8.47321 18.3839L12 14.8571L15.5268 18.3839L13.7411 20.1696C13.433 20.4777 13.3438 20.9375 13.5089 21.3393C13.6741 21.7411 14.067 22 14.5 22H20.9286C21.5223 22 22 21.5223 22 20.9286V14.5C22 14.067 21.7411 13.6741 21.3393 13.5089C20.9375 13.3438 20.4777 13.433 20.1696 13.7411L18.3839 15.5268L14.8571 12L18.3839 8.47321L20.1696 10.2589C20.4777 10.567 20.9375 10.6562 21.3393 10.4911C21.7411 10.3259 22 9.93304 22 9.5V3.07143C22 2.47768 21.5223 2 20.9286 2H14.5C14.067 2 13.6741 2.25893 13.5089 2.66071C13.3438 3.0625 13.433 3.52232 13.7411 3.83036L15.5268 5.61607L12 9.14286L8.47321 5.61607L10.2589 3.83036C10.567 3.52232 10.6562 3.0625 10.4911 2.66071C10.3259 2.25893 9.93304 2 9.5 2Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_13038">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
