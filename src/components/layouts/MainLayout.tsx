import TaskContainer from "../common/molecules/TaskContainer/TaskContainer";

const MainLayout = () => {
  return (
    <div className="min-h-screen w-full p-5 max-w-[40rem] m-auto flex justify-center items-center">
      <TaskContainer />
    </div>
  );
};

export default MainLayout;
