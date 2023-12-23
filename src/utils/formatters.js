/**
 * YouTube: TrungQuanDev - Một Lập Trình Viên
 * Created by trungquandev.com's author on Jun 28, 2023
 */
/**
 * Capitalize the first letter of a string
 */
export const capitalizeFirstLetter = (val) => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}

// Video 37.2 hàm generatePlaceholderCard xử lý bug logic thư viện Dnd-kid khi column rỗng:
// - Phía FE sẽ tạo ra một cái card đặc biệt: Placeholder card, ko liên quan tới Back-end
// - Card đặc biệt này sẽ được ẩn ở thư viện UI người dùng
// - Cấu trúc Id của Card này đẻ Unique rất đơn giản, ko cần làm random phức tạp:
// - "columnId-placeholder-card" (mỗi column chỉ có thể có tối đa một cái Placeholder Card)
// - Quan trọng khi tạo phải đày đủ: (_id, boardId, columnId, FE_PlaceholderCard)
export const generatePlaceholderCard = (column) => {
  return {
    _id: `${column._id}-placeholder-card`,
    boardId: column.boardId,
    columnId: column._id,
    FE_PlaceholderCard: true
  }
}