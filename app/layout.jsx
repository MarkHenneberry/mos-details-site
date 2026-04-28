import "./globals.css";

export const metadata = {
  title: "Mike's Mobile Detailing | Halifax & Dartmouth",
  description:
    "Professional mobile car detailing in Halifax, Dartmouth, and nearby communities.",
  openGraph: {
    title: "Mike's Mobile Detailing",
    description:
      "Professional mobile car detailing in Halifax, Dartmouth, and nearby communities.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
