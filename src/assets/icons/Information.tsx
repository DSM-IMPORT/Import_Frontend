import { IconProps } from "./@types";

export default function Information({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2530_13046)">
        <path
          d="M12.3939 10.6616C12.8722 10.6616 13.26 11.0494 13.26 11.5278V16.7247C13.26 17.203 12.8722 17.5909 12.3939 17.5909C11.9155 17.5909 11.5277 17.203 11.5277 16.7247V11.5278C11.5277 11.0494 11.9155 10.6616 12.3939 10.6616Z"
          fill={fill ?? "black"}
        />
        <path
          d="M12.3955 9.36075C13.1121 9.36075 13.693 8.7798 13.693 8.06318C13.693 7.34656 13.1121 6.76562 12.3955 6.76562C11.6788 6.76562 11.0979 7.34656 11.0979 8.06318C11.0979 8.7798 11.6788 9.36075 12.3955 9.36075Z"
          fill={fill ?? "black"}
        />
        <path
          d="M2 12.3939C2 6.65348 6.65348 2 12.3939 2C18.1342 2 22.7877 6.65348 22.7877 12.3939C22.7877 18.1342 18.1342 22.7877 12.3939 22.7877C6.65348 22.7877 2 18.1342 2 12.3939ZM12.3939 3.73231C7.61022 3.73231 3.73231 7.61022 3.73231 12.3939C3.73231 17.1775 7.61022 21.0554 12.3939 21.0554C17.1775 21.0554 21.0554 17.1775 21.0554 12.3939C21.0554 7.61022 17.1775 3.73231 12.3939 3.73231Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_13046">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
