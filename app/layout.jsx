import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Kavya Labs — AI copilot for operations teams",
  description:
    "Kavya Labs routes incoming requests, answers repetitive ones from your own playbooks, and turns the day's activity into a report automatically.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable}`}>
      <body className="bg-kavya-bg text-kavya-fg font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
