import {useEffect, useRef, useState} from 'react';
import {ArrowUpRight, ArrowDown, ArrowRight, Check, Code2, Layers3, Menu, Moon, Sun, X, Mail, GitBranch, Database, SlidersHorizontal, CheckCheck, CircleDot} from 'lucide-react';
import {profile, projects} from './data.js';

const waLink = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent('Halo Valen, saya tertarik berdiskusi tentang sebuah project.')}`;

function Mark({className = ''}) {
  return <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true"><path d="M3 5h7l5 11L20 5h7L15 26 3 5Z" fill="currentColor"/></svg>;
}

function ArrowButton({children, href, secondary = false, ...props}) {
  return <a className={`button ${secondary ? 'button-secondary' : ''}`} href={href} {...props}>{children}<ArrowUpRight size={18}/></a>;
}

function CalculatorArt({large = false}) {
  return <div className={`calculator-art ${large ? 'calculator-art-large' : ''}`} aria-label="Ilustrasi dashboard kalkulasi produk">
    <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
    <div className="calc-window">
      <div className="window-top"><span className="window-logo"><Mark/> precision<span className="app-dot">®</span></span><span className="window-dots">•••</span></div>
      <div className="calc-window-body"><div className="calc-side"><span className="side-icon active"><Layers3 size={15}/></span><span className="side-icon"><SlidersHorizontal size={15}/></span><span className="side-icon"><Database size={15}/></span></div>
        <div className="calc-content"><div className="calc-content-head"><div><span className="tiny-label">PRODUCT WORKSPACE</span><h4>Every detail counts.</h4></div><span className="small-pill"><i/> Synced</span></div>
          <div className="calc-metrics"><div><span>Estimation overview</span><strong>Rp 1.250.000</strong><small>Ilustrasi tampilan</small></div><div className="mini-chart">{[32,53,41,66,54,84,71,96].map((n,i)=><i key={i} style={{height:`${n}%`}}/>)}</div></div>
          <div className="calc-table"><div className="calc-table-heading"><span>COMPONENT</span><span>STATUS</span><span>DETAIL</span></div>{[['Material','Validated','01'],['Production','Calculated','02'],['Finishing','Reviewed','03']].map(([name,status,num])=><div className="calc-table-row" key={name}><span><i>{num}</i>{name}</span><span><Check size={10}/>{status}</span><span>↗</span></div>)}</div>
          <div className="calc-bottom"><span><CircleDot size={12}/> Built around your workflow.</span><ArrowUpRight size={14}/></div>
        </div>
      </div>
    </div>
    {large && <><div className="floating-note note-code"><Code2 size={18}/><span>Complex logic.<br/><strong>Simple experience.</strong></span></div><div className="floating-note note-check"><span className="note-check-icon"><CheckCheck size={20}/></span><div><strong>Details, connected.</strong><small>From data to decision.</small></div></div></>}
  </div>;
}

function SamplesArt() {
  return <div className="samples-art" aria-label="Konsep antarmuka sample product"><div className="sample-header"><span><i/> WORKSPACE</span><span>⌘ K</span></div><div className="sample-title">Sample products <span>+ New sample</span></div><div className="sample-search"><span>Search a sample...</span><SlidersHorizontal size={12}/></div><div className="sample-columns"><span>PRODUCT</span><span>STATUS</span></div>{[['SP-001','Product specification','Ready'],['SP-002','Material review','In review'],['SP-003','Sample request','Draft']].map(([code,name,status],i)=><div className="sample-row" key={code}><span className={`sample-product-icon product-icon-${i}`}><Layers3 size={17}/></span><div><strong>{name}</strong><small>{code}</small></div><span className={`sample-status sample-status-${i}`}>{status}</span></div>)}<div className="art-caption">Konsep antarmuka · data ilustrasi</div></div>;
}

function AuditArt() {
  return <div className="audit-art" aria-label="Ilustrasi perbandingan master data"><div className="audit-head"><span><Database size={14}/> DATA COMPARE</span><span className="audit-live">●</span></div><div className="audit-flow"><div><span className="audit-node"><Database size={24}/></span><strong>Development</strong><small>Source data</small></div><span className="audit-connect"><i/><ArrowRight size={18}/><i/></span><div><span className="audit-node"><Database size={24}/></span><strong>Production</strong><small>Reference data</small></div></div><div className="audit-results"><div><span><Check size={13}/> Matched</span><strong>Business keys</strong></div><div><span><SlidersHorizontal size={13}/> Compared</span><strong>Field by field</strong></div><div><span><CheckCheck size={13}/> Traceable</span><strong>Clear differences</strong></div></div><div className="art-caption">Konsep visual · tanpa data internal</div></div>;
}

function ProjectVisual({kind, large = false}) {
  if (kind === 'calculator') return <CalculatorArt large={large}/>;
  if (kind === 'samples') return <SamplesArt/>;
  return <AuditArt/>;
}

function InteractiveDemo() {
  const [quantity, setQuantity] = useState(3);
  const [finishing, setFinishing] = useState(false);
  const base = 250000 * quantity;
  const finish = finishing ? 45000 * quantity : 0;
  const currency = n => new Intl.NumberFormat('id-ID', {style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
  return <div className="demo"><div className="demo-heading"><span className="eyebrow">PLAYGROUND</span><h3>Ubah input.<br/>Lihat semuanya terhubung.</h3><p>Demo interaksi sederhana dengan angka ilustrasi. Bukan rumus atau harga produk perusahaan.</p></div><div className="demo-controls"><label htmlFor="quantity">Jumlah produk <strong>{quantity} unit</strong></label><input id="quantity" type="range" min="1" max="10" value={quantity} onChange={e=>setQuantity(Number(e.target.value))}/><button className={`demo-toggle ${finishing?'is-on':''}`} onClick={()=>setFinishing(!finishing)} aria-pressed={finishing}><span><Layers3 size={17}/>Tambahkan finishing</span><i><b/></i></button><div className="demo-breakdown"><div><span>Produk dasar</span><strong>{currency(base)}</strong></div><div><span>Finishing</span><strong>{currency(finish)}</strong></div></div><div className="demo-total" aria-live="polite"><span>Total ilustrasi</span><strong>{currency(base + finish)}</strong></div></div></div>;
}

function ProjectDialog({project, close}) {
  const dialog = useRef(null);
  const [tab, setTab] = useState('story');
  useEffect(()=>{
    const el = dialog.current;
    const previouslyFocused = document.activeElement;
    el.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow='hidden';
    return ()=>{
      if (el.open) el.close();
      document.body.style.overflow=previous;
      previouslyFocused?.focus({preventScroll: true});
    };
  }, []);
  return <dialog ref={dialog} className="project-dialog" onCancel={close} onClick={e=>{if(e.target===e.currentTarget)close();}} aria-labelledby="case-title"><div className="dialog-inner"><div className="dialog-top"><span className="eyebrow">PROJECT NOTES / {project.number}</span><button className="icon-button" onClick={close} aria-label="Tutup studi kasus"><X size={22}/></button></div><h2 id="case-title">{project.name}</h2><p className="dialog-intro">{project.description}</p><div className="tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div>{project.id==='product-calculator' && <div className="dialog-tabs" role="tablist" aria-label="Detail proyek"><button role="tab" aria-selected={tab==='story'} onClick={()=>setTab('story')}>Studi kasus</button><button role="tab" aria-selected={tab==='demo'} onClick={()=>setTab('demo')}>Coba interaksi <ArrowUpRight size={14}/></button></div>}{tab==='demo'?<InteractiveDemo/>:<><div className={`dialog-visual visual-${project.visual}`}><ProjectVisual kind={project.visual}/></div><div className="case-grid"><span className="eyebrow">01 / TANTANGAN</span><p>{project.problem}</p><span className="eyebrow">02 / PENDEKATAN</span><ul>{project.approach.map(a=><li key={a}><Check size={15}/>{a}</li>)}</ul><span className="eyebrow">03 / FOKUS HASIL</span><p>{project.outcome}</p></div><p className="project-disclaimer">Visual dibuat ulang untuk portfolio. Data operasional dan source code internal tidak ditampilkan.</p></>}</div></dialog>;
}

function App() {
  const [filter,setFilter] = useState('All work');
  const [selected,setSelected] = useState(null);
  const [menu,setMenu] = useState(false);
  const [dark,setDark] = useState(()=>{try{return localStorage.getItem('valen-theme')==='dark';}catch{return false;}});
  const [copied,setCopied] = useState(false);
  const [active,setActive] = useState('work');
  const copyTimer=useRef(null);

  useEffect(()=>{
    document.documentElement.dataset.theme=dark?'dark':'light';
    try{localStorage.setItem('valen-theme',dark?'dark':'light');}catch{}
  },[dark]);
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)setActive(entry.target.id);});},{rootMargin:'-15% 0px -60% 0px'});
    document.querySelectorAll('section[id]').forEach(el=>observer.observe(el));
    return ()=>{observer.disconnect();clearTimeout(copyTimer.current);};
  },[]);
  async function copyEmail(){
    try{await navigator.clipboard.writeText(profile.email);setCopied(true);clearTimeout(copyTimer.current);copyTimer.current=setTimeout(()=>setCopied(false),2500);}
    catch{window.location.href=`mailto:${profile.email}`;}
  }
  const visible = projects.filter(p=>filter==='All work'||p.category===filter);
  const closeMenu=()=>setMenu(false);

  return <>
    <a className="skip-link" href="#main">Langsung ke konten</a>
    <header className="site-header"><div className="nav-wrap"><a className="brand" href="#" aria-label="Valen Ramadhan, kembali ke atas"><Mark/><span>valen<span className="brand-period">.</span></span></a><nav id="mobile-nav" className={menu?'nav-links nav-open':'nav-links'} aria-label="Navigasi utama">{[['work','Karya'],['about','Tentang'],['process','Cara kerja']].map(([id,label])=><a key={id} href={`#${id}`} className={active===id?'active':''} onClick={closeMenu}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={closeMenu}>Mari ngobrol <ArrowUpRight size={16}/></a></nav><div className="nav-actions"><button className="theme-toggle" onClick={()=>setDark(!dark)} aria-label={dark?'Gunakan tema terang':'Gunakan tema gelap'}>{dark?<Sun size={17}/>:<Moon size={17}/>}</button><button className="menu-toggle" aria-expanded={menu} aria-controls="mobile-nav" aria-label={menu?'Tutup navigasi':'Buka navigasi'} onClick={()=>setMenu(!menu)}>{menu?<X size={23}/>:<Menu size={23}/>}</button></div></div></header>
    <main id="main">
      <section className="hero container"><div className="hero-copy"><div className="hero-intro"><span className="status-dot"/><span>VALEN RAMADHAN</span><span className="intro-line"/><span>WEB DEVELOPER</span></div><h1>Ide yang rumit.<br/>Pengalaman yang<br/><em>terasa mudah.</em></h1><p>Saya membangun aplikasi web yang membantu pekerjaan nyata—menghubungkan logika bisnis, data, dan antarmuka yang intuitif.</p><div className="hero-actions"><ArrowButton href="#work">Jelajahi karya saya</ArrowButton><a className="text-link" href="#about">Kenalan dulu <ArrowRight size={16}/></a></div><div className="hero-bottom"><span className="tiny-label">BUILT WITH INTENTION.</span><span className="hero-scroll">SCROLL TO EXPLORE <ArrowDown size={12}/></span></div></div><div className="hero-visual"><div className="hero-visual-grid"/><div className="visual-corner corner-tl">+</div><div className="visual-corner corner-br">+</div><span className="visual-index">FIG. 01 — FROM COMPLEXITY TO CLARITY</span><CalculatorArt large/><div className="hero-visual-footer"><span><i/> SYSTEMS THAT MAKE SENSE</span><span>VR / 001</span></div></div></section>

      <div className="stack-strip"><div className="container stack-inner"><span className="stack-label">MY EVERYDAY TOOLKIT</span><div className="stack-items"><span><Code2 size={17}/> Laravel</span><span><span className="react-mark">⚛</span> React</span><span><span className="js-mark">JS</span> JavaScript</span><span><Database size={16}/> MySQL</span><span><GitBranch size={17}/> Git</span><span><span className="css-mark">#</span> CSS</span></div></div></div>

      <section id="work" className="work-section container section-space"><div className="section-top"><span className="eyebrow"><i/> 01 / SELECTED WORK</span><span className="section-aside">Dibangun dari kebutuhan nyata.</span></div><div className="section-heading"><h2>Logika yang kuat.<br/><em>Hasil yang terasa.</em></h2><p>Beberapa bagian dari perjalanan saya<br className="desktop-break"/> membangun aplikasi dan menyelesaikan masalah.</p></div><div className="work-filters" aria-label="Filter proyek">{['All work','Business systems','Interfaces'].map(f=><button key={f} className={f===filter?'selected':''} onClick={()=>setFilter(f)} aria-pressed={f===filter}>{f}{f===filter&&<span>{visible.length.toString().padStart(2,'0')}</span>}</button>)}</div><div className="project-grid">{visible.map(project=><article className={`project-card project-${project.visual}`} key={project.id}><button className={`project-art-button visual-${project.visual}`} onClick={()=>setSelected(project)} aria-label={`Buka studi kasus ${project.name}`}><div className="project-art-top"><span>{project.category}</span><span>0{projects.indexOf(project)+1} / CASE STUDY</span></div><ProjectVisual kind={project.visual}/><span className="project-open"><ArrowUpRight size={20}/></span></button><div className="project-description"><div className="project-title-row"><span className="project-number">/{project.number}</span><button onClick={()=>setSelected(project)}><h3>{project.title}</h3><ArrowUpRight size={20}/></button></div><p>{project.description}</p><div className="tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div><div className="work-note"><span><CircleDot size={14}/> Konteks nyata. Visual dan data demo dibuat khusus untuk portfolio.</span><a href="#contact">Punya tantangan serupa? <ArrowUpRight size={15}/></a></div></section>

      <section id="about" className="about-section"><div className="container about-grid"><div className="about-art"><div className="about-art-label"><span className="eyebrow">A LITTLE ABOUT ME</span><ArrowUpRight size={20}/></div><div className="monogram">v<span>r</span><i>.</i></div><div className="about-art-bottom"><span>CURIOUS MIND.<br/>PRACTICAL BUILDER.</span><svg width="82" height="36" viewBox="0 0 82 36" fill="none" aria-hidden="true"><path d="M1 29 14 8l9 18L42 2l-6 30L59 9l-2 19L81 8" stroke="currentColor" strokeWidth="2"/></svg></div></div><div className="about-copy"><span className="eyebrow"><i/> 02 / BEHIND THE WORK</span><h2>Halo, saya Valen.<br/>Saya suka membuat<br/><em>hal jadi masuk akal.</em></h2><p>Saya senang berada di pertemuan antara logika dan tampilan. Memahami proses yang panjang, mencari bagian yang bisa disederhanakan, lalu mengubahnya menjadi aplikasi yang nyaman digunakan.</p><p>Belakangan, saya banyak mengerjakan aplikasi bisnis berbasis Laravel: dari kalkulasi produk dan estimasi, sampai pengelolaan sample serta penelusuran master data. Portfolio ini saya bangun dengan React sebagai ruang untuk merangkai cerita di balik pekerjaan tersebut.</p><div className="about-values"><span><Check size={15}/> Detail matters</span><span><Check size={15}/> Always learning</span><span><Check size={15}/> Build with purpose</span></div><a className="text-link" href={`mailto:${profile.email}`}>Mulai percakapan <ArrowUpRight size={16}/></a></div></div></section>

      <section id="process" className="container process-section section-space"><div className="section-top"><span className="eyebrow"><i/> 03 / HOW I WORK</span><span className="section-aside">Dari pertanyaan yang tepat, ke solusi yang berguna.</span></div><div className="section-heading"><h2>Bukan sekadar selesai.<br/><em>Tapi bisa diandalkan.</em></h2></div><div className="process-grid">{[{n:'01',title:'Pahami dulu.',desc:'Mulai dari kebutuhan pengguna, alur kerja, dan aturan bisnis. Memastikan masalahnya jelas sebelum memilih solusi.',icon:<CircleDot/>},{n:'02',title:'Susun dengan jelas.',desc:'Merancang struktur data, alur interaksi, dan batas antarfitur agar pengembangannya tetap terarah.',icon:<Layers3/>},{n:'03',title:'Bangun & periksa.',desc:'Mengembangkan aplikasi secara bertahap, mengecek hasil, dan menelusuri detail sampai perilakunya sesuai.',icon:<Code2/>}].map(p=><article className="process-card" key={p.n}><div className="process-card-top"><span>{p.n}</span>{p.icon}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="process-line"><i/></div></article>)}</div><div className="closing-note"><span>GOOD CODE IS GOOD COMMUNICATION.</span><span>Dan aplikasi yang baik dimulai dari memahami manusia yang memakainya.</span></div></section>

      <section id="contact" className="contact-section"><div className="container contact-inner"><div className="contact-top"><span className="eyebrow"><i/> 04 / LET’S MAKE IT HAPPEN</span><span>HAVE AN IDEA IN MIND?</span></div><div className="contact-heading"><h2>Proyek berikutnya,<br/><em>kita bangun bersama.</em></h2><a href={waLink} className="contact-orb" aria-label="Diskusi proyek melalui WhatsApp" target="_blank" rel="noopener noreferrer"><ArrowUpRight strokeWidth={1.2}/></a></div><div className="contact-bottom"><div><p>Punya ide, tantangan, atau sekadar ingin kenalan?</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={20}/></a></div><div className="contact-actions"><button onClick={copyEmail} className="copy-button" aria-live="polite">{copied?<><Check size={15}/>Email tersalin</>:<><Mail size={15}/>Salin email</>}</button><a href={waLink} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={15}/></a></div></div></div></section>
    </main>
    <footer className="container footer"><a className="brand footer-brand" href="#"><Mark/><span>valen.</span></a><span>© {new Date().getFullYear()} Valen Ramadhan</span><a href="#">Back to top <ArrowUpRight size={14}/></a></footer>
    {selected&&<ProjectDialog key={selected.id} project={selected} close={()=>setSelected(null)}/>}
  </>;
}

export default App;
