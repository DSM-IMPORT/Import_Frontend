import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Xml({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3071_29119)">
        <path
          d="M14.73 2.04508C14.0925 1.86133 13.4287 2.23258 13.245 2.87008L8.44499 19.6701C8.26124 20.3076 8.63249 20.9713 9.26999 21.1551C9.90749 21.3388 10.5712 20.9676 10.755 20.3301L15.555 3.53008C15.7387 2.89258 15.3675 2.22883 14.73 2.04508ZM17.7525 6.54883C17.2837 7.01758 17.2837 7.77883 17.7525 8.24758L21.1012 11.6001L17.7487 14.9526C17.28 15.4213 17.28 16.1826 17.7487 16.6513C18.2175 17.1201 18.9787 17.1201 19.4475 16.6513L23.6475 12.4513C24.1162 11.9826 24.1162 11.2213 23.6475 10.7526L19.4475 6.55258C18.9787 6.08383 18.2175 6.08383 17.7487 6.55258L17.7525 6.54883ZM6.25124 6.54883C5.78249 6.08008 5.02124 6.08008 4.55249 6.54883L0.352493 10.7488C-0.116257 11.2176 -0.116257 11.9788 0.352493 12.4476L4.55249 16.6476C5.02124 17.1163 5.78249 17.1163 6.25124 16.6476C6.71999 16.1788 6.71999 15.4176 6.25124 14.9488L2.89874 11.6001L6.25124 8.24758C6.71999 7.77883 6.71999 7.01758 6.25124 6.54883Z"
          fill={Colors[fill!] ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3071_29119">
          <rect
            width="24"
            height="19.2"
            fill="white"
            transform="translate(0 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
