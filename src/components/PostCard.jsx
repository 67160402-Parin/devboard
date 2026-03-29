import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import CommentList from "./CommentList";

function PostCard({ post }) {
  // รับ prop post ซึ่งเป็นข้อมูลโพสต์ที่จะแสดง
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(post.id);
  const [showComments, setShowComments] = useState(false);

  return (
    <div // การ์ดที่แสดงโพสต์แต่ละโพสต์
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "white",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem" }}>
        <Link
          to={`/posts/${post.id}`}
          style={{ color: "#1e40af", textDecoration: "none" }}
        >
          {post.title}
        </Link>
      </h3>
      <p style={{ margin: "0 0 0.75rem", color: "#4a5568", lineHeight: 1.6 }}>
        {post.body}
      </p>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button // ปุ่มสำหรับเพิ่ม/ลบจากรายการโปรด
          onClick={() => toggleFavorite(post.id)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            color: isFavorite ? "#e53e3e" : "#a0aec0",
          }}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

        <button // ปุ่มสำหรับแสดง/ซ่อนความคิดเห็น
          onClick={() => setShowComments((prev) => !prev)}
          style={{
            background: "none",
            border: "1px solid #e2e8f0",
            cursor: "pointer",
            fontSize: "0.9rem",
            padding: "0.25rem 0.75rem",
            borderRadius: "4px",
            color: "#4a5568",
          }}
        >
          {showComments ? "▲ ซ่อน" : "▼ ความคิดเห็น"}
        </button>
      </div>

      {showComments && <CommentList postId={post.id} />}
    </div>
  );
}

export default PostCard;
