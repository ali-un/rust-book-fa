import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "زبان برنامه نویسی راست",
  description: "کتاب فارسی آموزش کامل زبان برنامه نویسی راست",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
