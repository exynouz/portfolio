export const profile = {
  name: 'Valen Ramadhan',
  email: '311005bksvalen@gmail.com',
  whatsapp: '628988668262',
  github: 'https://github.com/exynouz',
};

export const projects = [
  {
    id: 'development', code: 'DEV', name: 'Product Development', category: 'Development', color: 'blue',
    description: 'Modul estimasi produk, extractor part number, dan formula produk untuk mendukung pekerjaan tim development.',
    tags: ['Laravel', 'JavaScript', 'MySQL'],
    tabs: ['Estimate', 'Part Number', 'Formula'],
    fields: {
      Estimate: [['INPUT', 'Spesifikasi'], ['PROCESS', 'Kalkulasi'], ['OUTPUT', 'Estimasi']],
      'Part Number': [['INPUT', 'Part number'], ['PROCESS', 'Extractor'], ['OUTPUT', 'Detail produk']],
      Formula: [['INPUT', 'Parameter'], ['PROCESS', 'Formula'], ['OUTPUT', 'Breakdown']],
    },
    features: ['Estimasi kebutuhan material dan biaya', 'Extractor part number produk', 'Pengelolaan formula dan parameter', 'Summary kalkulasi dan quotation'],
    detail: 'Saya mengembangkan tools yang menghubungkan spesifikasi, formula, dan master data. Tim bisa menyusun estimasi, membaca informasi dari part number, serta memeriksa rincian perhitungan dalam satu aplikasi.',
  },
  {
    id: 'inspection', code: 'QC', name: 'Product Inspection', category: 'Quality Control', color: 'olive',
    description: 'Modul inspection QC untuk mencatat hasil pemeriksaan, memeriksa spesifikasi, dan menyiapkan laporan inspeksi.',
    tags: ['Laravel', 'JavaScript', 'MySQL'],
    tabs: ['Inspection', 'Checklist', 'Report'],
    fields: {
      Inspection: [['INPUT', 'Data pemeriksaan'], ['PROCESS', 'Validasi QC'], ['OUTPUT', 'Hasil inspeksi']],
      Checklist: [['ACUAN', 'Spesifikasi'], ['PEMERIKSAAN', 'Checklist QC'], ['HASIL', 'Status item']],
      Report: [['SUMBER', 'Hasil inspeksi'], ['DOKUMEN', 'QC report'], ['OUTPUT', 'Laporan']],
    },
    features: ['Input hasil pemeriksaan QC', 'Pemeriksaan terhadap spesifikasi', 'Checklist dan catatan inspeksi', 'Laporan hasil pemeriksaan'],
    detail: 'Modul ini membantu tim QC menyimpan hasil pemeriksaan secara terstruktur. Informasi spesifikasi, hasil inspeksi, dan catatan pemeriksaan disusun untuk kebutuhan penelusuran serta pelaporan.',
  },
  {
    id: 'tasks', code: 'TASK', name: 'Daily Task Management', category: 'Operasional', color: 'copper',
    description: 'Modul pengelolaan tugas harian untuk mencatat pekerjaan, memperbarui progress, dan melihat aktivitas tim.',
    tags: ['Laravel', 'JavaScript', 'MySQL'],
    tabs: ['Daily Tasks', 'Progress', 'Report'],
    fields: {
      'Daily Tasks': [['PEKERJAAN', 'Daftar tugas'], ['PIC', 'Penanggung jawab'], ['JADWAL', 'Aktivitas harian']],
      Progress: [['TASK', 'Pekerjaan'], ['STATUS', 'Progress'], ['CATATAN', 'Update aktivitas']],
      Report: [['PERIODE', 'Harian'], ['SUMBER', 'Aktivitas tim'], ['OUTPUT', 'Rekap pekerjaan']],
    },
    features: ['Pencatatan tugas dan aktivitas harian', 'Penanggung jawab pekerjaan', 'Pembaruan status dan progress', 'Rekap pekerjaan tim'],
    detail: 'Saya membuat modul untuk mengelola pekerjaan harian dalam satu tempat. Daftar tugas, penanggung jawab, dan perkembangan pekerjaan bisa dicatat tanpa memisahkan informasinya ke banyak dokumen.',
  },
  {
    id: 'samples', code: 'SAMPLE', name: 'Sample Product Barcode', category: 'Operasional', color: 'violet',
    description: 'Pengelolaan sample produk dengan identitas barcode untuk memudahkan pencatatan dan pencarian data sample.',
    tags: ['Laravel', 'JavaScript', 'Barcode'],
    tabs: ['Sample', 'Barcode', 'History'],
    fields: {
      Sample: [['DATA', 'Informasi sample'], ['IDENTITAS', 'Kode sample'], ['STATUS', 'Pencatatan']],
      Barcode: [['SUMBER', 'Data sample'], ['LABEL', 'Identitas barcode'], ['FUNGSI', 'Pencarian sample']],
      History: [['SAMPLE', 'Identitas'], ['AKTIVITAS', 'Riwayat data'], ['REFERENSI', 'Pencatatan']],
    },
    features: ['Form dan data sample produk', 'Identitas sample dengan barcode', 'Label untuk identifikasi sample', 'Pencarian dan pengelolaan data'],
    detail: 'Modul ini menghubungkan data sample dengan identitas barcode. Fokusnya membantu tim mengenali sample, mencari informasi yang terkait, dan mengelola pencatatannya melalui aplikasi.',
  },
  {
    id: 'reports', code: 'REPORT', name: 'Reporting & Data Tools', category: 'Reports & tools', color: 'teal',
    description: 'Tools pengolahan data, perbandingan master data, dan laporan untuk kebutuhan operasional perusahaan.',
    tags: ['Node.js', 'SQL', 'CSV'],
    tabs: ['Overview', 'Compare', 'Export'],
    fields: {
      Overview: [['SUMBER', 'Data operasional'], ['PROCESS', 'Pengolahan'], ['OUTPUT', 'Ringkasan']],
      Compare: [['ACUAN', 'Business key'], ['PROCESS', 'Perbandingan'], ['OUTPUT', 'Perbedaan data']],
      Export: [['DATA', 'Hasil pengolahan'], ['FORMAT', 'CSV'], ['OUTPUT', 'Laporan']],
    },
    features: ['Perbandingan data antar-environment', 'Pemeriksaan perubahan per kolom', 'Pengolahan dan validasi data', 'Export hasil analisis ke CSV'],
    detail: 'Saya membuat tools untuk memeriksa data dan menyusun laporan yang bisa dipakai tim. Salah satunya membandingkan master data berdasarkan identitas bisnis, lalu memisahkan perubahan nilai, perbedaan format, dan baris tambahan.',
  },
];
