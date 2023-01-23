import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="dark:bg-slate-800 max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <Header />
        {children}
      </body>
    </html>
  );
}
