import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Roopesh kumar",
  description: "roopesh kumar's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
