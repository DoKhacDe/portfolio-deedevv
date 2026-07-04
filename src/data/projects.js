export const projects = [
  {
    id: 'insurlink',
    name: 'Insurlink',
    label: 'Nền tảng bán bảo hiểm',
    description:
      'Nền tảng e-commerce bán bảo hiểm giúp hơn 1.000 cộng tác viên bán sản phẩm từ 8 đối tác như Bảo Việt, MIC, Liberty, PVI.',
    detail:
      'Sản phẩm đã xử lý hơn 18.000 hợp đồng, bao phủ quy trình từ cấu hình sản phẩm, báo giá, đơn hàng, hợp đồng đến vận hành cộng tác viên. Vai trò: sole maintainer, sở hữu và maintain end-to-end.',
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
      'Ứng dụng di động cho cộng tác viên quản lý sản phẩm, báo giá và theo dõi hoa hồng ngay trên điện thoại.',
    detail:
      'Ứng dụng kết nối API từ hệ sinh thái Insurlink, tối ưu trải nghiệm thao tác nhanh cho cộng tác viên và giúp đội vận hành theo dõi hiệu suất bán hàng linh hoạt hơn.',
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
      'Chatbot AI dựa trên RAG, hỗ trợ tư vấn sản phẩm bảo hiểm, tính phí và trả lời tương tác theo thời gian thực.',
    detail:
      'Kết hợp dữ liệu sản phẩm, luồng tư vấn và OpenAI để tạo trải nghiệm hỏi đáp có ngữ cảnh. Hệ thống có WebSocket cho phản hồi realtime và nền quản trị để kiểm soát nguồn tri thức.',
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
      'Nền tảng tự động hóa email marketing quy mô lớn, chạy trên hơn 7.300 domain và hỗ trợ flow automation linh hoạt.',
    detail:
      'Tự xây dựng toàn bộ một mình, từ hạ tầng gửi mail, automation flow, queue, domain scaling, tích hợp AWS SES, Cloudflare và các lớp hỗ trợ AI cho chiến dịch.',
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
      'Công cụ tổng hợp và tra cứu hot keyword theo game, anime, music event, movie và nhiều lĩnh vực khác.',
    detail:
      'Tự động lấy dữ liệu từ Serper API để phân tích xu hướng tìm kiếm, giúp content creator và marketer nắm bắt trend nhanh, có cơ sở để lên nội dung đúng thời điểm.',
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
      'Không gian nghe nhạc, nghe truyện và trò chuyện cùng nhau theo thời gian thực với nguồn nội dung từ YouTube.',
    detail:
      'Dự án cá nhân tập trung vào trải nghiệm phòng nghe chung: đồng bộ phát nhạc/video giữa nhiều người dùng, chat trực tiếp và trạng thái phòng theo thời gian thực.',
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
      'Hệ thống quản lý đơn hàng, hợp đồng và cộng tác viên dành riêng cho đối tác Bảo Việt.',
    detail:
      'Công cụ vận hành giúp đối tác theo dõi hoạt động kinh doanh bảo hiểm, quản lý đơn hàng, hợp đồng và đội ngũ cộng tác viên trong một hệ thống tập trung.',
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
