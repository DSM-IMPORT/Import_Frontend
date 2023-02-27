import { IconProps } from "./@types";
import { Colors } from "../../styles/theme/color";

export default function Add_Check_List({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2530_13048)">
        <path
          d="M9.60505 6.08822C9.85875 6.34191 9.85875 6.75322 9.60505 7.00691L7.00658 9.60538C6.75289 9.85908 6.34158 9.85908 6.0879 9.60538L4.78866 8.30614C4.53496 8.05246 4.53496 7.64114 4.78866 7.38746C5.04235 7.13376 5.45366 7.13376 5.70735 7.38746L6.54724 8.22733L8.68636 6.08822C8.94005 5.83452 9.35136 5.83452 9.60505 6.08822Z"
          fill={Colors[fill!] ?? "black"}
        />
        <path
          d="M9.60505 12.5843C9.85875 12.838 9.85875 13.2493 9.60505 13.5031L7.00658 16.1015C6.75289 16.3551 6.34158 16.3551 6.0879 16.1015L4.78866 14.8023C4.53496 14.5486 4.53496 14.1372 4.78866 13.8835C5.04235 13.6299 5.45366 13.6299 5.70735 13.8835L6.54724 14.7234L8.68636 12.5843C8.94005 12.3306 9.35136 12.3306 9.60505 12.5843Z"
          fill={Colors[fill!] ?? "black"}
        />
        <path
          d="M11.0945 7.84688C11.0945 7.48811 11.3854 7.19727 11.7441 7.19727H15.6418C16.0005 7.19727 16.2914 7.48811 16.2914 7.84688C16.2914 8.20565 16.0005 8.4965 15.6418 8.4965H11.7441C11.3854 8.4965 11.0945 8.20565 11.0945 7.84688Z"
          fill={Colors[fill!] ?? "black"}
        />
        <path
          d="M5.24808 2C3.45422 2 2 3.45422 2 5.24808V16.9412C2 18.735 3.45422 20.1892 5.24808 20.1892H10.5746C10.3642 19.7776 10.1925 19.3429 10.0644 18.89H5.24808C4.17176 18.89 3.29923 18.0174 3.29923 16.9412V5.24808C3.29923 4.17176 4.17176 3.29923 5.24808 3.29923H16.9412C18.0174 3.29923 18.89 4.17176 18.89 5.24808V10.0644C19.3429 10.1925 19.7776 10.3642 20.1892 10.5746V5.24808C20.1892 3.45422 18.735 2 16.9412 2H5.24808Z"
          fill={fill ?? "black"}
        />
        <path
          d="M16.941 22.7878C20.17 22.7878 22.7876 20.1702 22.7876 16.9413C22.7876 13.7123 20.17 11.0947 16.941 11.0947C13.712 11.0947 11.0945 13.7123 11.0945 16.9413C11.0945 20.1702 13.712 22.7878 16.941 22.7878ZM16.941 13.6932C17.2997 13.6932 17.5906 13.9841 17.5906 14.3428V16.2917H19.5395C19.8982 16.2917 20.1891 16.5826 20.1891 16.9413C20.1891 17.3 19.8982 17.5909 19.5395 17.5909H17.5906V19.5397C17.5906 19.8985 17.2997 20.1893 16.941 20.1893C16.5823 20.1893 16.2914 19.8985 16.2914 19.5397V17.5909H14.3426C13.9838 17.5909 13.6929 17.3 13.6929 16.9413C13.6929 16.5826 13.9838 16.2917 14.3426 16.2917H16.2914V14.3428C16.2914 13.9841 16.5823 13.6932 16.941 13.6932Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2530_13048">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
