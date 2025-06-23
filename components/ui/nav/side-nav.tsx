"use client";
import { RefreshCcw, LayoutDashboard, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const path = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: <RefreshCcw className="h-4 w-4" />,
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <Settings className="h-4 w-4" />,
    },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`${
              path === item.href
                ? "text-blue-400"
                : "text-white hover:text-blue-400"
            } flex items-center space-x-2`}
          >
            {item.icon}
            <span /* className = "ml-2 hidden md:inline" */>{item.name}</span>
          </Link>
        ))}
      </nav>
      <h2 className="mt-8 text-lg font-semibold px-2">Dashboard</h2>
    </aside>
  );
}