import { fetchUsers } from "../store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <div>UsersList</div>;
};

export default UsersList;
