interface IconProps {
  className?: string;
  size?: number;
}

export const ShoppingCartIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V16.5M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PhoneIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.93 21 3 13.07 3 3.08C3 2.48 3.48 2 4.08 2H7.09C7.69 2 8.17 2.48 8.17 3.08C8.17 4.08 8.35 5.04 8.68 5.94C8.82 6.27 8.74 6.65 8.47 6.92L6.9 8.49C8.07 10.76 9.24 11.93 11.51 13.1L13.08 11.53C13.35 11.26 13.73 11.18 14.06 11.32C14.96 11.65 15.92 11.83 16.92 11.83C17.52 11.83 18 12.31 18 12.91V15.92C18 16.52 17.52 17 16.92 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LocationIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const MenuIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CloseIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FilterIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const InfoIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);