import moment from "moment";
import { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
}

const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/user/all-users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id: string) => {};

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md overflow-hidden">
          <thead className="bg-gray-200">
            <tr className="text-left">
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Gender</th>
              <th className="py-2 px-4 border">Date of Birth</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="text-center border-b">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">{user.phone}</td>
                <td className="py-2 px-4 border">{user.gender}</td>
                <td className="py-2 px-4 border">
                  {moment(user.dateOfBirth).format("Do MMM, YYYY")}
                </td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
