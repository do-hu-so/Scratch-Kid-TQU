
export type ResourceType = 'books' | 'code' | 'videos' | 'ppt';
export type AgeCategory = '6-8' | '9-11' | '12-14' | 'teacher';
export type GradeLevel = '3' | '4' | '5';

export interface ResourceItem {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    previewUrl: string;
    downloadUrl: string;
    type: ResourceType;
    category: AgeCategory;
    grade?: GradeLevel;
}

// Default Constants (Dùng cho dữ liệu mẫu, bạn có thể thay thế trong từng item bên dưới)
const THUMB_BOOK = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop";
const THUMB_CODE = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop";
const THUMB_VID = "https://codekids.asia/wp-content/uploads/2023/11/hoc-lap-trinh-scratch.png";
const THUMB_PPT = "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop";

const LINK_DL = "https://drive.google.com/drive/folders/1aQpDQwkYAnnof2hSJTdvFKPecJBmIQS_?usp=sharing";
const LINK_PV_IMG = "https://drive.google.com/file/d/1Z-p8KA3s6d3ABdD0kg7ckI0izGjTiQ60/view?usp=sharing";
const LINK_PV_PPT = "https://docs.google.com/presentation/d/1dCrcwt-q9lV-X0hBeDQ1vaWpB4LuycP7/edit?usp=sharing&ouid=110035452335957165964&rtpof=true&sd=true";
const LINK_PV_VID = "https://drive.google.com/file/d/15g-WMPQ9iP0MaYyQvXG-hurC0rPRJV4J/view?usp=sharing";
// thumbnail
const THUMB_BOOK3 = "https://drive.google.com/file/d/1T98Ci5LB09lto1M9barh3UE7TAX4Mt5y/view?usp=sharing"
const THUMB_CODE3 = ""
const THUMB_VIDEO3 = ""
const THUMB_PPT3 = ""

const THUMB_BOOK4 = "https://drive.google.com/file/d/1Arbxv9YNsLR423TGKHKFd6VuOOzg8FRw/view?usp=sharing"
const THUMB_CODE4 = ""
const THUMB_VIDEO4 = ""
const THUMB_PPT4 = ""

const THUMB_BOOK5 = "https://drive.google.com/file/d/1kXAimyz3Eu4J464hGwM5L25efLs60RwC/view?usp=sharing"
const THUMB_CODE5 = ""
const THUMB_VIDEO5 = ""
const THUMB_PPT5 = ""
//============================TÀI LIÊU============
//============================book================
const BOOK_3 = "https://drive.google.com/file/d/1d6Vxs5WacRejf9-4EPt9RiUM8AUR9OVz/view?usp=sharing"
const BOOK_4 = "https://drive.google.com/file/d/1bA5QZMcX-SASrtnvgAMAwjzDUwNPa5bb/view?usp=sharing"
const BOOK_5 = "https://drive.google.com/file/d/1HPe7_4wLTxP59SsIfNHbwIOGoreWg5sQ/view?usp=sharing"
//============================code================
const CODE_3 = "https://drive.google.com/file/d/1_GU1DRvMmjxgkcGc-CoC7aTT5fBDTSDi/view?usp=sharing"
const CODE_4 = "https://drive.google.com/file/d/1-omxHXe8W9YWiE1lT8GW_LzkRgJ-TYRt/view?usp=sharing"
const CODE_5 = "https://drive.google.com/file/d/1MvxYXf-D-SnmsU4yUirT7YUqu3H9KLcF/view?usp=sharing"
//============================video===============
const VIDEO_3 = "https://drive.google.com/file/d/1mYrS4lvmdhBYryUB10s0ONBIvT-1zHoN/view?usp=sharing"
const VIDEO_4 = "https://drive.google.com/file/d/1kSnUoUnP2pZlk3U8lyOZS5t4Xm2LqukJ/view?usp=sharing"
const VIDEO_5 = "https://drive.google.com/file/d/1Oq0OMLe2o-CpED1KXS-U6Y6awPFj_tk1/view?usp=sharing"
//============================ppt================
const PPT_3 = "https://docs.google.com/presentation/d/1qZHTknVZAhRJ4JSzw1CejbNSwpIkM-Og/edit?usp=sharing&ouid=110035452335957165964&rtpof=true&sd=true"
const PPT_4 = "https://docs.google.com/presentation/d/1hFu5BOjfeny5-nw7g4E1h74GN7eay2m-/edit?usp=sharing&ouid=110035452335957165964&rtpof=true&sd=true"
const PPT_5 = "https://docs.google.com/presentation/d/1kqvXgZreINwi8vOgic3qw0DJu0vRUIuQ/edit?usp=sharing&ouid=110035452335957165964&rtpof=true&sd=true"
// Helper Interface
interface ItemConfig { title: string; thumb: string; preview: string; download: string; description?: string; }
const item = (title: string, thumb: string, preview: string, download: string, description: string = ""): ItemConfig => ({ title, thumb, preview, download, description });

