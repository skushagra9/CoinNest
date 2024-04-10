import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@repo/ui/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CoinNest",
  description:
    "Your one-stop digital wallet for seamless transactions and financial management",
  icons: {
    icon: [
      {
        url: "../../../../packages/ui/src/app/mylogo.svg",
        href: "../../../../packages/ui/src/app/mylogo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>{" "}
      </body>
    </html>
  );
}
