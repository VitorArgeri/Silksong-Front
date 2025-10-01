import { Marcellus } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const marcellus = Marcellus({ 
  subsets: ["latin"], 
  weight: "400" 
});

export const metadata = {
  title: "Silksong Project",
  description: "Projeto Silksong",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
  <body className={`${marcellus.variable}`}>
        {children}
      </body>
    </html>
  );
}
