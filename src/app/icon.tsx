import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const avatar = readFileSync(join(process.cwd(), "public/images/avatar.jpg"));
  const src = `data:image/jpeg;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <img src={src} width={32} height={32} style={{ objectFit: "cover" }} />
    </div>,
    { ...size },
  );
}
