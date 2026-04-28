import "./globals.css";

export const metadata = {
  title: "Mo's Details | New Minas & Annapolis Valley",
  description:
    "Professional detailing in New Minas and the Annapolis Valley.",
  openGraph: {
    title: "Mo's Details",
    description:
      "Professional detailing in New Minas and the Annapolis Valley.",
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
