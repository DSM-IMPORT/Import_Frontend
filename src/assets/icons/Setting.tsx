import { IconProps } from "./@types";

export default function Setting({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3081_41284)">
        <g clipPath="url(#clip1_3081_41284)">
          <path
            d="M23.2453 7.80938C23.3953 8.21719 23.2687 8.67188 22.9453 8.9625L20.9156 10.8094C20.9672 11.1984 20.9953 11.5969 20.9953 12C20.9953 12.4031 20.9672 12.8016 20.9156 13.1906L22.9453 15.0375C23.2687 15.3281 23.3953 15.7828 23.2453 16.1906C23.0391 16.7484 22.7906 17.2828 22.5047 17.7984L22.2844 18.1781C21.975 18.6937 21.6281 19.1812 21.2484 19.6406C20.9719 19.9781 20.5125 20.0906 20.1 19.9594L17.4891 19.1297C16.8609 19.6125 16.1672 20.0156 15.4266 20.3203L14.8406 22.9969C14.7469 23.4234 14.4187 23.7609 13.9875 23.8312C13.3406 23.9391 12.675 23.9953 11.9953 23.9953C11.3156 23.9953 10.65 23.9391 10.0031 23.8312C9.57187 23.7609 9.24374 23.4234 9.14999 22.9969L8.56406 20.3203C7.82343 20.0156 7.12968 19.6125 6.50156 19.1297L3.89531 19.9641C3.48281 20.0953 3.02343 19.9781 2.74687 19.6453C2.36718 19.1859 2.02031 18.6984 1.71093 18.1828L1.49062 17.8031C1.20468 17.2875 0.956244 16.7531 0.749994 16.1953C0.599994 15.7875 0.726556 15.3328 1.04999 15.0422L3.07968 13.1953C3.02812 12.8016 2.99999 12.4031 2.99999 12C2.99999 11.5969 3.02812 11.1984 3.07968 10.8094L1.04999 8.9625C0.726556 8.67188 0.599994 8.21719 0.749994 7.80938C0.956244 7.25156 1.20468 6.71719 1.49062 6.20156L1.71093 5.82187C2.02031 5.30625 2.36718 4.81875 2.74687 4.35938C3.02343 4.02187 3.48281 3.90937 3.89531 4.04062L6.50624 4.87031C7.13437 4.3875 7.82812 3.98438 8.56874 3.67969L9.15468 1.00312C9.24843 0.576562 9.57656 0.239062 10.0078 0.16875C10.6547 0.05625 11.3203 0 12 0C12.6797 0 13.3453 0.05625 13.9922 0.164062C14.4234 0.234375 14.7516 0.571875 14.8453 0.998437L15.4312 3.675C16.1719 3.97969 16.8656 4.38281 17.4937 4.86563L20.1047 4.03594C20.5172 3.90469 20.9766 4.02187 21.2531 4.35469C21.6328 4.81406 21.9797 5.30156 22.2891 5.81719L22.5094 6.19687C22.7953 6.7125 23.0437 7.24687 23.25 7.80469L23.2453 7.80938ZM12 15.75C14.0719 15.75 15.75 14.0719 15.75 12C15.75 9.92813 14.0719 8.25 12 8.25C9.92812 8.25 8.24999 9.92813 8.24999 12C8.24999 14.0719 9.92812 15.75 12 15.75Z"
            fill={fill ?? "black"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3081_41284">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3081_41284">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
