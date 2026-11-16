import {useEffect, useRef, useState} from 'react';
import {ArrowUpRight, ArrowRight, ArrowDown, Check, X, Menu, GitBranch, Code2, Database, Layers, SlidersHorizontal, Box, FileText, Copy, ChevronRight} from 'lucide-react';
import {profile, projects} from './data.js';
import Playground from './Playground.jsx';

const whatsapp = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent('Halo Valen, saya ingin berdiskusi tentang project.')}`;

function Logo(){return <span className="logo-symbol" aria-hidden="true"><span>v</span><span>r</span></span>;}

function useScrollReveal(dependency) {
  useEffect(()=>{
    const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(motion.matches || !('IntersectionObserver' in window))return;
    const elements=[...document.querySelectorAll('.section-top, .module-tabs, .featured-workspace, .project-card, .about-grid > div, .contact-heading, .contact-bottom')].filter(el=>!el.hasAttribute('data-reveal'));
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.dataset.reveal='visible';observer.unobserve(entry.target);}
      });
    },{threshold:0.08,rootMargin:'0px 0px -28px 0px'});
    elements.forEach((el,i)=>{el.dataset.reveal='pending';el.style.setProperty('--reveal-delay',`${i%2*85}ms`);observer.observe(el);});
    const disable=()=>{if(motion.matches){elements.forEach(el=>el.dataset.reveal='visible');observer.disconnect();}};
    motion.addEventListener('change',disable);
    return ()=>{observer.disconnect();motion.removeEventListener('change',disable);elements.forEach(el=>{if(el.dataset.reveal==='pending')delete el.dataset.reveal;});};
  },[dependency]);
}

function tiltPreview(event){
  if(!window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches)return;
  const box=event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--tilt-x',`${((event.clientY-box.top)/box.height-.5)*-6}deg`);
  event.currentTarget.style.setProperty('--tilt-y',`${((event.clientX-box.left)/box.width-.5)*8}deg`);
}
function resetTilt(event){event.currentTarget.style.setProperty('--tilt-x','0deg');event.currentTarget.style.setProperty('--tilt-y','0deg');}

function ModuleVisual({type='development', view}) {
  if(type==='samples')return <div className="tool-preview barcode-preview"><div className="tool-preview-top"><Box size={13}/><span>SAMPLE REGISTER</span><span className="preview-status">IDENTIFIED</span></div><div className="barcode-label"><span>SAMPLE PRODUCT</span><strong>SP-001</strong><svg className="barcode-bars" viewBox="0 0 240 58" role="img" aria-label="Ilustrasi label barcode sample">{Array.from({length:65},(_,i)=><rect key={i} x={i*3.6} y="0" width={i%3===0?2.7:1.3} height={i%7===0?58:49} fill="currentColor"/>)}</svg><small>SAMPLE / LABEL PREVIEW</small></div><div className="preview-bottom"><span>Data sample</span><ArrowRight size={12}/><span>Identitas barcode</span></div></div>;
  if(type==='inspection')return <div className="tool-preview inspection-preview"><div className="tool-preview-top"><Check size={13}/><span>{view==='Report'?'QC REPORT':'QUALITY INSPECTION'}</span><span className="preview-status">QC</span></div><div className="preview-heading">Inspection checklist<span>Detail pemeriksaan</span></div><div className="qc-table-head"><span>PARAMETER</span><span>HASIL</span><span>STATUS</span></div>{['Spesifikasi','Dimensi','Visual','Dokumen'].map(t=><div className="qc-row" key={t}><span>{t}</span><span>Reviewed</span><span><Check size={10}/>OK</span></div>)}<div className="preview-bottom"><FileText size={12}/><span>Catatan dan laporan pemeriksaan</span></div></div>;
  if(type==='tasks')return <div className="tool-preview task-preview"><div className="tool-preview-top"><Layers size={13}/><span>DAILY WORKSPACE</span><span className="preview-status">TASKS</span></div><div className="preview-heading">Daily tasks<span>Aktivitas dan progress pekerjaan</span></div><div className="kanban-board">{[['To do','Review dokumen','Susun checklist'],['In progress','Update aplikasi','Periksa data'],['Done','Rekap aktivitas','Laporan harian']].map(([status,...tasks])=><div className="kanban-column" key={status}><span><i/>{status}</span>{tasks.map((t,i)=><div className="kanban-card" key={t}><small>{i?'OPERATIONS':'DEVELOPMENT'}</small><strong>{t}</strong><span><i/>Assigned</span></div>)}</div>)}</div><div className="preview-bottom"><span>Daily activity</span><span>Progress tracking</span></div></div>;
  if(type==='reports')return <div className="tool-preview report-preview"><div className="tool-preview-top"><Database size={13}/><span>REPORTING WORKSPACE</span><span className="preview-status">DATA</span></div><div className="preview-heading">{view==='Compare'?'Data comparison':'Operational reports'}<span>Pengolahan dan pemeriksaan data</span></div><div className="report-chart">{[40,65,48,80,62,91,75,100].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div><div className="report-source"><span><Database size={13}/>Source data</span><ArrowRight size={13}/><span><FileText size={13}/>CSV report</span></div><div className="preview-bottom"><span>Compare · Validate · Export</span><Check size={12}/></div></div>;
  return <div className="tool-preview development-preview"><div className="tool-preview-top"><Code2 size={13}/><span>DEVELOPMENT WORKSPACE</span><span className="preview-status">TOOLS</span></div><div className="preview-heading">{view==='Part Number'?'Part number extractor':view==='Formula'?'Formula workspace':'Product estimate'}<span>Input, formula, dan hasil perhitungan</span></div><div className="estimate-flow"><span>Spesifikasi</span><ArrowRight size={12}/><span>Formula</span><ArrowRight size={12}/><span>Estimasi</span></div>{[['Estimate product','Material & proses'],['Part number extractor','Identifikasi spesifikasi'],['Formula product','Parameter & breakdown']].map(([title,desc])=><div className="development-row" key={title}><span><Layers size={13}/></span><div><strong>{title}</strong><small>{desc}</small></div><ChevronRight size={13}/></div>)}<div className="preview-bottom"><span>Master data connected</span><Check size={12}/></div></div>;
}

function Workspace({project, compact=false}) {
  const [view,setView]=useState(project.tabs[0]);
  return <div className={`workspace ${compact?'compact':''}`}>
    <div className="workspace-top"><span className="window-controls"><i/><i/><i/></span><span>COMPANY WORKSPACE <span>/ {project.code}</span></span><span className="workspace-version">01.00</span></div>
    <div className="workspace-body"><aside className="workspace-sidebar"><span className="workspace-app"><Box size={19}/></span>{[Layers,SlidersHorizontal,Database,FileText].map((Icon,i)=><span key={i} className={i===0?'selected':''}><Icon size={15}/></span>)}<span className="sidebar-bottom">VR</span></aside>
    <div className="workspace-main"><div className="workspace-heading"><div><span className="workspace-breadcrumb">Modules <ChevronRight size={9}/>{project.code}</span><h3>{project.name}</h3></div><span className="workspace-mode">PREVIEW</span></div>
    <div className="workspace-tabs">{project.tabs.map(t=><button key={t} className={view===t?'selected':''} onClick={()=>setView(t)}>{t}</button>)}</div>
    <div className={`workspace-canvas object-${project.color}`}><div className="technical-grid"/><span className="canvas-label">{project.code} / MODULE PREVIEW</span><ModuleVisual key={view} type={project.id} view={view}/><span className="canvas-legend">ILLUSTRATIVE INTERFACE</span></div>
    <div className="workspace-fields" key={view}>{project.fields[view].map(([label,value])=><div key={label}><span>{label}</span><strong>{value}<ChevronRight size={10}/></strong></div>)}</div>
    <div className="workspace-footer"><span><i/> Portfolio interface preview</span><span>No internal data <Check size={10}/></span></div></div></div>
  </div>;
}

function CaseDialog({project,onClose}){
  const ref=useRef(null);
  useEffect(()=>{const element=ref.current,previous=document.activeElement;const overflow=document.body.style.overflow;element.showModal();document.body.style.overflow='hidden';return ()=>{if(element.open)element.close();document.body.style.overflow=overflow;previous?.focus({preventScroll:true});};},[]);
  return <dialog ref={ref} className="case-dialog" aria-labelledby="case-title" onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose();}}><div className="case-content"><div className="case-top"><span className="section-label">PROJECT / {project.code}</span><button className="icon-button" onClick={onClose} aria-label="Tutup detail proyek"><X size={20}/></button></div><h2 id="case-title">{project.name}</h2><p className="case-intro">{project.description}</p><div className="tag-list">{project.tags.map(t=><span key={t}>{t}</span>)}</div><Workspace project={project}/><div className="case-details"><div><h3>Tentang modul</h3><p>{project.detail}</p></div><div><h3>Bagian yang ditampilkan</h3><ul>{project.features.map(f=><li key={f}><Check size={14}/>{f}</li>)}</ul></div></div><p className="privacy-note">Antarmuka dibuat ulang untuk portfolio. Data perusahaan, pelanggan, harga, dan source code internal tidak dipublikasikan.</p></div></dialog>;
}

function App(){
  const [featured,setFeatured]=useState('development');
  const [filter,setFilter]=useState('Semua');
  useScrollReveal(filter);
  const [selected,setSelected]=useState(null);
  const [menu,setMenu]=useState(false);
  const [copied,setCopied]=useState(false);
  const timer=useRef(null);
  useEffect(()=>()=>clearTimeout(timer.current),[]);
  const current=projects.find(p=>p.id===featured);
  const filtered=projects.filter(p=>filter==='Semua'||p.category===filter);
  async function copy(){try{await navigator.clipboard.writeText(profile.email);setCopied(true);clearTimeout(timer.current);timer.current=setTimeout(()=>setCopied(false),2500);}catch{location.href=`mailto:${profile.email}`;}}
  return <>
    <a className="skip-link" href="#main">Langsung ke konten</a>
    <header className="site-header"><div className="container nav"><a href="#" className="brand" aria-label="Valen Ramadhan, ke atas"><Logo/><span>valen<span className="accent">.</span></span></a><nav id="main-navigation" className={menu?'navigation open':'navigation'} aria-label="Navigasi utama">{[['projects','Projects'],['about','Tentang'],['contact','Kontak']].map(([id,label])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{label}</a>)}<a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13}/></a></nav><a className="header-contact" href={whatsapp} target="_blank" rel="noopener noreferrer">Hubungi saya <ArrowUpRight size={14}/></a><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-controls="main-navigation" aria-label={menu?'Tutup navigasi':'Buka navigasi'}>{menu?<X size={22}/>:<Menu size={22}/>}</button></div></header>
    <main id="main">
      <section className="hero container"><div className="hero-copy"><div className="hero-label"><span/> WEB DEVELOPER <i/> INDONESIA</div><div className="hero-nameplate">VALEN RAMADHAN / WEB DEVELOPER</div><h1>WORK<br/>IN <span>MOTION.</span></h1><div className="hero-bio"><span className="bio-rule"/><p>Saya Valen. Saya membangun aplikasi yang dipakai tim untuk bekerja: development, QC, daily task, barcode, dan laporan.</p></div><div className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowDown size={15}/></a><a className="button text" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15}/></a></div><div className="hero-stack"><span>LARAVEL</span><i/><span>JAVASCRIPT</span><i/><span>REACT</span><i/><span>MYSQL</span></div></div>
      <div className="hero-studio" onPointerMove={tiltPreview} onPointerLeave={resetTilt}><div className="studio-top"><span>COMPANY TOOLS & MODULES</span><span>DEVELOPMENT / WEB</span></div><div className="studio-object object-blue"><div className="technical-grid"/><ModuleVisual type="development"/></div><div className="studio-bottom"><span><i/> DEVELOPMENT / QC / TASKS / REPORTS</span><ArrowUpRight size={18}/></div></div></section>

      <div className="motion-ribbon" aria-hidden="true"><div>{[0,1].map(n=><span key={n}>DEVELOPMENT <i>+</i> INSPECTION <i>+</i> MANAGEMENT <i>+</i> BARCODE <i>+</i> REPORTING <i>+</i> </span>)}</div></div><Playground/><section className="featured-section container" aria-labelledby="featured-title"><div className="section-top"><div><span className="section-label">BUSINESS APPLICATIONS</span><h2 id="featured-title">Tools & modul perusahaan<span>.</span></h2></div><p>Development, quality control,<br/>operasional, dan pelaporan.</p></div><div className="module-tabs" aria-label="Pilih preview modul">{projects.slice(0,4).map(p=><button className={featured===p.id?'active':''} aria-pressed={featured===p.id} onClick={()=>setFeatured(p.id)} key={p.id}><span>{p.code}</span><small>{p.name}</small><ArrowUpRight size={15}/></button>)}</div><div className="featured-workspace"><Workspace key={featured} project={current}/><div className="featured-info"><div><span className="section-label">{current.code} / COMPANY MODULE</span><h3>{current.name}</h3><p>{current.description}</p></div><button className="button outline" onClick={()=>setSelected(current)}>Detail project <ArrowUpRight size={15}/></button></div></div></section>

      <section id="projects" className="projects-section container"><div className="section-top"><div><span className="section-label">SELECTED PROJECTS</span><h2>Portfolio<span>.</span></h2></div><span className="section-count">{projects.length.toString().padStart(2,'0')} PROJECTS</span></div><div className="project-filters" aria-label="Filter proyek">{['Semua','Development','Quality Control','Operasional','Reports & tools'].map(f=><button key={f} className={filter===f?'active':''} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="project-grid">{filtered.map((p,i)=><article className="project-card" key={p.id}><button className={`project-visual object-${p.color}`} onClick={()=>setSelected(p)} aria-label={`Buka detail ${p.name}`}><div className="technical-grid"/><span className="project-visual-label">{p.code}<small>{p.category}</small></span><ModuleVisual type={p.id}/><span className="project-visual-index">{p.tags[0]} / WEB APPLICATION</span><span className="project-open"><ArrowUpRight size={19}/></span></button><div className="project-card-info"><div className="project-card-heading"><h3><button onClick={()=>setSelected(p)}>{p.name}</button></h3><span>{String(projects.indexOf(p)+1).padStart(2,'0')}</span></div><p>{p.description}</p><div className="tag-list">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></section>

      <section id="about" className="about-section"><div className="container about-grid"><div><span className="section-label">TENTANG SAYA</span><h2>Backend, frontend,<br/>dan detail di antaranya<span>.</span></h2><p>Saya Valen Ramadhan. Saya mengembangkan aplikasi web berbasis Laravel dan JavaScript untuk kebutuhan kerja perusahaan. Yang saya kerjakan mencakup modul development, inspection QC, manajemen tugas, pengelolaan sample, dan laporan.</p><p>Saya terlibat dari penyusunan alur kerja, struktur database, dan logika backend sampai antarmuka yang digunakan tim. Fokusnya membuat proses yang sebelumnya terpisah bisa dikelola melalui tools yang sesuai kebutuhan perusahaan.</p><a className="inline-link" href={`mailto:${profile.email}`}>Kirim email <ArrowUpRight size={15}/></a></div><div className="skill-list">{[[Code2,'Backend development','Laravel, PHP, business logic, validation'],[Layers,'Frontend development','JavaScript, React, Blade, CSS'],[Database,'Data & reporting','MySQL, SQL, pengolahan data, laporan CSV'],[GitBranch,'Development workflow','Git, debugging, pengujian regresi']].map(([Icon,title,desc])=><div className="skill-row" key={title}><span className="skill-icon"><Icon size={21}/></span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight size={16}/></div>)}</div></div></section>

      <section id="contact" className="contact-section container"><div className="contact-eyebrow"><span className="section-label">CONTACT</span><span className="contact-line"/></div><div className="contact-heading"><h2>Ada project<br/>yang ingin dibahas<span>?</span></h2><a className="contact-arrow" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Hubungi Valen lewat WhatsApp"><ArrowUpRight size={46} strokeWidth={1.5}/></a></div><div className="contact-bottom"><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={18}/></a><div className="contact-links"><button onClick={copy} aria-live="polite">{copied?<Check size={14}/>:<Copy size={14}/>} {copied?'Email tersalin':'Salin email'}</button><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14}/></a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14}/></a></div></div></section>
    </main><footer className="container footer"><a href="#" className="brand"><Logo/><span>valen.</span></a><span>© {new Date().getFullYear()} Valen Ramadhan</span><a href="#">Kembali ke atas <ArrowUpRight size={13}/></a></footer>
    {selected&&<CaseDialog key={selected.id} project={selected} onClose={()=>setSelected(null)}/>}
  </>;
}
export default App;
