import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  // selectToken,
  selectUser,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  // const isToken = useSelector(selectToken);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    // isToken,
  };
};
