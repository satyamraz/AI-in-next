import SideNav from "@/components/ui/nav/side-nav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideNav></SideNav>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 overflow-auto">
        {children}
      </main>
    </div>
  );
}
