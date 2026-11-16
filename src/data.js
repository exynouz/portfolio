export const profile = {
  name: 'Valen Ramadhan',
  email: '311005bksvalen@gmail.com',
  whatsapp: '628988668262',
  role: 'Web Developer',
};

export const projects = [
  {
    id: 'product-calculator', number: '01', category: 'Business systems',
    title: 'Presisi di setiap perhitungan.', name: 'Product Calculation System',
    description: 'Menerjemahkan aturan kalkulasi produk menjadi alur estimasi yang bisa ditelusuri, dari master data sampai quotation.',
    tags: ['Laravel', 'JavaScript', 'MySQL'], visual: 'calculator',
    problem: 'Spesifikasi produk, komponen material, proses produksi, dan finishing memiliki aturan yang saling terhubung. Perubahan satu bagian bisa memengaruhi harga pada bagian lain.',
    approach: ['Menelusuri breakdown biaya material dan proses sampai sumber master datanya.', 'Memisahkan jalur kalkulasi dry dan wet agar pengembangan finishing tidak mengubah baseline dry.', 'Membandingkan data serta hasil perhitungan melalui pengujian regresi.'],
    outcome: 'Perhitungan lebih mudah diperiksa, dengan batas yang jelas antara rumus dasar, finishing, dan data pendukung.',
  },
  {
    id: 'sample-management', number: '02', category: 'Interfaces',
    title: 'Operasional yang lebih tertata.', name: 'Sample Product Workspace',
    description: 'Pengembangan halaman pengelolaan sample product dengan form dan interaksi yang mengikuti kebutuhan operasional.',
    tags: ['Laravel', 'Blade', 'CSS', 'JavaScript'], visual: 'samples',
    problem: 'Pengelolaan sample membutuhkan informasi produk yang tersusun rapi dan form yang mudah dipahami saat digunakan sehari-hari.',
    approach: ['Menyusun alur input dan struktur halaman sample product.', 'Mengembangkan tampilan form dan interaksi JavaScript.', 'Menghubungkan antarmuka dengan controller Laravel.'],
    outcome: 'Workspace dengan fokus pada keterbacaan informasi dan alur input yang lebih jelas.',
  },
  {
    id: 'data-audit', number: '03', category: 'Business systems',
    title: 'Data jelas. Keputusan tepat.', name: 'Master Data Comparison',
    description: 'Membandingkan master data antar-environment untuk menemukan perbedaan material, density, dan prioritas mesin.',
    tags: ['SQL', 'Node.js', 'Data validation'], visual: 'audit',
    problem: 'Kode aplikasi yang sama belum tentu menghasilkan harga yang sama ketika isi master data di setiap environment berbeda.',
    approach: ['Membaca dump SQL tanpa mengeksekusinya pada database aplikasi.', 'Mencocokkan baris berdasarkan identitas bisnis, bukan ID database.', 'Memisahkan perubahan nilai, perbedaan format, serta baris tambahan atau hilang.'],
    outcome: 'Laporan perubahan yang bisa ditelusuri per kolom, sehingga investigasi berangkat dari data yang konkret.',
  },
];
