import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen w-full p-5 max-w-[40rem] m-auto flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default MainLayout;
