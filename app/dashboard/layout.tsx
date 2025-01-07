import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardNav from "../components/dashboard/DashboardNav";
import { addUser } from "@/services/userService";

export default async function DashboardLayout({ children }: {children: React.ReactNode}) {

  const { userId } = await auth();

  if (!userId) {
    redirect('/');
  }

  const user = await currentUser();
  console.log('user', user)
  if(userId && user){
    const clerkUserId = `${userId}` ;
    const userUsernname = `${user.username}` || "";
    const UserName = `${user.firstName} ${user.lastName}` || "";
    const userEmail = user.emailAddresses[0]?.emailAddress || "";
    const userImage = user.imageUrl || "";
    await addUser(clerkUserId, userUsernname, UserName, userEmail, userImage)
  }

  return (
      <section className="mx-auto w-full  mt-1 p-2 flex gap-2">
        <div className="w-2/12 h-screen border-r border-gray-400 p-2">
          <DashboardNav/>
        </div>
        <div className="w-7/12 mx-auto">
          {children}
        </div>
        
        
      </section> 
  );
}
