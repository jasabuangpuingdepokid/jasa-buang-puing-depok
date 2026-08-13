# Jasa Buang Puing Depok

Website profesional untuk jasa pembuangan puing bangunan, angkut sampah proyek, urugan tanah, dan bongkaran di Depok dan sekitarnya.

## 🌐 Live Website

Website ini dapat diakses secara online dan menyediakan informasi lengkap tentang layanan yang ditawarkan.

## 📋 Deskripsi

AP Jasa Buang Puing Depok adalah jasa profesional yang melayani pembuangan puing bangunan, tanah, dan material sisa proyek di wilayah Depok dan sekitarnya. Website ini menampilkan:

- Informasi lengkap tentang layanan yang ditawarkan
- Galeri dokumentasi pekerjaan dengan filter kategori
- Keuntungan menggunakan jasa kami
- Area layanan yang dicakup
- Kontak untuk pemesanan via WhatsApp

## 🚀 Fitur Utama

### Layanan yang Ditawarkan
- **Jasa Buang Puing** - Pembuangan puing bangunan dengan cepat dan bersih
- **Jasa Buang Tanah** - Pengangkutan tanah sisa galian
- **Pengurugan Tanah Merah** - Pengurugan dengan tanah merah berkualitas
- **Buang Sampah Proyek** - Pembuangan sampah konstruksi
- **Buang Sampah Pohon/Daun** - Pembersihan sampah organik
- **Pengurugan Puing** - Penutupan lubang bekas galian
- **Jasa Galian Kolam** - Penggalian kolam untuk berbagai kebutuhan
- **Jasa Sewa Pick Up** - Sewa armada pick up untuk angkut material
- **Jasa Sewa Harian Alat** - Sewa alat berat (excavator, dump truck, dll)

### Fitur Website
- ✅ Responsive design (mobile & desktop)
- ✅ Navigasi dengan smooth scroll
- ✅ Galeri interaktif dengan filter kategori
- ✅ Lightbox untuk melihat foto dokumentasi
- ✅ Tombol WhatsApp untuk kontak langsung
- ✅ Sticky header dengan backdrop blur
- ✅ Animasi scroll reveal
- ✅ Optimasi performa (lazy loading gambar)

## 🛠️ Teknologi

Website ini dibangun dengan teknologi web modern:

- **HTML5** - Struktur semantik
- **CSS3** - Styling dengan custom properties (CSS variables)
- **JavaScript (Vanilla)** - Interaktivitas tanpa framework
- **Responsive Design** - Grid dan Flexbox untuk layout
- **Accessibility** - ARIA labels dan keyboard navigation

## 📁 Struktur Project

```
jasabuangpuingdepok/
├── index.html              # Halaman utama
├── style.css               # Stylesheet utama
├── script.js               # JavaScript untuk interaktivitas
├── README.md               # Dokumentasi project
├── images/
│   ├── icons/              # Icon dan favicon
│   ├── poster/             # Gambar poster hero section
│   ├── services/           # Gambar layanan
│   └── documentation/      # Foto dokumentasi pekerjaan
└── favicon.ico             # Favicon website
```

## 🎨 Kustomisasi

### Mengubah Kontak WhatsApp

Cari nomor WhatsApp di file `index.html` dan `script.js`, lalu ganti dengan nomor Anda:

```html
<!-- Contoh di index.html -->
<a href="https://wa.me/6289514162776?text=...">
```

### Mengubah Gambar

Gambar-gambar di project ini terletak di folder `images/`:
- `images/services/` - Gambar untuk kartu layanan
- `images/documentation/` - Foto dokumentasi pekerjaan
- `images/poster/` - Gambar hero section

### Mengubah Warna

Warna tema didefinisikan sebagai CSS variables di `style.css`:

```css
:root {
    --black: #1a1a1a;
    --white: #f7f6f1;
    --yellow: #ffdd00;
    --green: #25d366;
    /* ... */
}
```

## 🚀 Cara Menjalankan

### Opsi 1: Live Server (Rekomendasi)

Gunakan ekstensi Live Server di VS Code atau editor lain:

1. Install ekstensi Live Server
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

### Opsi 2: Python Simple HTTP Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Opsi 3: Node.js http-server

```bash
# Install http-server globally
npm install -g http-server

# Jalankan
http-server
```

Buka browser dan akses `http://localhost:8000`

## 📱 Browser Support

- Chrome (rekomendasi)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Konfigurasi

### Header Height

Tinggi header dapat diubah di CSS variables:

```css
:root {
    --header-h: 76px; /* Desktop */
}

@media (max-width: 767px) {
    :root {
        --header-h: 64px; /* Mobile */
    }
}
```

### Gallery Limit

Jumlah foto yang ditampilkan di galeri dapat diubah di `script.js`:

```javascript
const getLimit = () => window.matchMedia('(max-width: 767px)').matches ? 10 : 12;
// Mobile: 10 foto, Desktop: 12 foto
```

## 📝 Lisensi

Project ini dibuat untuk keperluan komersial Jasa Buang Puing Depok.

## 👤 Kontak

- **WhatsApp:** 0895-1416-2776
- **Instagram:** [@jasa_buang_puing_depok](https://www.instagram.com/jasa_buang_puing_depok/)
- **TikTok:** [@klinkcastra300](https://www.tiktok.com/@klinkcastra300)

## 🙏 Credits

Website ini dikembangkan dengan perhatian pada:
- Performance (optimasi gambar dan lazy loading)
- Accessibility (keyboard navigation, ARIA labels)
- User Experience (smooth scrolling, interactive gallery)
- SEO (meta tags, struktur semantik)

