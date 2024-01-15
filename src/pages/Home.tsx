import axios from "axios";
import { useEffect, useState } from "react";
import { serverUrl } from "../lib/utils";

function getCookie(key: string) {
  const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

export const Home = () => {
  const [user, setUser] = useState<Record<string, number>>({});

  useEffect(() => {
    const cookie = getCookie("token");
    async function verifyAuth() {
      const { data } = await axios.post(
        serverUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${cookie}`,
          },
          withCredentials: true,
        },
      );
      console.log(data);
      setUser(data.user);
    }
    console.log(cookie);
    verifyAuth();
  }, []);

  return (
    <div>
      Home
      <h1>{user?.username ? user.username : "logged out"}</h1>
    </div>
  );
};
