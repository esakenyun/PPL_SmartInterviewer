import Image from "next/image";
export default function DashboardPage() {
  return (
    <>
      <div className="px-10 lg:px-52 py-10">
        <div className="flex justify-between items-center border-b-[1px] px-3 pb-4">
          <p className="text-varians-vr06 text-sm lg:text-2xl font-semibold">User Dashboard</p>
          <div className="flex items-center gap-3">
            <Image src="/avatar.png" width={50} height={50} className="w-10 lg:w-14" alt="avatar user" priority />
            <p className="text-varians-vr06 text-xs lg:text-base ">John Doe</p>
          </div>
        </div>
      </div>
    </>
  );
}
