import "./globals.css";

export const metadata = {
  title: "Roopesh kumar",
  description: "roopesh kumar's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
