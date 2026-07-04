export const projects = [
  {
    id: 'insurlink',
    name: 'Insurlink',
    label: 'Nền tảng bán bảo hiểm',
    description:
      'Hệ thống thương mại điện tử bảo hiểm toàn diện, hỗ trợ mạng lưới hơn 1.000 cộng tác viên kết nối với các đối tác lớn như Bảo Việt, MIC, PVI.',
    detail:
      'Trực tiếp phát triển và vận hành toàn bộ vòng đời sản phẩm, từ khâu báo giá, phát hành hợp đồng đến quản lý dòng tiền. Đã xử lý thành công hơn 18.000 giao dịch thực tế.',
    tech: ['Laravel', 'Filament', 'Livewire', 'MySQL', 'TailwindCSS'],
    stats: ['1.000+ CTV', '18.000+ hợp đồng', '8 đối tác'],
    website: 'https://insurlink.vn/',
    accent: 'cyan',
    mockup: 'commerce',
  },
  {
    id: 'insurlink-pro',
    name: 'Insurlink Pro',
    label: 'Ứng dụng di động',
    description:
      'Giải pháp quản lý kinh doanh di động dành cho cộng tác viên, giúp tối ưu hóa quy trình báo giá và theo dõi doanh thu mọi lúc mọi nơi.',
    detail:
      'Đóng vai trò cầu nối di động trong hệ sinh thái Insurlink, ứng dụng tập trung vào trải nghiệm người dùng mượt mà, đồng bộ dữ liệu thời gian thực qua hệ thống API riêng biệt.',
    tech: ['Laravel', 'RESTful API', 'MySQL', 'React Native', 'Expo'],
    stats: ['Ưu tiên mobile', 'Kết nối API', 'Cập nhật realtime'],
    accent: 'coral',
    mockup: 'mobile',
  },
  {
    id: 'insurbot',
    name: 'Insurbot',
    label: 'Chatbot AI',
    description:
      'Trợ lý ảo thông minh ứng dụng công nghệ RAG, chuyên sâu về tư vấn nghiệp vụ bảo hiểm và hỗ trợ khách hàng tự động.',
    detail:
      'Xây dựng hệ thống hỏi đáp thông minh dựa trên dữ liệu đặc thù của ngành bảo hiểm. Tích hợp OpenAI và kỹ thuật xử lý ngôn ngữ tự nhiên để đưa ra phản hồi chính xác, có ngữ cảnh và mang tính cá nhân hóa.',
    tech: ['Laravel', 'Filament', 'Vue.js', 'WebSocket', 'OpenAI', 'PostgreSQL', 'RAG', 'Python'],
    stats: ['Luồng RAG', 'Chat realtime', 'Kho tri thức'],
    website: 'https://insurbot.deedevv.uk/',
    accent: 'lime',
    mockup: 'ai',
  },
  {
    id: 'mailcook',
    name: 'MailCook',
    label: 'Tự động hóa email marketing',
    description:
      'Hệ thống tự động hóa marketing quy mô lớn, vận hành ổn định trên mạng lưới hơn 7.300 tên miền với khả năng cá nhân hóa chiến dịch cao.',
    detail:
      'Một mình thiết kế và triển khai toàn bộ hạ tầng kỹ thuật phức tạp, từ cơ chế gửi mail tốc độ cao, quản lý hàng đợi đến việc tích hợp AI để tối ưu hóa nội dung chiến dịch marketing.',
    tech: ['Laravel', 'Filament', 'MySQL', 'Horizon', 'AWS SES', 'Mailcoach', 'Cloudflare', 'OpenAI'],
    stats: ['7.300+ domain', 'Flow linh hoạt', 'Tự xây dựng'],
    accent: 'gold',
    mockup: 'automation',
  },
  {
    id: 'maiden',
    name: 'Maiden',
    label: 'Phân tích xu hướng',
    description:
      'Công cụ phân tích xu hướng tìm kiếm và nắm bắt thị hiếu người dùng trong các lĩnh vực giải trí, trò chơi và sự kiện.',
    detail:
      'Tối ưu hóa quy trình khai thác dữ liệu từ Serper API để cung cấp những hiểu biết sâu sắc về thị trường, giúp những người làm nội dung đưa ra quyết định dựa trên số liệu thực tế.',
    tech: ['PHP/Laravel','Filament', 'Serper API', 'Crawler', 'Data processing'],
    stats: ['Đa lĩnh vực', 'Insight tìm kiếm', 'Bắt trend nhanh'],
    accent: 'coral',
    mockup: 'analytics',
  },
  {
    id: 'listen-together',
    name: 'Listen Together',
    label: 'Phòng nghe realtime',
    description:
      'Nền tảng giải trí trực tuyến cho phép người dùng kết nối, nghe nhạc và trò chuyện cùng nhau trong không gian số chung.',
    detail:
      'Tập trung vào tính kết nối và đồng bộ hóa tuyệt đối. Dự án giải quyết bài toán đồng bộ phát đa phương tiện và tương tác thời gian thực giữa hàng trăm người dùng trong cùng một phòng.',
    tech: ['Vue.js', 'Realtime sync', 'YouTube API', 'Chat room'],
    stats: ['Phòng nghe chung', 'Chat trực tiếp', 'Đồng bộ phát'],
    website: 'https://listen-together.deedevv.uk/',
    accent: 'cyan',
    mockup: 'media',
  },
  {
    id: 'bvlink',
    name: 'BvLink',
    label: 'Hệ thống vận hành đối tác',
    description:
      'Cổng quản lý vận hành dành riêng cho đối tác chiến lược, tập trung vào việc số hóa quy trình kinh doanh và quản lý nhân sự.',
    detail:
      'Cung cấp một hệ sinh thái quản trị tập trung, giúp đối tác theo dõi sát sao từng biến động của đơn hàng và hiệu suất của đội ngũ cộng tác viên một cách minh bạch, hiệu quả.',
    tech: ['Laravel','Filament', 'Livewire', 'MySQL'],
    stats: ['Quản lý đơn', 'Theo dõi hợp đồng', 'Cổng đối tác'],
    website: 'https://bvlink.vn/',
    accent: 'lime',
    mockup: 'dashboard',
  },
]

export const accentClasses = {
  cyan: {
    text: 'text-cyan-300',
    bg: 'bg-cyan-300',
    border: 'border-cyan-300/35',
    soft: 'bg-cyan-300/10',
    gradient: 'from-cyan-300 via-sky-400 to-indigo-400',
  },
  coral: {
    text: 'text-[#ff8a7f]',
    bg: 'bg-[#ff6f61]',
    border: 'border-[#ff6f61]/35',
    soft: 'bg-[#ff6f61]/10',
    gradient: 'from-[#ff6f61] via-rose-400 to-fuchsia-500',
  },
  lime: {
    text: 'text-lime-300',
    bg: 'bg-lime-300',
    border: 'border-lime-300/35',
    soft: 'bg-lime-300/10',
    gradient: 'from-lime-300 via-emerald-400 to-cyan-400',
  },
  gold: {
    text: 'text-amber-200',
    bg: 'bg-amber-200',
    border: 'border-amber-200/35',
    soft: 'bg-amber-200/10',
    gradient: 'from-amber-200 via-orange-300 to-[#ff6f61]',
  },
}
