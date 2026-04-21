import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gamepad2, 
  Users, 
  ScrollText, 
  Cpu, 
  Smartphone, 
  CheckCircle2, 
  ShieldCheck, 
  Briefcase, 
  Skull, 
  UserCircle2, 
  History, 
  Instagram, 
  Youtube, 
  Twitter,
  ChevronRight,
  Info,
  Server,
  Zap,
  MessageSquare,
  Plus,
  Wrench,
  Store,
  Camera,
  Landmark,
  X,
  ExternalLink,
  Shield,
  Key,
  AlertTriangle,
  Crown,
  Gift,
  Upload,
  Check,
  Loader2
} from 'lucide-react';

// Custom Discord Icon since Lucide doesn't have it by default in some versions or it's named differently
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
  </svg>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-20 text-center relative">
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand/10 blur-[100px] -z-10"
    />
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      className="h-1 bg-brand mx-auto mt-8 rounded-full shadow-[0_0_20px_#3b82f6]"
    />
  </div>
);

const GlassCard: React.FC<{ children: React.ReactNode, className?: string, onClick?: () => void }> = ({ children, className = "", onClick }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    onClick={onClick}
    className={`glass-card cursor-pointer ${className}`}
  >
    {children}
  </motion.div>
);

const Modal = ({ isOpen, onClose, title, children, showClose = true }: { isOpen: boolean, onClose: () => void, title?: string, children: React.ReactNode, showClose?: boolean }) => {
  // ESC key listener
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-black/60 backdrop-blur-[20px] p-8 rounded-2xl max-w-lg w-full border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
          >
            <div className="flex items-center justify-between mb-6">
              {title && <h3 className="text-2xl font-bold text-brand drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">{title}</h3>}
              {showClose && (
                <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-brand transition-colors p-2 z-10">
                  <X size={24} />
                </button>
              )}
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [activeRule, setActiveRule] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<'bronze' | 'silver' | 'gold'>('bronze');

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setActiveModal(null);
    }, 2000);
  };

  const closeSuccess = () => setShowSuccess(false);

  const goodsideJobs = [
    { name: 'Polisi', icon: ShieldCheck },
    { name: 'EMS', icon: Plus },
    { name: 'Mekanik', icon: Wrench },
    { name: 'Pedagang', icon: Store },
    { name: 'Media', icon: Camera },
    { name: 'Pemerintah', icon: Landmark }
  ];

  const managementTeam = [
    { 
      name: "Hasumi", 
      role: "Owner", 
      ign: "Hasumi", 
      discordUrl: "https://discord.com/users/hasumi",
      photo: "https://static.wikia.nocookie.net/gtawiki/images/4/4b/Sweet-GTASA.png/revision/latest?cb=20140212211902"
    },
    { 
      name: "Stanley/Putra", 
      role: "Dev - Server Support", 
      ign: "Stanley_Putra", 
      discordUrl: "https://discord.com/users/stanleyputra",
      photo: "https://static.wikia.nocookie.net/gtawiki/images/7/74/Wuzie-GTASA.png/revision/latest?cb=20140213000632"
    },
    { 
      name: "Luminary", 
      role: "Web Scripter", 
      ign: "Luminary", 
      discordUrl: "https://discord.com/users/luminary",
      photo: "https://static.wikia.nocookie.net/lucupedia/images/e/e4/CJ_GTA_SA.png/revision/latest?cb=20180518051609&path-prefix=id"
    },
    { 
      name: "Admin Memed", 
      role: "Administrator", 
      ign: "Memed_Keren", 
      discordUrl: "https://discord.com/users/adminmemed",
      photo: "https://static.wikia.nocookie.net/gtawiki/images/9/9e/CesarVialpando-GTASA.png/revision/latest?cb=20210214223259"
    },
    { 
      name: "Admin Key", 
      role: "Administrator", 
      ign: "Key_Master", 
      discordUrl: "https://discord.com/users/adminkey",
      photo: "https://static.wikia.nocookie.net/gtawiki/images/4/43/KenRosenberg-GTASA.png/revision/latest?cb=20210223192225"
    }
  ];

  const serverRules = [
    { title: "Perilaku Umum", icon: Users, content: "Semua pemain wajib menjaga sikap yang baik dan saling menghargai. Dilarang berkata kasar berlebihan, menghina, atau memancing keributan tanpa alasan roleplay." },
    { title: "Roleplay (RP)", icon: Gamepad2, content: "Anda wajib bermain sesuai karakter yang dibuat. Jangan melakukan hal yang tidak masuk akal seperti: Lari setelah ditembak berkali-kali, atau langsung tahu sesuatu tanpa informasi RP." },
    { title: "Meta Gaming (MG)", icon: Info, content: "Dilarang menggunakan informasi dari luar game ke dalam game. Contoh: Lihat live stream lalu cari orangnya di dalam game, atau baca Discord lalu langsung tahu lokasi orang." },
    { title: "Power Gaming (PG)", icon: Zap, content: "Dilarang memaksa roleplay tanpa memberi kesempatan pemain lain merespon. Contoh: Langsung mengikat tanpa /me atau /do, atau melakukan aksi mustahil seperti angkat mobil sendirian." },
    { title: "Deathmatch (DM)", icon: Skull, content: "Dilarang membunuh atau menyerang pemain tanpa alasan roleplay yang jelas." },
    { title: "Random Deathmatch (RDM)", icon: AlertTriangle, content: "Menyerang atau membunuh tanpa alasan sama sekali itu dilarang keras dan bisa langsung kena sanksi." },
    { title: "Revenge Kill (RK)", icon: History, content: "Setelah mati, Anda tidak boleh kembali untuk balas dendam. Anggap karakter Anda lupa kejadian sebelumnya." },
    { title: "Cheat dan Bug Abuse", icon: Shield, content: "Dilarang menggunakan cheat, mod ilegal, atau memanfaatkan bug untuk keuntungan pribadi." },
    { title: "Roleplay Fear (RP Fear)", icon: AlertTriangle, content: "Karakter Anda harus punya rasa takut. Kalau ditodong senjata, jangan sok jagoan kayak film action." },
    { title: "Kendaraan", icon: Smartphone, content: "Gunakan kendaraan dengan wajar. Dilarang: Nabrak orang sembarangan, atau menggunakan kendaraan sebagai senjata tanpa RP." },
    { title: "Nama Karakter", icon: UserCircle2, content: "Gunakan nama yang realistis. Dilarang: Nama alay atau tidak masuk akal, atau nama yang mengandung unsur menghina." },
    { title: "Hormati Admin", icon: ShieldCheck, content: "Admin bertugas menjaga server tetap kondusif. Ikuti arahan admin dan jangan membantah dengan cara tidak sopan." },
    { title: "Sanksi", icon: AlertTriangle, content: "Pelanggaran akan dikenakan sanksi sesuai tingkat kesalahan: Peringatan, Jail, Kick, atau Ban." }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAVIGATION */}
      <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-0">
        <nav className="nav-floating flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white font-black shadow-[0_0_20px_rgba(59,130,246,0.3)]">D</div>
            <span className="font-display font-bold text-2xl tracking-tighter uppercase whitespace-nowrap hidden sm:block">Downtown</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'About', id: 'about' },
              { name: 'Specs', id: 'specs' },
              { name: 'Guide', id: 'guide' },
              { name: 'Rules', action: () => setIsRulesOpen(true) }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => item.id ? scrollToSection(item.id) : item.action?.()}
                className="text-xs uppercase tracking-widest font-bold text-white/40 hover:text-white transition-all relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#3b82f6]" />
              </button>
            ))}
          </div>

          <button className="btn-primary py-2.5 px-6 text-xs uppercase tracking-widest" onClick={() => scrollToSection('guide')}>Play Now</button>
        </nav>
      </div>

      {/* SECTION 1 – HERO */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://abrakadabra.fun/uploads/posts/2022-01/thumbs/1643220226_21-abrakadabra-fun-p-los-santos-gta-sa-33.jpg?blur=4" 
            alt="GTA San Andreas" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-40 md:pt-48">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8 text-brand font-bold tracking-[0.2em] text-[10px] uppercase"
              >
                <Zap size={14} className="fill-brand" />
                The Ultimate Roleplay
              </motion.div>
              
              <h1 className="text-7xl md:text-[120px] font-bold mb-8 tracking-tighter leading-[0.9] text-white">
                DOWNTOWN <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-brand/40">ROLEPLAY</span>
              </h1>
              
              <p className="max-w-2xl mx-auto text-white/40 mb-12 text-lg md:text-xl font-medium tracking-tight">
                Ciptakan karakter unik Anda dan jalani kehidupan virtual yang penuh cerita dalam komunitas roleplay terbesar di Indonesia.
              </p>

              <div className="flex flex-col sm:row items-center justify-center gap-6">
                <button className="btn-primary flex items-center gap-3 w-full sm:w-auto justify-center px-10 py-4 text-sm font-black uppercase tracking-widest group">
                  <Gamepad2 size={20} className="group-hover:rotate-12 transition-transform" />
                  Mulai Bermain
                </button>
                <button className="btn-secondary flex items-center gap-3 w-full sm:w-auto justify-center px-10 py-4 text-sm font-black uppercase tracking-widest">
                  <DiscordIcon className="w-5 h-5" />
                  Join Discord
                </button>
              </div>

              <div className="mt-20 flex items-center justify-center gap-12">
                {[Instagram, Youtube, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, color: '#3b82f6' }}
                    className="text-white/20 transition-all"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-brand rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 – TENTANG SERVER */}
      <section id="about" className="py-32 bg-mesh relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center -z-10 opacity-20">
              <span className="text-[20vw] font-black text-white/5 select-none tracking-tighter">ABOUT</span>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="glass-card !p-0 rounded-[2.5rem] overflow-hidden border-brand/20">
                    <img 
                      src="https://scontent-cgk2-2.xx.fbcdn.net/v/t39.30808-6/308599510_406314998332025_2153642783847578835_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGIB_GAuG9oq4cc463sZxGjdmyfWQ3cIQV2bJ9ZDdwhBaANW9t2LsOwfjPjSEoJvGPO5lOwEl9guFyNWlzmUzoZ&_nc_ohc=YcvurXXy-P0Q7kNvwEvoQ5q&_nc_oc=AdoVp6o7tQbQkJWpLde2uwH1G3701UFTj9VVSVOJtXAHlKRnMqav6dUaw0JX1mk1N2M&_nc_zt=23&_nc_ht=scontent-cgk2-2.xx&_nc_gid=_f9_3-z9duBIBm6Ztec1PQ&_nc_ss=7a3a8&oh=00_Af3zb9OC9pVcP9hdlqyIteOtpGcrZjrwd37dMGY5uRVakA&oe=69E6965F" 
                      alt="Community" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="lg:w-1/2">
                <motion.h2 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-6xl font-bold mb-8 leading-[0.9] tracking-tighter"
                >
                  NEXT GEN <br /> <span className="text-brand">ROLEPLAY</span>
                </motion.h2>
                <p className="text-white/40 text-xl leading-relaxed mb-10">
                  Downtown Roleplay bukan sekadar server. Ini adalah ekosistem digital di mana imajinasi Anda menjadi kenyataan paling realistis di Indonesia.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Users, title: "Active Citizens", desc: "Ribuan player aktif setiap hari." },
                    { icon: ShieldCheck, title: "High Order", desc: "Sistem keamanan & peraturan ketat." },
                    { icon: ScrollText, title: "Custom Scripts", desc: "Fitur eksklusif yang tidak ada di server lain." },
                    { icon: Zap, title: "Fast Sync", desc: "Performa server maksimal tanpa lag." }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                        <item.icon size={24} />
                      </div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-white/30 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – SYSTEM SPECS */}
      <section id="specs" className="py-32 relative">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Optimized for every device. Check if yours is ready.">
            Device Console
          </SectionTitle>

          <div className="flex flex-col lg:flex-row gap-0 border border-white/5 rounded-[3rem] overflow-hidden bg-black/40 backdrop-blur-3xl shadow-2xl">
            {/* PC Display */}
            <div className="lg:w-1/2 p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/5 relative group">
              <div className="absolute top-0 right-0 p-8">
                <Cpu size={120} className="text-white/[0.02] -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              </div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <h3 className="text-xs font-black uppercase tracking-[0.5em] text-white/40">Station: Desktop</h3>
              </div>
              <h4 className="text-4xl font-bold mb-12">SA:MP <span className="text-brand">PC</span></h4>
              <div className="space-y-8">
                {[
                  { label: "Core", val: "2.0GHz Quad Core" },
                  { label: "Memory", val: "4GB RAM DDR4" },
                  { label: "VRAM", val: "512MB Dedicated" },
                  { label: "Disk", val: "5GB SSD Recommended" }
                ].map((s, i) => (
                  <div key={i} className="flex items-end justify-between border-b border-white/5 pb-4 group/item">
                    <span className="text-[10px] uppercase font-black text-white/20 group-hover/item:text-brand transition-colors">{s.label}</span>
                    <span className="font-mono text-lg">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Display */}
            <div className="lg:w-1/2 p-12 lg:p-20 relative group bg-brand/[0.02]">
              <div className="absolute top-0 right-0 p-8">
                <Smartphone size={120} className="text-brand/[0.02] rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              </div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <h3 className="text-xs font-black uppercase tracking-[0.5em] text-white/40">Station: Mobile</h3>
              </div>
              <h4 className="text-4xl font-bold mb-12">SA:MP <span className="text-brand">MOBILE</span></h4>
              <div className="space-y-8">
                {[
                  { label: "Chip", val: "Snapdragon 680+" },
                  { label: "Memory", val: "4GB RAM" },
                  { label: "Disk", val: "4GB Storage" },
                  { label: "System", val: "Android 10.0+" }
                ].map((s, i) => (
                  <div key={i} className="flex items-end justify-between border-b border-white/5 pb-4 group/item">
                    <span className="text-[10px] uppercase font-black text-white/20 group-hover/item:text-brand transition-colors">{s.label}</span>
                    <span className="font-mono text-lg">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – THE JOURNEY (GUIDE) */}
      <section id="guide" className="py-32 bg-mesh relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Your story begins here. Step into the Downtown.">
            Start Your Journey
          </SectionTitle>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-brand/20 to-transparent -translate-x-1/2 hidden sm:block" />

            <div className="space-y-12">
              {[
                { title: "Define Your Identity", desc: "Ciptakan persona yang unik dengan nama Firstname_Lastname yang realistis.", icon: UserCircle2 },
                { title: "Gateway Access", desc: "Hubungkan akun Anda melalui portal Discord kami untuk mendapatkan izin masuk.", icon: Key },
                { title: "Character Setup", desc: "Masuk ke server dan lengkapi detail latar belakang karakter Anda.", icon: Plus },
                { title: "Live The Story", desc: "Dapatkan pekerjaan pertama Anda dan tentukan nasib Anda di Downtown.", icon: Gamepad2 }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-center gap-8"
                >
                  <div className="flex-1 text-center sm:text-right w-full">
                    {i % 2 === 0 ? (
                      <div className="sm:pr-12">
                        <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                        <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    ) : (
                      <div className="hidden sm:block" />
                    )}
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] border-4 border-black group-hover:scale-110 transition-transform">
                      <step.icon size={28} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black border border-white/20 flex items-center justify-center text-[10px] font-bold">
                      0{i + 1}
                    </div>
                  </div>

                  <div className="flex-1 text-center sm:text-left w-full">
                    {i % 2 !== 0 ? (
                      <div className="sm:pl-12">
                        <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                        <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    ) : (
                      <div className="hidden sm:block" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – RULES HIGHLIGHTS (NEW) */}
      <section className="py-32 relative bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="glass-card flex flex-col md:flex-row items-center gap-12 border-brand/20 bg-brand/[0.02]">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-brand font-black text-xs uppercase tracking-[0.3em] mb-6">
                <Shield size={16} />
                Citizen Code of Conduct
              </div>
              <h2 className="text-5xl font-bold mb-8 tracking-tighter">THE CORE <br /> LAWS OF <span className="text-brand">DOWNTOWN</span></h2>
              <p className="text-white/40 mb-10 leading-relaxed">
                Untuk menjaga ekosistem yang sehat, setiap warga wajib mematuhi protokol dasar roleplay. Pelanggaran berat akan mengakibatkan pencabutan izin tinggal permanen.
              </p>
              <button 
                onClick={() => setIsRulesOpen(true)}
                className="btn-primary group flex items-center gap-3"
              >
                READ FULL STATUTES
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "NRP", icon: AlertTriangle, label: "No Powergaming" },
                { title: "DM", icon: Skull, label: "No Deathmatch" },
                { title: "MG", icon: Info, label: "No Metagaming" },
                { title: "BE", icon: Shield, label: "No Bug Abuse" }
              ].map((r, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center group hover:bg-brand/5 transition-all">
                  <r.icon className="text-brand mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] font-black uppercase text-white/20 mb-1">{r.title}</p>
                  <p className="font-bold text-sm">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – VERIFIKASI DISCORD */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://abrakadabra.fun/uploads/posts/2022-01/thumbs/1643220322_34-abrakadabra-fun-p-los-santos-gta-sa-52.jpg?blur=10" 
            alt="Discord Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <GlassCard className="max-w-4xl mx-auto text-center py-16 border-brand/20">
            <DiscordIcon className="w-20 h-20 mx-auto mb-8 text-[#5865F2] drop-shadow-[0_0_15px_rgba(88,101,242,0.5)]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Verifikasi & Ambil Role Discord</h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Semua player wajib melakukan verifikasi untuk mengakses seluruh fitur komunitas, 
              mendapatkan update terbaru, dan berinteraksi dengan warga lainnya.
            </p>
            <button className="btn-primary bg-[#5865F2] text-white hover:shadow-[0_0_20px_rgba(88,101,242,0.5)] px-12 py-4 text-xl flex items-center gap-3 mx-auto">
              <DiscordIcon className="w-6 h-6" />
              Verifikasi Sekarang
            </button>
          </GlassCard>
        </div>
      </section>

      {/* SECTION 6 – LORE SERVER */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <SectionTitle subtitle="Kebebasan membangun cerita dalam dunia modern yang dinamis.">
                Lore Server
              </SectionTitle>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Downtown Roleplay menggunakan konsep <span className="text-white font-bold">Lore Mix</span> yang memberi kebebasan pemain membangun cerita karakter selama tetap realistis dalam dunia modern. Anda bisa menjadi siapa saja, dari pengusaha sukses hingga tokoh bawah tanah yang disegani.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 glass rounded-lg">
                  <p className="text-brand text-xs uppercase font-bold mb-1 tracking-widest">Example Name</p>
                  <p className="text-xl font-display font-bold">Adrian Pratama</p>
                </div>
                <div className="p-4 glass rounded-lg">
                  <p className="text-brand text-xs uppercase font-bold mb-1 tracking-widest">Example Name</p>
                  <p className="text-xl font-display font-bold">Dimas Saputra</p>
                </div>
                <div className="p-4 glass rounded-lg col-span-2">
                  <p className="text-brand text-xs uppercase font-bold mb-1 tracking-widest">Example Name</p>
                  <p className="text-xl font-display font-bold">Rafael Wijaya</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-video glass rounded-2xl overflow-hidden relative group">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaiVvgdCMPhcKVhpBJhID6_yewHM3vRW5rIoJ71ntqB5YToUXjWFhrNV74VP0VUV7CZkI4rmMmYVOs_5X5ihIKeFmKHo4vCmXqGjhyc77SsEf9fGeX7Ez9FIx0Q7e3FF0gs-TetTK3XJQ/s1600/ra.jpg" 
                  alt="Lore Visual" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-6 glass rounded-full text-brand animate-pulse">
                    <ScrollText size={48} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 – JOB SYSTEM */}
      <section className="py-32 bg-mesh relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand/5 blur-[200px] -z-10" />
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Dua sisi koin yang berbeda. Pilih takdir Anda di jalanan Downtown.">
            The Life Cycle
          </SectionTitle>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Goodside Column */}
            <div className="space-y-10">
              <div className="flex items-center justify-between border-b border-blue-500/20 pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black tracking-tighter uppercase">Guardians</h3>
                    <p className="text-blue-500/40 text-[10px] font-black tracking-[0.3em] uppercase">Goodside Department</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {goodsideJobs.map((job, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card !p-5 hover:border-blue-500/40 group flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <job.icon size={20} />
                    </div>
                    <span className="font-bold text-sm tracking-tight">{job.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Badside Column */}
            <div className="space-y-10">
              <div className="flex items-center justify-between border-b border-red-500/20 pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-500/10 rounded-xl text-red-500">
                    <Skull size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black tracking-tighter uppercase">Syndicates</h3>
                    <p className="text-red-500/40 text-[10px] font-black tracking-[0.3em] uppercase">Criminal Elements</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {['Mantul Organization', 'Kece Organization', 'Walawe Organization'].map((org, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="glass-card !p-6 hover:border-red-500/40 group flex items-center justify-between relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/20 group-hover:bg-red-500 transition-colors" />
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                        <Skull size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{org}</h4>
                        <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">Active Influence</p>
                      </div>
                    </div>
                    <div className="text-red-500/20 group-hover:text-red-500/50 transition-colors">
                      <Zap size={24} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 – MANAGEMENT */}
      <section className="py-32 bg-zinc-950 relative">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Luminaries of the Downtown. The team behind the code.">
            Staff Directory
          </SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {managementTeam.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedMember(member)}
                className="glass-card !p-0 rounded-[2.5rem] overflow-hidden border-white/5 active:scale-95 transition-all cursor-pointer group"
              >
                <div className="h-48 bg-gradient-to-br from-brand/20 to-brand/5 relative">
                  <div className="absolute top-4 right-6 text-white/5 font-black text-6xl italic select-none">#{i+1}</div>
                  <div className="absolute -bottom-10 left-8">
                    <div className="w-24 h-24 rounded-3xl glass border-4 border-black overflow-hidden shadow-2xl group-hover:rotate-3 transition-transform">
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>
                
                <div className="pt-14 pb-8 px-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black tracking-tight">{member.name}</h3>
                    <div className="px-2 py-1 bg-brand text-black text-[8px] font-black rounded uppercase">Active</div>
                  </div>
                  <p className="text-brand text-xs font-black uppercase tracking-widest mb-6">{member.role}</p>
                  
                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="text-[10px] text-white/20 font-black uppercase tracking-widest">
                      ID: <span className="text-white/40">{member.ign}</span>
                    </div>
                    <DiscordIcon className="w-5 h-5 text-white/20 group-hover:text-brand transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 – UPDATE SERVER */}
      <section className="py-24 bg-mesh relative">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Kami terus melakukan improvisasi untuk menjaga stabilitas dan keseruan bermain.">
            Update Server
          </SectionTitle>

          <GlassCard className="max-w-3xl mx-auto border-brand/30">
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <History className="text-brand" />
                <h3 className="text-xl font-bold">[DT:RP] Update DT1-RC Version</h3>
              </div>
              <span className="px-3 py-1 glass rounded-full text-xs font-bold text-brand">LATEST</span>
            </div>
            
            <ul className="space-y-4">
              {[
                "Remove Agency Faction",
                "Disable /spanel for better performance",
                "Optimize server logic & database queries",
                "Fix minor bugs on vehicle system",
                "Update anti-cheat definitions"
              ].map((update, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {update}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => setIsChangelogOpen(true)}
              className="mt-8 text-brand font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              View Full Changelog <ChevronRight size={16} />
            </button>
          </GlassCard>
        </div>
      </section>

      {/* MODALS */}
      <Modal 
        isOpen={!!selectedMember} 
        onClose={() => setSelectedMember(null)} 
      >
        {selectedMember && (
          <div className="text-center">
            <div className="w-32 h-32 rounded-full glass mx-auto mb-6 overflow-hidden border-2 border-brand/20 shadow-[0_0_20px_rgba(255,165,0,0.3)]">
              <img src={selectedMember.photo} alt={selectedMember.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h4 className="text-3xl font-bold mb-1">{selectedMember.name}</h4>
            <p className="text-brand font-bold uppercase tracking-widest mb-6">{selectedMember.role}</p>
            
            <div className="glass p-4 rounded-xl mb-6 text-left">
              <p className="text-white/40 text-xs uppercase font-bold mb-1">In-Game Name</p>
              <p className="text-xl font-display font-bold text-white">{selectedMember.ign}</p>
            </div>

            <a 
              href={selectedMember.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <DiscordIcon className="w-5 h-5" />
              Open Discord Profile
            </a>
          </div>
        )}
      </Modal>

      <Modal 
        isOpen={isChangelogOpen} 
        onClose={() => setIsChangelogOpen(false)} 
        title="Full Changelog History"
      >
        <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
          <div className="border-l-2 border-brand pl-6 relative">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand shadow-[0_0_10px_#3b82f6]" />
            <p className="text-brand font-bold mb-2">Version DT1-RC (Latest)</p>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>• Remove Agency Faction</li>
              <li>• Disable /spanel for better performance</li>
              <li>• Optimize server logic & database queries</li>
              <li>• Fix minor bugs on vehicle system</li>
              <li>• Update anti-cheat definitions</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-white/10 pl-6 relative">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white/10" />
            <p className="text-white/40 font-bold mb-2">Version MR1-Beta 2</p>
            <ul className="space-y-2 text-white/40 text-sm">
              <li>• Added new job: Media</li>
              <li>• Improved server stability</li>
              <li>• New map expansion: Downtown District</li>
              <li>• Updated UI for inventory system</li>
            </ul>
          </div>

          <div className="border-l-2 border-white/10 pl-6 relative">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white/10" />
            <p className="text-white/40 font-bold mb-2">Version MR1-Beta 1</p>
            <ul className="space-y-2 text-white/40 text-sm">
              <li>• Initial server launch</li>
              <li>• Basic job systems implementation</li>
              <li>• Core roleplay mechanics</li>
            </ul>
          </div>
        </div>
      </Modal>

      {/* DISCORD SUPPORT MODAL */}
      <Modal 
        isOpen={activeModal === 'discord'} 
        onClose={() => setActiveModal(null)} 
        title="Discord Support"
      >
        <div className="text-center">
          <div className="w-20 h-20 glass rounded-full flex items-center justify-center mx-auto mb-6 text-[#5865F2] shadow-[0_0_20px_rgba(88,101,242,0.4)]">
            <DiscordIcon className="w-10 h-10" />
          </div>
          <p className="text-white/60 mb-8">
            Butuh bantuan cepat? Tim kami siap membantu Anda melalui Discord.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between p-4 glass rounded-xl">
              <div className="flex items-center gap-3">
                <MessageSquare className="text-brand" size={20} />
                <span className="font-medium">Support Channel</span>
              </div>
              <span className="text-xs px-2 py-1 bg-brand/10 text-brand rounded uppercase font-bold">#help-support</span>
            </div>
            <div className="flex items-center justify-between p-4 glass rounded-xl">
              <div className="flex items-center gap-3">
                <Users className="text-brand" size={20} />
                <span className="font-medium">Admin Status</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-500 font-bold uppercase">Online</span>
              </div>
            </div>
          </div>

          <button className="btn-primary w-full flex items-center justify-center gap-2 bg-[#5865F2] text-white hover:shadow-[0_0_20px_rgba(88,101,242,0.5)]">
            <DiscordIcon className="w-5 h-5" />
            Buka Discord
          </button>
        </div>
      </Modal>

      {/* ACCOUNT RECOVERY MODAL */}
      <Modal 
        isOpen={activeModal === 'recovery'} 
        onClose={() => setActiveModal(null)} 
        title="Account Recovery"
      >
        <form onSubmit={handleFormSubmit}>
          <p className="text-white/60 mb-6">
            Lupa password atau kehilangan akses akun? Tenang, Anda bisa melakukan pemulihan akun di sini.
          </p>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-xs uppercase font-bold text-white/40 mb-2 tracking-widest">Username</label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="text" 
                  required
                  placeholder="Masukkan username Anda"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand/50 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase font-bold text-white/40 mb-2 tracking-widest">Email Terdaftar</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="Masukkan email Anda"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand/50 transition-colors"
                />
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Key size={20} />}
            Kirim Permintaan Recovery
          </button>
          
          <p className="text-center text-xs text-white/30 mt-4">
            Pastikan data yang Anda masukkan sesuai dengan akun Anda
          </p>
        </form>
      </Modal>

      {/* REPORT PLAYER MODAL */}
      <Modal 
        isOpen={activeModal === 'report'} 
        onClose={() => setActiveModal(null)} 
        title="Report Player"
      >
        <form onSubmit={handleFormSubmit}>
          <p className="text-white/60 mb-6">
            Laporkan pemain yang melanggar aturan agar komunitas tetap nyaman.
          </p>
          
          <div className="space-y-4 mb-6 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-bold text-white/40 mb-2 tracking-widest">Nama Player</label>
                <input 
                  type="text" 
                  required
                  placeholder="Nama Player"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-brand/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-white/40 mb-2 tracking-widest">ID Player</label>
                <input 
                  type="text" 
                  required
                  placeholder="ID (Jika tahu)"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-brand/50 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs uppercase font-bold text-white/40 mb-2 tracking-widest">Jenis Pelanggaran</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-brand/50 transition-colors appearance-none">
                <option className="bg-zinc-900">Deathmatch (DM)</option>
                <option className="bg-zinc-900">Powergaming (PG)</option>
                <option className="bg-zinc-900">Metagaming (MG)</option>
                <option className="bg-zinc-900">Toxicity / Harassment</option>
                <option className="bg-zinc-900">Cheating / Scripting</option>
                <option className="bg-zinc-900">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-white/40 mb-2 tracking-widest">Deskripsi Laporan</label>
              <textarea 
                required
                rows={3}
                placeholder="Jelaskan kronologi kejadian..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-brand/50 transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-white/40 mb-2 tracking-widest">Upload Bukti</label>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden" 
                accept="image/*,video/*"
              />
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-brand/50 transition-colors cursor-pointer group"
              >
                <Upload className="mx-auto mb-2 text-white/20 group-hover:text-brand transition-colors" size={24} />
                <p className="text-xs text-white/40">
                  {fileName ? `File: ${fileName}` : 'Klik untuk memilih gambar/video dari PC'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg mb-6 flex items-start gap-3">
            <AlertTriangle className="text-red-500 shrink-0" size={18} />
            <p className="text-[10px] text-red-500/80 leading-tight">
              Laporan palsu dapat dikenakan sanksi berat hingga ban permanen dari server.
            </p>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Shield size={20} />}
            Kirim Laporan
          </button>
        </form>
      </Modal>

      {/* DONATION MODAL */}
      <Modal 
        isOpen={activeModal === 'donation'} 
        onClose={() => setActiveModal(null)} 
        title="Support Server"
      >
        <div className="text-center">
          <p className="text-white/60 mb-8 text-sm">
            Dukung perkembangan Downtown Roleplay agar terus berkembang dan memberikan pengalaman terbaik.
          </p>
          
          {/* Package Selection Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {[
              { id: 'bronze', name: 'Bronze', icon: MessageSquare, color: 'text-orange-400', price: '50k' },
              { id: 'silver', name: 'Silver', icon: Zap, color: 'text-zinc-300', price: '100k' },
              { id: 'gold', name: 'Gold', icon: Crown, color: 'text-yellow-400', price: '200k', popular: true }
            ].map((pkg) => (
              <motion.button
                key={pkg.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPackage(pkg.id as any)}
                className={`p-4 rounded-xl border-2 transition-all relative flex flex-col items-center gap-1 ${
                  selectedPackage === pkg.id 
                    ? 'bg-white/10 border-brand shadow-[0_0_20px_rgba(255,165,0,0.3)]' 
                    : 'bg-white/5 border-white/5 hover:border-white/20'
                } ${pkg.id === 'gold' ? 'animate-glow-pulse' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-2 -right-2 bg-brand text-black text-[8px] font-black px-2 py-1 rounded-full shadow-lg z-10">
                    POPULAR 🔥
                  </div>
                )}
                {selectedPackage === pkg.id && (
                  <div className="absolute -top-2 -left-2 bg-green-500 text-white text-[8px] font-black px-2 py-1 rounded-full shadow-lg z-10">
                    SELECTED
                  </div>
                )}
                <div className={`${pkg.color} mb-1`}>
                  {pkg.id === 'gold' ? <Crown size={24} className="drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" /> : 
                   pkg.id === 'silver' ? <Zap size={24} /> : <MessageSquare size={24} />}
                </div>
                <div className={`text-sm font-bold ${pkg.color}`}>{pkg.name}</div>
                <div className="text-[10px] text-white/40">Rp {pkg.price}</div>
              </motion.button>
            ))}
          </div>

          {/* Package Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPackage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="glass p-6 rounded-xl mb-8 text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold capitalize">
                  {selectedPackage} Package
                </h4>
                <div className="text-brand font-bold">
                  {selectedPackage === 'bronze' ? 'Rp 50.000' : selectedPackage === 'silver' ? 'Rp 100.000' : 'Rp 200.000'}
                </div>
              </div>

              <div className="space-y-3">
                {selectedPackage === 'bronze' && (
                  <>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Bonus Uang In-Game (Starter)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Role Discord Bronze</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Akses Fitur Dasar Donasi</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Priority Login (Level Low)</span>
                    </div>
                  </>
                )}
                {selectedPackage === 'silver' && (
                  <>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Semua Benefit Bronze</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Uang In-Game Lebih Besar</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Role Discord Silver</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Priority Login (Medium)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Akses Command Tambahan</span>
                    </div>
                  </>
                )}
                {selectedPackage === 'gold' && (
                  <>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Semua Benefit Silver</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Uang In-Game Paling Besar</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Role Discord Gold Eksklusif</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Priority Login (High)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Check size={12} /></div>
                      <span>Akses Fitur Premium & Badge Spesial</span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={handleFormSubmit}
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Gift size={20} />}
            {selectedPackage === 'bronze' ? 'Ambil Bronze' : selectedPackage === 'silver' ? 'Ambil Silver' : 'Ambil Gold'}
          </button>
        </div>
      </Modal>

      {/* SUCCESS MODAL */}
      <Modal 
        isOpen={showSuccess} 
        onClose={closeSuccess} 
        title="Berhasil!"
      >
        <div className="text-center py-6">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <Check size={40} />
          </div>
          <p className="text-white/80 text-lg mb-8">
            Permintaan Anda telah berhasil dikirim. Tim kami akan segera menindaklanjuti.
          </p>
          <button onClick={closeSuccess} className="btn-primary w-full">
            Tutup
          </button>
        </div>
      </Modal>

      {/* SERVER RULES MODAL */}
      <Modal 
        isOpen={isRulesOpen} 
        onClose={() => setIsRulesOpen(false)} 
        title="Server Rules"
      >
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {serverRules.map((rule, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden border border-white/5">
              <button 
                onClick={() => setActiveRule(activeRule === index ? null : index)}
                className={`w-full p-4 flex items-center justify-between transition-all ${activeRule === index ? 'bg-brand/10' : 'hover:bg-white/5'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${activeRule === index ? 'bg-brand text-black' : 'bg-white/5 text-brand'}`}>
                    <rule.icon size={18} />
                  </div>
                  <span className={`font-bold text-sm sm:text-base ${activeRule === index ? 'text-brand' : 'text-white'}`}>
                    {index + 1}. {rule.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: activeRule === index ? 180 : 0 }}
                  className="text-white/20"
                >
                  <ChevronRight size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeRule === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="p-4 pt-0 text-sm text-white/60 leading-relaxed border-t border-white/5">
                      <div className="mt-4">
                        {rule.content}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-brand/5 border border-brand/20 rounded-xl">
          <p className="text-xs text-brand/80 text-center font-medium">
            Patuhi semua peraturan di atas demi kenyamanan bersama. Pelanggaran dapat berakibat sanksi tegas.
          </p>
        </div>
      </Modal>

      {/* SECTION 10 – FOOTER */}
      <footer className="py-16 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  D
                </div>
                <span className="text-2xl font-bold tracking-tighter">Downtown Roleplay</span>
              </div>
              <p className="text-white/40 max-w-md mb-8">
                Komunitas GTA SAMP Roleplay terbesar di Indonesia. Ciptakan cerita Anda, bangun reputasi, dan jadilah legenda di Downtown Roleplay.
              </p>
              <div className="flex items-center gap-4">
                {[Instagram, Youtube, Twitter, MessageSquare].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-brand hover:border-brand/50 transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/40">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-brand transition-colors text-left">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-brand transition-colors text-left">About Us</button></li>
                <li><button onClick={() => scrollToSection('guide')} className="hover:text-brand transition-colors text-left">How to Play</button></li>
                <li><button onClick={() => setIsRulesOpen(true)} className="hover:text-brand transition-colors text-left">Server Rules</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-white/40">
                <li><button onClick={() => setActiveModal('discord')} className="hover:text-brand transition-colors text-left">Discord Support</button></li>
                <li><button onClick={() => setActiveModal('recovery')} className="hover:text-brand transition-colors text-left">Account Recovery</button></li>
                <li><button onClick={() => setActiveModal('report')} className="hover:text-brand transition-colors text-left">Report Player</button></li>
                <li><button onClick={() => setActiveModal('donation')} className="hover:text-brand transition-colors text-left">Donation</button></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-white/20 text-sm">
            <p>© 2026 Downtown Roleplay. Made with ❤︎ by Luminary. All rights reserved.</p>
            <div className="flex items-center gap-6">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
