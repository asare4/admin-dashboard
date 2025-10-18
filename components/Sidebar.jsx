"use client";

import { Bell, DollarSign, House, Info, Mail, Menu, Settings, ShoppingBag, ShoppingCart, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const ICONS = {
    House,
    DollarSign,
    Settings,
    ShoppingBag,
    ShoppingCart,
    Mail,
    Users,
    Bell,
    Info
}

export const Sidebar = () => {
        const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const [SidebarItems, SetSidebarItems] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        fetch("data/data.json")
        .then((res) => res.json())
        .then((data) => SetSidebarItems(data))
    }, [])

    return <div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
    }`}
    >
        <div className='h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]'>

<button 
    onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
    className='p-2 rounded-full hover:bg-[#2f2f2f] transition-colors max-w-fit cursor-pointer'
>
    <Menu size={24}/>
</button>

            <nav className='mt-8 flex-grow'>
                {SidebarItems.map((item) => {
                    const IconComponent = ICONS[item.icon]
                    return (
                        <Link key={item.name} href={item.href}>
                            <div className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 ${
                                pathname === item.href ? "bg-[#2f2f2f]" : ""
                            }`}>
                                <IconComponent size={20} style={{minWidth: "20px"}} />
                                {isSidebarOpen && <span className='ml-4 whitespace-nowrap'>{item.name}</span>}
                            </div>
                        </Link>
                    )
                })}
            </nav>
        </div>
    </div>
}

// export default Sidebar;