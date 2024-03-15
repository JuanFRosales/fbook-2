import {Link, Outlet} from 'react-router-dom';
import {useUserContext} from '../hooks/ContextHooks';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  if (!user) {
    handleAutoLogin();
  }

  return (
    <>
      <header>
        <h1 className="bg-slate-950 pt-7 text-center text-4xl font-bold text-slate-50">
          Facebook 2
        </h1>
        <p className="bg-slate-950 pt-7 text-center text-xl font-bold text-slate-50">
         Less text, less old people, more fun!
        </p>
        <nav>
          <ul className="flex justify-end bg-slate-950">
            <li>
              <Link
                className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                to="/"
              >
       &#127966;

              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                    to="/profile"
                  >
                    &#128100;
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                    to="/upload"
                  >
                    &#128228;
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                    to="/logout"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="p-9">
        <Outlet />
      </main>
      <footer className="flex justify-end bg-slate-950 p-4">
        <p>Copyright 2024 </p>
      </footer>
    </>
  );
};

export default Layout;
