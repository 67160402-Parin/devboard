import PostList from "../components/PostList";
import AddPostForm from "../components/AddPostForm";

function HomePage() {
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "0 1rem" }}>
      <AddPostForm onAddPost={() => {}} /> // ฟอร์มสำหรับเพิ่มโพสต์ใหม่
      <PostList /> // แสดงรายการโพสต์ทั้งหมด
    </div>
  );
}

export default HomePage;
