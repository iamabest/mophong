export const simulationsByGrade = [
  {
    id: 'grade-6',
    grade: '6',
    accent: 'success',
    title: 'Toán 6 - Trực quan hóa số học và đối xứng',
    simulations: [
      {
        slug: 'lop6-truc-so-nguyen',
        title: 'Trục số nguyên động',
        href: './?simulation=lop6-truc-so-nguyen',
        legacyPath: './simulations/lop6-truc-so-nguyen/index.html',
        tags: ['Số học', 'Hoạt động'],
        tagType: 'algebra',
        status: 'Sẵn sàng',
        description:
          'Mô phỏng phép cộng, trừ số nguyên trên trục số bằng các bước nhảy trực quan giúp học sinh hiểu bản chất số âm.',
      },
      {
        slug: 'lop6-doi-xung-hinh-phang',
        title: 'Tìm đối xứng trong thực tế',
        href: './?simulation=lop6-doi-xung-hinh-phang',
        legacyPath: './simulations/lop6-doi-xung-hinh-phang/index.html',
        tags: ['Hình học', 'Hoạt động'],
        tagType: 'geometry',
        status: 'Sẵn sàng',
        description:
          'Cắt, gấp và kiểm tra trục đối xứng, tâm đối xứng của các hình phẳng thường gặp qua thao tác tương tác.',
      },
    ],
  },
  {
    id: 'grade-7',
    grade: '7',
    accent: 'primary',
    title: 'Toán 7 - Hình học không gian và số thực',
    simulations: [
      {
        slug: 'lop7-trai-phang',
        title: 'Trải phẳng hình không gian 3D',
        href: './?simulation=lop7-trai-phang',
        component: 'spatial-nets',
        tags: ['3D không gian', 'React 3D'],
        tagType: 'geometry',
        status: '7 hình khối',
        description:
          'Chọn hình, kéo thanh trượt và quan sát quá trình khai triển mô hình 3D mượt bằng React Three Fiber.',
      },
      {
        slug: 'lop7-lang-tru-3d',
        title: 'Lăng trụ và hình khối 3D',
        href: './?simulation=lop7-lang-tru-3d',
        component: 'spatial-nets',
        tags: ['3D không gian', 'React 3D'],
        tagType: 'geometry',
        status: 'Nâng cấp',
        description:
          'Bộ mô phỏng hình trải phẳng mới hỗ trợ lăng trụ tam giác, ngũ giác, lục giác, hình hộp và hình chóp.',
      },
      {
        slug: 'lop7-duong-dong-quy',
        title: 'Ba đường đồng quy trong tam giác',
        href: './?simulation=lop7-duong-dong-quy',
        legacyPath: './simulations/lop7-duong-dong-quy/index.html',
        tags: ['Hình học', 'Hoạt động'],
        tagType: 'geometry',
        status: 'Sẵn sàng',
        description:
          'Kéo thả các đỉnh tam giác để thấy trực quan trọng tâm, trực tâm và các đường đặc biệt luôn đồng quy.',
      },
    ],
  },
  {
    id: 'grade-8',
    grade: '8',
    accent: 'accent',
    title: 'Toán 8 - Hằng đẳng thức, hàm số và hình đồng dạng',
    simulations: [
      {
        slug: 'lop8-hang-dang-thuc',
        title: 'Trực quan hằng đẳng thức (a + b)^2',
        href: './?simulation=lop8-hang-dang-thuc',
        legacyPath: './simulations/lop8-hang-dang-thuc/index.html',
        tags: ['Đại số', 'Hoạt động'],
        tagType: 'algebra',
        status: 'Sẵn sàng',
        description:
          'Chứng minh (a + b)^2 = a^2 + 2ab + b^2 bằng cách ghép các mảnh diện tích tương tác.',
      },
      {
        slug: 'lop8-do-thi-bac-nhat',
        title: 'Đồ thị hàm số bậc nhất y = ax + b',
        href: './?simulation=lop8-do-thi-bac-nhat',
        legacyPath: './simulations/lop8-do-thi-bac-nhat/index.html',
        tags: ['Hàm số', 'Hoạt động'],
        tagType: 'algebra',
        status: 'Sẵn sàng',
        description:
          'Khám phá độ dốc, tung độ gốc và giao điểm với trục tọa độ qua các thanh trượt thời gian thực.',
      },
    ],
  },
  {
    id: 'grade-9',
    grade: '9',
    accent: 'warning',
    title: 'Toán 9 - Đường tròn và mô hình thực tế',
    simulations: [
      {
        slug: 'lop9-ban-bong-parabol',
        title: 'Bắn bóng Parabol y = ax^2',
        href: './?simulation=lop9-ban-bong-parabol',
        legacyPath: './simulations/lop9-ban-bong-parabol/index.html',
        tags: ['Đại số', 'Hoạt động'],
        tagType: 'algebra',
        status: 'Sẵn sàng',
        description:
          'Dùng phương trình bậc hai để mô hình hóa quỹ đạo ném bóng và khám phá góc ném tối ưu.',
      },
      {
        slug: 'lop9-goc-noi-tiep',
        title: 'Góc nội tiếp và cung bị chắn',
        href: './?simulation=lop9-goc-noi-tiep',
        legacyPath: './simulations/lop9-goc-noi-tiep/index.html',
        tags: ['Đường tròn', 'Hoạt động'],
        tagType: 'geometry',
        status: 'Sẵn sàng',
        description:
          'Di chuyển đỉnh góc nội tiếp trên đường tròn, so sánh số đo góc nội tiếp với góc ở tâm.',
      },
    ],
  },
  {
    id: 'probability-statistics',
    grade: 'P',
    accent: 'danger',
    title: 'Xác suất và Thống kê - Lớp 6 đến 12',
    simulations: [
      {
        slug: 'xac-suat-thong-ke',
        title: 'Tung đồng xu và gieo xúc xắc',
        href: './?simulation=xac-suat-thong-ke',
        legacyPath: './simulations/xac-suat-thong-ke/index.html',
        tags: ['Xác suất', 'Hoạt động'],
        tagType: 'algebra',
        status: 'Lớp 6-9',
        description:
          'Mô phỏng xác suất thực nghiệm, theo dõi tần suất và so sánh với xác suất lý thuyết qua biểu đồ.',
      },
      {
        slug: 'xac-suat-thong-ke-freq',
        title: 'Biểu đồ tần số và thống kê mô tả',
        href: './?simulation=xac-suat-thong-ke-freq',
        legacyPath: './simulations/xac-suat-thong-ke/index.html#freq',
        tags: ['Thống kê', 'Hoạt động'],
        tagType: 'algebra',
        status: 'Lớp 8-12',
        description:
          'Nhập hoặc tạo dữ liệu ngẫu nhiên, vẽ biểu đồ tần số, tính trung bình, trung vị và độ lệch chuẩn.',
      },
    ],
  },
];

export function getAllSimulations() {
  return simulationsByGrade.flatMap((gradeGroup) =>
    gradeGroup.simulations.map((simulation) => ({
      ...simulation,
      grade: gradeGroup.grade,
      groupTitle: gradeGroup.title,
    })),
  );
}

export function findSimulation(slug) {
  return getAllSimulations().find((simulation) => simulation.slug === slug);
}
