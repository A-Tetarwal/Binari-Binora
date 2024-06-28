"use client";
import { useState } from "react";
import "./globals.css";
import Header from "@/Components/Header";
import Nav from "@/Components/Nav";

export default function RootLayout({ children }) {
  const [user, setuser] = useState("Jaani");
  return (
    <html lang="en">
      <body>
        <div id="top" className="flex justify-between items-center border-0 p-2 bg-cyan-700">
          <Header />
          <Nav user={user} />
        </div>
        {children}
      </body>
    </html>
  );
}
