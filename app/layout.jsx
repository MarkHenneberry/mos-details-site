import "./globals.css";

export const metadata = {
  title: "Mo's Details | Dartmouth & HRM",
  description:
    "Professional detailing in Dartmouth, Halifax, and nearby communities.",
  openGraph: {
    title: "Mo's Details",
    description:
      "Professional detailing in Dartmouth, Halifax, and nearby communities.",
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
