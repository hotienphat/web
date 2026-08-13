# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

HTML/CSS/JS thuần + Tailwind CSS (qua CDN)

## Users

Nhà tuyển dụng, đối tác công việc, bạn bè, người quen và cộng đồng trực tuyến. Họ muốn tìm hiểu về Hồ Tiến Phát, đánh giá kỹ năng, xem các dự án, sở thích, hoặc muốn liên hệ và ủng hộ (donate).

## Product Purpose

Đóng vai trò là không gian số cá nhân (Portfolio) của Hồ Tiến Phát. Mục tiêu chính là thể hiện kỹ năng để tìm kiếm cơ hội việc làm, chia sẻ sở thích cá nhân, cung cấp các liên kết nhanh và có tính năng nhận donate.

## Positioning

Một trang portfolio cá nhân không chỉ hiển thị thông tin khô khan mà còn mang tính giải trí với trải nghiệm tương tác cao. Việc kết hợp trình phát nhạc tích hợp và các hiệu ứng trực quan (particles, audio visualizer, cursor trail) giúp tạo ấn tượng khác biệt mạnh mẽ so với các trang CV/Portfolio thông thường.

## Operating Context

Người dùng truy cập qua trình duyệt web trên cả desktop và thiết bị di động. Giao diện được thiết kế để người dùng có thể thư giãn (nghe nhạc) trong khi duyệt qua thông tin và các liên kết của tác giả.

## Capabilities and Constraints

- Trang web tĩnh (Static Site), không sử dụng JS Framework phức tạp, dễ dàng triển khai.
- Tận dụng thẻ Canvas HTML5 cho các hiệu ứng nền sinh động.
- Trình phát nhạc tự tùy biến (custom music player) với tính năng chat head bubble.
- Tích hợp tính năng hiện/ẩn mã QR và sao chép số tài khoản (Momo, Viettinbank) một cách tiện lợi.
- Ràng buộc: Một số tài nguyên (ví dụ file SVG bọc base64 PNG) hiện đang rất lớn, có thể ảnh hưởng đến hiệu năng tải trang nếu không được tối ưu.

## Brand Commitments

- Tên định danh: Hồ Tiến Phát (Fot).
- Thông tin cốt lõi: Sinh viên ngành Công nghệ thông tin tại trường HUTECH, quê quán Lâm Đồng.
- Giọng điệu (Tone & Voice): Thân thiện, cởi mở, hướng tới cộng đồng ("Chào mừng bạn!", "Mời mình một ly cà phê").

## Evidence on Hand

- Tài nguyên hình ảnh thực tế: Avatar (`avt.png`), logo (`Logoweb.svg`, `Phepmaulogo.jpg`).
- Thông tin quyên góp thực tế (Momo, Viettinbank).
- Các liên kết mạng xã hội chính thức (Facebook, Instagram, Threads, YouTube).

## Product Principles

1. **Trải nghiệm cá nhân hóa:** Dùng âm nhạc và hiệu ứng hình ảnh (visualizer) làm cầu nối cảm xúc với người xem.
2. **Cân bằng giữa chuyên nghiệp và thú vị:** Cung cấp đầy đủ thông tin cho nhà tuyển dụng nhưng vẫn giữ được cá tính độc đáo của thế hệ trẻ.
3. **Giữ kiến trúc đơn giản, hiệu quả:** Phát triển trên nền tảng web thuần túy để tối ưu việc bảo trì và có thể chỉnh sửa nhanh chóng mà không cần build tool phức tạp.
