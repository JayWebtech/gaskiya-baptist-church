import "./globals.css";

export const metadata = {
  title: "Gaskiya Baptist Church",
  description:
    "Welcome to Gaskiya Baptist Church, a vibrant community dedicated to worship, spiritual growth, and spreading the love of Christ. Join us for uplifting services, engaging ministries, and fellowship opportunities that inspire faith and connection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
