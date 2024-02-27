import type { Metadata } from "next";
import { ApiProvider } from "./context/ApiProvider";
import { SinglePageValueProvider } from "./context/SinglePageValueProvider";
import { RestoreScrollProvider } from "./context/RestoreScrollProvider";
import { montserrat } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virtuwed Kenangan Virtual",
  description: "Virtuwed Kenangan Virtual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApiProvider>
      <RestoreScrollProvider>
        <SinglePageValueProvider>
          <html lang="en">
            <body className={montserrat.className}>{children}</body>
          </html>
        </SinglePageValueProvider>
      </RestoreScrollProvider>
    </ApiProvider>
  );
}
