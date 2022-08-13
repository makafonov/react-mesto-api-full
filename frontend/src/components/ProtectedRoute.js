import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, loggedIn }) {
  if (!loggedIn) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}
