import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "#DC2626",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "6px",
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 19H6C5.45 19 5 18.55 5 18V12C5 11.45 5.45 11 6 11H8L10 8H14L16 11H18C18.55 11 19 11.45 19 12V18C19 18.55 18.55 19 18 19Z"
          fill="white"
        />
        <rect x="7" y="14" width="3" height="2" rx="1" fill="#DC2626" />
        <rect x="14" y="14" width="3" height="2" rx="1" fill="#DC2626" />
        <path d="M3 15H5V17H3V15Z" fill="white" />
        <circle cx="8.5" cy="15" r="1" fill="white" />
        <circle cx="15.5" cy="15" r="1" fill="white" />
      </svg>
    </div>,
    {
      ...size,
    },
  )
}
