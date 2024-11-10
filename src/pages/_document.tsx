import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Main />
          <Footer />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
