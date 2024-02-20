import { useAuth } from "../context/AuthContext";

function MainPage() {
  const { getUser, userLogout } = useAuth();

  const getUserName = () => {
    const user = getUser();
    return user ? user.data.name : "";
  };

  const logout = () => {
    userLogout();
  };

  return (
    <>
      <div className="bg-gray-900 text-white p-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Your App Name</div>
          <div className="flex items-center">
            <div className="mr-4">Welcome, {getUserName()}</div>
            <a href="/">
              <button
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                onClick={logout}
              >
                Logout
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
