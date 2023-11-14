import Navbar from "@/components/Navbar/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body>
      <Navbar></Navbar>
        {children}
        <h1 className="text-4xl font-bold text-center mt-5">footer</h1>
      </body>
      
    </html>
    
  );
}

