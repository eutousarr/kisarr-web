import Link from "next/link"
import { SignOutButton } from "@clerk/nextjs";
import { FaSignOutAlt, FaHome} from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { auth, currentUser } from "@clerk/nextjs/server";
import { getUser } from "@/services/userService";
import { redirect } from "next/navigation";


export default async function DashboardNav() {
  const { userId } = auth();
 
   if (!userId) {
     redirect("/");
   }
 
   const data = await getUser(userId);

  const menuDashboard = [
    {name: "Home", icon: FaHome  , path:"/dashboard/home"},
    {name: "Profil", icon: IoIosSettings  , path:"/dashboard/settings"},
  ]


  return (
    <nav>
      <div className="text-center text-orange-500 p-2 mx-auto">{data?.userEmail}</div>
        <ul className="mb-4">
          {menuDashboard.map((item, index)=> (
          <Link key={index} href={item.path} className="flex items-center gap-2 p-3 hover:bg-red-800 hover:text-white rounded-md">
          <item.icon/>
            <p className="text-sm">{item.name}</p>
          </Link>

          ))}
 
        </ul>

        <SignOutButton>
          <button className="bg-red-500 hover:bg-red-600 text-white rounded-md p-2 flex items-center gap-2 w-full text-sm"><FaSignOutAlt   /><span>Quitter</span> </button>
        </SignOutButton>

    </nav>
  )
}
