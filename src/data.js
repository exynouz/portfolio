export const profile = {
  name: 'Valen Ramadhan',
  email: '311005bksvalen@gmail.com',
  whatsapp: '628988668262',
  github: 'https://github.com/exynouz',
};

export const projects = [
  {
    id: 'gpp', code: 'GPP', name: 'Gland Packing', category: 'Kalkulasi produk',
    subtitle: 'Material, proses produksi, dan finishing.',
    description: 'Pengembangan kalkulasi gland packing, estimasi harga, serta pemisahan perhitungan dry dan wet.',
    tags: ['Laravel', 'JavaScript', 'MySQL'], color: 'copper',
    features: ['Kalkulasi kebutuhan material & proses', 'Perhitungan dry dan wet', 'Summary per roll & adjustment', 'Integrasi master bobbin, density & mesin'],
    detail: 'Salah satu bagian yang saya kerjakan adalah memisahkan perubahan kalkulasi wet dari baseline dry. Saya menelusuri breakdown harga, membandingkan master data, dan memeriksa hasil melalui pengujian regresi.',
  },
  {
    id: 'swg', code: 'SWG', name: 'Spiral Wound Gasket', category: 'Kalkulasi produk',
    subtitle: 'Konfigurasi gasket dan komponen biayanya.',
    description: 'Workspace konfigurasi spiral wound gasket dengan rincian komponen material dan estimasi.',
    tags: ['Laravel', 'Blade', 'MySQL'], color: 'blue',
    features: ['Konfigurasi spesifikasi gasket', 'Komponen inner ring, outer ring & winding', 'Rincian harga material', 'Workspace estimasi & quotation'],
    detail: 'Modul SWG menghubungkan input spesifikasi produk dengan komponen material dan harga. Portfolio ini menampilkan ulang konsep antarmukanya; data harga dan informasi pelanggan tidak ditampilkan.',
  },
  {
    id: 'ejf', code: 'EJF', name: 'Frame Expansion Joint', category: 'Kalkulasi produk',
    subtitle: 'Estimasi produk dengan banyak komponen.',
    description: 'Pengembangan workspace kalkulasi frame expansion joint dan rincian komponen estimasi.',
    tags: ['Laravel', 'JavaScript', 'SQL'], color: 'olive',
    features: ['Spesifikasi & konfigurasi produk', 'Komponen material', 'Rincian biaya proses', 'Summary estimasi'],
    detail: 'Perhitungan produk membutuhkan alur input, master material, dan rincian proses yang saling terhubung. Fokus workspace ini adalah menempatkan spesifikasi dan breakdown dalam satu alur.',
  },
  {
    id: 'ejm', code: 'EJM', name: 'Metal Expansion Joint', category: 'Kalkulasi produk',
    subtitle: 'Spesifikasi, material, dan summary produk.',
    description: 'Pengembangan modul metal expansion joint, dari informasi produk hingga kebutuhan komponen.',
    tags: ['Laravel', 'Blade', 'MySQL'], color: 'silver',
    features: ['Input spesifikasi produk', 'Data komponen bellows & pendukung', 'Pengelolaan master material', 'Summary kalkulasi'],
    detail: 'Modul ini merupakan bagian dari workspace kalkulasi produk industri. Informasi produk dan material disusun agar proses input serta pemeriksaan hasil bisa dilakukan dalam aplikasi yang sama.',
  },
  {
    id: 'samples', code: 'SAMPLE', name: 'Sample Product', category: 'Operasional',
    subtitle: 'Pengelolaan data sample produk.',
    description: 'Halaman sample product dengan form input, interaksi JavaScript, dan controller Laravel.',
    tags: ['Laravel', 'CSS', 'JavaScript'], color: 'violet',
    features: ['Form informasi sample', 'Pengelolaan data produk', 'Interaksi input', 'Integrasi controller Laravel'],
    detail: 'Pada bagian ini saya mengerjakan controller, halaman input, styling, dan JavaScript untuk modul sample product.',
  },
  {
    id: 'audit', code: 'DATA', name: 'Master Data Audit', category: 'Data & tools',
    subtitle: 'Perbandingan data antar-environment.',
    description: 'Tool pembanding dump SQL untuk memeriksa perubahan bobbin, density, dan prioritas mesin.',
    tags: ['Node.js', 'SQL', 'CSV'], color: 'teal',
    features: ['Pembacaan dump SQL tanpa import', 'Pencocokan berdasarkan business key', 'Perbedaan per kolom', 'Export laporan CSV'],
    detail: 'Saya membandingkan data berdasarkan type, ukuran, dan mesin. Perubahan nilai dipisahkan dari perbedaan format atau ID database, sehingga penyebab selisih hasil lebih mudah ditelusuri.',
  },
];
