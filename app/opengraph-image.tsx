import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Vlepo - Prepaid Livestreaming Platform";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              background: "linear-gradient(to right, #f97316, #ea580c)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Vlepo
          </div>
        </div>
        <div
          style={{
            fontSize: "36px",
            maxWidth: "70%",
            textAlign: "center",
          }}
        >
          Reshape the Livestreaming Economy
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
