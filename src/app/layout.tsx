import "./globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: "400",
  preload: true,
  style: ["normal"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Assessment Task"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
