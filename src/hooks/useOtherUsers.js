import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUsers } from "../redux/userSlice";

const useOtherUsers = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // ✅ STOP API CALL IF ID IS NOT READY (login / logout case)
    if (!id) {
      dispatch(getOtherUsers(null)); // clear other users on logout
      return;
    }

    const fetchOtherUsers = async () => {
      try {
        const res = await axios.get(
          `${USER_API_END_POINT}/otheruser/${id}`,
          { withCredentials: true }
        );

        dispatch(getOtherUsers(res.data.otherUsers));
      } catch (error) {
        console.error(
          "Fetch other users error:",
          error.response?.data || error.message
        );
      }
    };

    fetchOtherUsers();
  }, [id, dispatch]);
};

export default useOtherUsers;
