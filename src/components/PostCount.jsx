function PostCount({ count }) {
  // รับ prop count จำนวนโพสต์ทั้งหมด
  return (
    <p style={{ color: "#4a5568", marginBottom: "1rem" }}>
      โพสต์ทั้งหมด: {count} รายการ
    </p>
  );
}

export default PostCount;
