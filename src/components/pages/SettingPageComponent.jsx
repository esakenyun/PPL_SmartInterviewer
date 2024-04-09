import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { FaClockRotateLeft } from "react-icons/fa6";
import { RiFileEditLine } from "react-icons/ri";

export default function SettingPageComponent({ props }) {
  const handleSubmit = props.handleSubmit;

  return (
    <>
      <div className="flex flex-col gap-10 px-10 py-10 lg:px-64 lg:py-24">
        <div className="w-full bg-[#36343C] rounded-lg">
          <div className="px-5 py-3 text-varians-vr06">
            <p className="mb-5 font-bold text-xl lg:text-2xl">Account</p>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <FaRegUser className="text-2xl" />
                  <p>Nickname</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </div>
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <FaRegUserCircle className="text-2xl" />
                  <p>Avatar</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </div>
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <MdOutlinePrivacyTip className="text-2xl" />
                  <p>Security</p>
                </div>
                {/* <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
                <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-[#FA5F47] after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span> */}
                <IoIosArrowForward className="text-xl" />
              </div>
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <IoMdNotificationsOutline className="text-2xl" />
                  <p>Notifications</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </div>
              <button onClick={handleSubmit} className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-6">
                  <TbLogout className="ml-1 text-2xl" />
                  <p>Log out</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#36343C] rounded-lg">
          <div className="px-5 py-3 text-varians-vr06">
            <p className="mb-5 font-bold text-xl lg:text-2xl">About</p>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <FaClockRotateLeft className="text-2xl" />
                  <p>Version</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </div>
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <RiFileEditLine className="text-2xl" />
                  <p>Feedback</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </div>
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <MdOutlinePrivacyTip className="text-2xl" />
                  <p>Privacy</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