// =============================================================================
// DANH SÁCH CHI TIẾT (SỬA NỘI DUNG TỪNG BÀI TẠI ĐÂY)
// =============================================================================

const DATA = {
    '6-8': { // LỚP 3
        books: [
            item("Làm quen với Scratch", THUMB_BOOK3, BOOK_3, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 2", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 3", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 4", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 5", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 6", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 7", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 8", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 9", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 10", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 11", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 12", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 13", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 14", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Làm quen với Scratch - Bài 15", THUMB_BOOK3, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
        ],
        code: [
            item("Code mẫu Scratch lớp 3", THUMB_CODE, CODE_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Code mẫu - Bài 2", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            item("Code mẫu - Bài 3", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            item("Code mẫu - Bài 4", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            item("Code mẫu - Bài 5", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Code mẫu - Bài 6", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Code mẫu - Bài 7", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Code mẫu - Bài 8", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Code mẫu - Bài 9", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Code mẫu - Bài 10", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Code mẫu - Bài 11", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Code mẫu - Bài 12", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Code mẫu - Bài 13", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Code mẫu - Bài 14", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Code mẫu - Bài 15", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Khởi động tư duy lập trình"),
        ],
        videos: [
            item("Video Demo lớp 3", THUMB_VID, VIDEO_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Video Demo - Bài 2", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            item("Video Demo - Bài 3", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            item("Video Demo - Bài 4", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            item("Video Demo - Bài 5", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Video Demo - Bài 6", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Video Demo - Bài 7", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Video Demo - Bài 8", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Video Demo - Bài 9", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Video Demo - Bài 10", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Video Demo - Bài 11", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Video Demo - Bài 12", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Video Demo - Bài 13", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Video Demo - Bài 14", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
            // item("Video Demo - Bài 15", THUMB_VID, LINK_PV_VID, LINK_DL, "Khởi động tư duy lập trình"),
        ],
        ppt: [
            item("Slide Bài giảng - Bài 1", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 2", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 3", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 4", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 5", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 6", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 7", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 8", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 9", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 10", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 11", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 12", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 13", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 14", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
            item("Slide Bài giảng - Bài 15", THUMB_BOOK3, PPT_3, LINK_DL, "Khởi động tư duy lập trình"),
        ],
        //code2: Array(15).fill(null).map((_, i) => item(`Code mẫu - Bài ${i + 1}`, THUMB_CODE, LINK_PV_IMG, LINK_DL)),
        //videos: Array(15).fill(null).map((_, i) => item(`Video Demo - Bài ${i + 1}`, THUMB_VID, LINK_PV_VID, LINK_DL)),
        //ppt: Array(4).fill(null).map((_, i) => item(`Slide Bài giảng - Bài ${i + 1}`, THUMB_BOOK3, LINK_PV_PPT, LINK_DL)),
    },
    '9-11': { // LỚP 4
        books: [
            item("Sáng tạo cùng Scratch", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 2", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 3", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 4", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 5", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 6", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 7", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 8", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 9", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 10", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 11", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 12", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 13", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 14", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Sáng tạo cùng Scratch - Bài 15", THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình"),
        ],
        code: [
            item("Code mẫu lớp 4", THUMB_CODE, CODE_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Code mẫu - Bài 2", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Code mẫu - Bài 3", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Code mẫu - Bài 4", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Code mẫu - Bài 5", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Code mẫu - Bài 6", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Code mẫu - Bài 7", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Code mẫu - Bài 8", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Code mẫu - Bài 9", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Code mẫu - Bài 10", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Code mẫu - Bài 11", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Code mẫu - Bài 12", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Code mẫu - Bài 13", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Code mẫu - Bài 14", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Code mẫu - Bài 15", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Phát triển kỹ năng lập trình"),
        ],
        videos: [
            item("Video Demo lớp 4", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Video Demo - Bài 2", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Video Demo - Bài 3", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Video Demo - Bài 4", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Video Demo - Bài 5", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Video Demo - Bài 6", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Video Demo - Bài 7", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Video Demo - Bài 8", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Video Demo - Bài 9", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Video Demo - Bài 10", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Video Demo - Bài 11", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Video Demo - Bài 12", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Video Demo - Bài 13", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Video Demo - Bài 14", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            // item("Video Demo - Bài 15", THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình"),
        ],
        ppt: [
            item("Slide Bài giảng - Bài 1", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 2", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 3", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 4", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 5", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 6", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 7", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 8", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 9", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 10", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 11", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 12", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 13", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 14", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
            item("Slide Bài giảng - Bài 15", THUMB_BOOK4, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình"),
        ],
    },
    '12-14': { // LỚP 5
        books: [
            item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG ", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 2", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 3", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 4", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 5", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 6", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 7", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 8", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 9", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 10", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 11", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 12", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 13", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 14", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG - Bài 15", THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng"),
        ],
        code: [
            item("Code mẫu lớp 5", THUMB_CODE, CODE_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Code mẫu - Bài 2", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            item("Code mẫu - Bài 3", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            item("Code mẫu - Bài 4", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            item("Code mẫu - Bài 5", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Code mẫu - Bài 6", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Code mẫu - Bài 7", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Code mẫu - Bài 8", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Code mẫu - Bài 9", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Code mẫu - Bài 10", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Code mẫu - Bài 11", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Code mẫu - Bài 12", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Code mẫu - Bài 13", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Code mẫu - Bài 14", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Code mẫu - Bài 15", THUMB_CODE, LINK_PV_IMG, LINK_DL, "Dự án STEM ứng dụng"),
        ],
        videos: [
            item("Video Demo lớp 5", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Video Demo - Bài 2", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Video Demo - Bài 3", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Video Demo - Bài 4", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Video Demo - Bài 5", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Video Demo - Bài 6", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Video Demo - Bài 7", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Video Demo - Bài 8", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Video Demo - Bài 9", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Video Demo - Bài 10", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Video Demo - Bài 11", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Video Demo - Bài 12", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Video Demo - Bài 13", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Video Demo - Bài 14", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
            // item("Video Demo - Bài 15", THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng"),
        ],
        ppt: [
            item("Slide Bài giảng - Bài 1", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 2", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 3", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 4", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 5", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 6", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 7", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 8", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 9", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 10", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 11", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 12", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 13", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 14", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
            item("Slide Bài giảng - Bài 15", THUMB_BOOK5, PPT_5, LINK_DL, "Dự án STEM ứng dụng"),
        ],
    },
    'teacher': {
        books: {
            '3': Array(1).fill(null).map((_, i) => item(`Giáo trình L3 - Bài ${i + 1}`, THUMB_BOOK3, BOOK_3, LINK_DL, "Khởi động tư duy lập trình")),
            '4': Array(1).fill(null).map((_, i) => item(`Giáo trình L4 - Bài ${i + 1}`, THUMB_BOOK4, BOOK_4, LINK_DL, "Phát triển kỹ năng lập trình")),
            '5': Array(1).fill(null).map((_, i) => item(`Giáo trình L5 - Bài ${i + 1}`, THUMB_BOOK5, BOOK_5, LINK_DL, "Dự án STEM ứng dụng")),
        },
        code: {
            '3': Array(5).fill(null).map((_, i) => item(`Code GV L3 - Bài ${i + 1}`, THUMB_CODE, CODE_3, LINK_DL, "Khởi động tư duy lập trình")),
            '4': Array(5).fill(null).map((_, i) => item(`Code GV L4 - Bài ${i + 1}`, THUMB_CODE, CODE_4, LINK_DL, "Phát triển kỹ năng lập trình")),
            '5': Array(5).fill(null).map((_, i) => item(`Code GV L5 - Bài ${i + 1}`, THUMB_CODE, CODE_5, LINK_DL, "Dự án STEM ứng dụng")),
        },
        videos: {
            '3': Array(5).fill(null).map((_, i) => item(`Video Dạy L3 - Bài ${i + 1}`, THUMB_VID, VIDEO_3, LINK_DL, "Khởi động tư duy lập trình")),
            '4': Array(5).fill(null).map((_, i) => item(`Video Dạy L4 - Bài ${i + 1}`, THUMB_VID, VIDEO_4, LINK_DL, "Phát triển kỹ năng lập trình")),
            '5': Array(5).fill(null).map((_, i) => item(`Video Dạy L5 - Bài ${i + 1}`, THUMB_VID, VIDEO_5, LINK_DL, "Dự án STEM ứng dụng")),
        },
        ppt: {
            '3': Array(15).fill(null).map((_, i) => item(`Slide GV L3 - Bài ${i + 1}`, THUMB_PPT, PPT_3, LINK_DL, "Khởi động tư duy lập trình")),
            '4': Array(15).fill(null).map((_, i) => item(`Slide GV L4 - Bài ${i + 1}`, THUMB_PPT, PPT_4, LINK_DL, "Phát triển kỹ năng lập trình")),
            '5': Array(15).fill(null).map((_, i) => item(`Slide GV L5 - Bài ${i + 1}`, THUMB_PPT, PPT_5, LINK_DL, "Dự án STEM ứng dụng")),
        }
    }
};

// =============================================================================
// LOGIC (KHÔNG SỬA)
// =============================================================================

export const resources: ResourceItem[] = [];

const add = (cat: AgeCategory, type: ResourceType, cfg: ItemConfig, idx: number, gr?: GradeLevel) => {
    resources.push({
        id: `${cat}-${type}-${gr || 'g'}-${idx}`,
        title: cfg.title,
        description: cfg.description || `Tài liệu ${cfg.title}`,
        thumbnail: cfg.thumb,
        previewUrl: cfg.preview,
        downloadUrl: cfg.download,
        type, category: cat, grade: gr
    });
}

// Build Student
(['6-8', '9-11', '12-14'] as AgeCategory[]).forEach(cat => {
    const d = DATA[cat as keyof typeof DATA];
    if (d) {
        (['books', 'code', 'videos', 'ppt'] as ResourceType[]).forEach(t => {
            // @ts-ignore
            d[t].forEach((item, i) => add(cat, t, item, i));
        });
    }
});

// Build Teacher
(['books', 'code', 'videos', 'ppt'] as ResourceType[]).forEach(t => {
    // @ts-ignore
    const d = DATA['teacher'][t];
    (['3', '4', '5'] as GradeLevel[]).forEach(g => {
        // @ts-ignore
        if (d[g]) d[g].forEach((item, i) => add('teacher', t, item, i, g));
    });
});


export const categoryLabels: Record<string, string> = {
    '6-8': 'Lớp 3', '9-11': 'Lớp 4', '12-14': 'Lớp 5', 'teacher': 'Giáo viên',
};
export const typeLabels: Record<string, string> = {
    'books': 'tài liệu', 'code': 'Code mẫu', 'videos': 'Video kết quả', 'ppt': 'PowerPoint bài giảng',
};
