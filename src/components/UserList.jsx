import { useState, useEffect } from "react"; // นำเข้า useState และ useEffect จาก React เพื่อจัดการ state และ effects
import UserCard from "./UserCard"; // นำเข้า UserCard component เพื่อแสดงข้อมูลผู้ใช้
import LoadingSpinner from "./LoadingSpinner";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect จะทำงานเมื่อ component ถูก mount ขึ้นมา และจะทำการ fetch ข้อมูลจาก API
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch {
        // ไม่แสดง error ในตัวอย่างนี้ (นักศึกษาลองเพิ่มเองได้)
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <LoadingSpinner />; // แสดง loading spinner ขณะรอข้อมูล

  return (
    // แสดงรายชื่อผู้ใช้เมื่อโหลดข้อมูลเสร็จแล้ว
    <div>
      <h2
        style={{
          color: "#2d3748",
          borderBottom: "2px solid #1e40af",
          paddingBottom: "0.5rem",
        }}
      >
        สมาชิก
      </h2>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default UserList;
