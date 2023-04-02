import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './components/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4 px-6 sm:flex sm:justify-between items-center">
        <h1 className="text-2xl font-bold">My Chat App</h1>
        {user && (
          <button
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg uppercase text-sm font-medium"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </button>
        )}
      </header>
      <main className="flex-1 bg-gray-900 py-4 px-6 sm:py-8 sm:px-12">
        {user ? <Chat /> : <div className="flex items-center justify-center h-full"><SignIn /></div>}
      </main>
      <footer className="bg-gray-800 text-white py-4 px-6 text-center text-sm">
        &copy; 2023 My Chat App. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
