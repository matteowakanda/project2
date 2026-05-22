// --- DATA SOURCE (LINK GAMBAR PILIHAN KELOMPOKMU) ---
const curatedPins = [
    // --- SLOT 1 - 10 ---
    { id: 1, title: "Jaguar XJR-15", category: "cars", img: "https://www.thedrive.com/wp-content/uploads/images-by-url-td/content/2022/04/DSC8115.jpg?quality=85&w=1920" },
    { id: 2, title: "Kyoto Vibe", category: "travel", img: "https://i.pinimg.com/1200x/50/dd/41/50dd4157331a1751f9f85fc271a1b14f.jpg" },
    { id: 3, title: "Modern Facade", category: "architecture", img: "https://i.pinimg.com/736x/d1/10/33/d1103316c8502b8cb4e9070c46444b87.jpg" },
    { id: 4, title: "Street Style", category: "fashion", img: "https://i.pinimg.com/736x/f3/ca/62/f3ca6248ee3b26efbbec582b4779dc40.jpg" },
    { id: 5, title: "Jaguar 1991", category: "cars", img: "https://www.topgear.com/sites/default/files/2022/01/1991-Jaguar-XJR-15-_0.jpg?w=976&h=549" },
    { id: 6, title: "Mountain View", category: "travel", img: "https://i.pinimg.com/1200x/0b/38/3d/0b383de9a69c43b9a5b4631b58d3c4bc.jpg" },
    { id: 7, title: "Concrete House", category: "architecture", img: "https://i.pinimg.com/736x/49/f5/46/49f5461792884a1bde8de299199b7401.jpg" },
    { id: 8, title: "Classic Coat", category: "fashion", img: "https://i.pinimg.com/736x/e3/2a/02/e32a020e39f96ffec3d2f5e6fe6f57c5.jpg" },
    { id: 9, title: "Night Drive", category: "cars", img: "https://4kwallpapers.com/images/walls/thumbs_3t/6749.jpg" },
    { id: 10, title: "Old Town", category: "travel", img: "https://i.pinimg.com/1200x/7c/60/5d/7c605d0b19ca207f73efa204f75721de.jpg" },

    // --- SLOT 11 - 20 ---
    { id: 11, title: "Interior Wood", category: "architecture", img: "https://i.pinimg.com/736x/2a/b7/e4/2ab7e4d61278a73232402a6325d39065.jpg" },
    { id: 12, title: "Runway Look", category: "fashion", img: "https://i.pinimg.com/736x/c0/7b/1d/c07b1d0405d850e10b93a3a836a4b6f7.jpg" },
    { id: 13, title: "Hypercar", category: "cars", img: "https://4kwallpapers.com/images/walls/thumbs_3t/16758.jpg" },
    { id: 14, title: "Beach Sunset", category: "travel", img: "https://i.pinimg.com/1200x/29/2d/e2/292de231f2d4bb8572813423294bae60.jpg" },
    { id: 15, title: "Glass Building", category: "architecture", img: "https://i.pinimg.com/736x/81/84/f4/8184f4c2ce5095b2776352c6614122ea.jpg" },
    { id: 16, title: "Casual Fit", category: "fashion", img: "https://i.pinimg.com/736x/89/88/b9/8988b9abcf5323637c61d954aa0ab400.jpg" },
    { id: 17, title: "Stellantis Concept", category: "cars", img: "https://stellantis3.dam-broadcast.com/medias/domain12808/media107872/2361846-vdfo0n5hp2-whr.jpg" },
    { id: 18, title: "Forest Road", category: "travel", img: "https://i.pinimg.com/1200x/d8/3f/bf/d83fbf66dd66e8f285b19b7c28c222bd.jpg" },
    { id: 19, title: "Aesthetic Room", category: "architecture", img: "https://i.pinimg.com/1200x/82/08/97/8208979666545e33e1bf36ba3e5b34ca.jpg" },
    { id: 20, title: "Winter Style", category: "fashion", img: "https://i.pinimg.com/736x/63/52/4c/63524c97a6800c54b253232edf659009.jpg" },

    // --- SLOT 21 - 30 ---
    { id: 21, title: "Vintage Dashboard", category: "cars", img: "https://live.staticflickr.com/4001/4531884367_1d70304e65_b.jpg" },
    { id: 22, title: "City Lights", category: "travel", img: "https://i.pinimg.com/1200x/40/2c/77/402c7764e298a2d7533edf2f04a8b72c.jpg" },
    { id: 23, title: "Modern Villa", category: "architecture", img: "https://i.pinimg.com/736x/77/60/15/77601558cb5a3ff263990429c3817780.jpg" },
    { id: 24, title: "Chic Outfit", category: "fashion", img: "https://i.pinimg.com/736x/7e/c9/57/7ec9579295ddb696cdf8a89d5a1e4221.jpg" },
    { id: 25, title: "Classic Driver", category: "cars", img: "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/article_images/97348-1031897-car-20241031_145459-4.jpg?1764889535" },
    { id: 26, title: "Desert Vibes", category: "travel", img: "https://i.pinimg.com/1200x/9a/be/a9/9abea96bd01a1a4c4ebedb0a30b775cc.jpg" },
    { id: 27, title: "Minimalist Hall", category: "architecture", img: "https://i.pinimg.com/736x/a0/29/24/a029247ce7223dd1a2e54df3e0b9161c.jpg" },
    { id: 28, title: "Streetwear", category: "fashion", img: "https://i.pinimg.com/1200x/15/86/4c/15864c839e7e618cde5a1422111acdc1.jpg" },
    { id: 29, title: "Drift Action", category: "cars", img: "https://www.driftcon.us/wp-content/uploads/2022/05/DriftCon_TT_22_Top_Header.jpg" },
    { id: 30, title: "Tropical", category: "travel", img: "https://i.pinimg.com/1200x/75/3c/5e/753c5ef8de0b0ba2b3faaf16f09ac2b3.jpg" },

    // --- SLOT 31 - 40 ---
    { id: 31, title: "Cozy Corner", category: "architecture", img: "https://i.pinimg.com/736x/e7/c6/87/e7c68790800e88799c06a3af31b4a678.jpg" },
    { id: 32, title: "Formal Wear", category: "fashion", img: "https://i.pinimg.com/736x/72/f0/42/72f0426c8d954b819b8e664469582b35.jpg" },
    { id: 33, title: "Sports Car", category: "cars", img: "https://m.media-amazon.com/images/S/pv-target-images/ba785d15fbb81b7c5718eb127c319483d3c7132955d6c45c0c803949bb499305._SX1080_FMjpg_.jpg" },
    { id: 34, title: "Urban Explore", category: "travel", img: "https://i.pinimg.com/1200x/10/eb/a3/10eba3c9971c776d2165c50e4532a406.jpg" },
    { id: 35, title: "Spiral Stairs", category: "architecture", img: "https://i.pinimg.com/1200x/9b/19/7a/9b197ab3adcab5d56106ec4144112a00.jpg" },
    { id: 36, title: "Summer Dress", category: "fashion", img: "https://i.pinimg.com/736x/be/61/23/be6123fe1f59344ac011c126b2112046.jpg" },
    { id: 37, title: "Luxury Ride", category: "cars", img: "https://i.pinimg.com/1200x/82/c6/8f/82c68f17d9acfc9337ecc625dc7b0233.jpg" },
    { id: 38, title: "Europe Trip", category: "travel", img: "https://i.pinimg.com/1200x/cc/20/34/cc20345fc36cd31aa7222e60176c0639.jpg" },
    { id: 39, title: "Industrial", category: "architecture", img: "https://i.pinimg.com/1200x/d9/93/d8/d993d80fa365525ebab4663f6d2d247c.jpg" },
    { id: 40, title: "Accessories", category: "fashion", img: "https://i.pinimg.com/1200x/18/74/c0/1874c002e622728579cc978208b40260.jpg" },

    // --- SLOT 41 - 48 (Sesuai data kamu) ---
    { id: 41, title: "Matte Black", category: "cars", img: "https://i.pinimg.com/736x/63/cb/30/63cb30866ad939ec539837a617de0c59.jpg" },
    { id: 42, title: "Hidden Gem", category: "travel", img: "https://i.pinimg.com/1200x/a3/42/06/a34206f8035b9ad3c3fe333a5bc64aba.jpg" },
    { id: 43, title: "Loft Design", category: "architecture", img: "https://i.pinimg.com/1200x/ee/79/86/ee7986d2d70149b5cf93281374b43575.jpg" },
    { id: 44, title: "OOTD", category: "fashion", img: "https://i.pinimg.com/736x/a9/75/fc/a975fcce29d4efc59d3ae296113320a6.jpg" },
    { id: 47, title: "White Interior", category: "architecture", img: "https://i.pinimg.com/1200x/c1/df/f0/c1dff09c2b63003d169825d042633895.jpg" },
    { id: 48, title: "Black Outfit", category: "fashion", img: "https://i.pinimg.com/736x/f4/5e/4c/f45e4c95f8bda80e0920c9b3ab70bd39.jpg" }
];

const defaultDesc = "Aesthetic curated visualization. Part of A.D.E.C.K collection.";
const commentsData = [
    { user: "Alex_Design", text: "This is absolutely stunning! 🔥" },
    { user: "SarahTravels", text: "Added to my bucket list." },
    { user: "CarEnthusiast", text: "Need this ASAP." },
    { user: "MinimalistLife", text: "So clean and aesthetic." },
    { user: "PhotoGeek", text: "Great lighting in this shot." },
    { user: "Swinto_Design", text: "Sigma Wintows!! 🔥" },
    { user: "Leopedos", text: "Yes Sirrrrr." },
    { user: "Tadeusszz", text: "Conglomarate vibes." },
    { user: "Agusceo", text: "What a dream!" },
    { user: "OloanArmy", text: "Such a pro." }
];
// --- LOGIC WEBSITE (JANGAN DIUBAH) ---

const galleryWrapper = document.getElementById('galleryWrapper');
const modal = document.getElementById('modal');
const toast = document.getElementById('toast');
const searchInput = document.getElementById('searchInput');

document.addEventListener('DOMContentLoaded', () => {
    // Shuffle saat pertama kali dibuka
    const shuffledDeck = shuffleArray(curatedPins); 
    renderPins(shuffledDeck);
});

// Fungsi Acak (Shuffle)
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Render Gallery dengan Skeleton Loading
function renderPins(data) {
    galleryWrapper.innerHTML = ''; 
    data.forEach(pin => {
        // Skip gambar jika link kosong
        if(pin.img === "LINK_GAMBAR_DISINI") return;

        const isSaved = localStorage.getItem(`saved-${pin.id}`) === 'true';
        const card = document.createElement('div');
        // Tambah class 'loading' untuk animasi skeleton
        card.className = 'pin-card loading';
        
        // Perhatikan bagian onload di bawah ini
        card.innerHTML = `
            <img src="${pin.img}" alt="${pin.title}" loading="lazy" 
                 onload="this.classList.add('loaded'); this.parentElement.classList.remove('loading')">
            <div class="card-overlay" onclick="openModal(${pin.id})">
                <button class="btn-primary ${isSaved ? 'saved' : ''}" 
                        onclick="event.stopPropagation(); toggleSave(${pin.id}, this)">
                    ${isSaved ? 'Saved' : 'Save'}
                </button>
            </div>
        `;
        galleryWrapper.appendChild(card);
    });
}

// Filter Category
function filterCategory(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter lalu acak hasilnya
    let result = (category === 'all') ? curatedPins : curatedPins.filter(pin => pin.category === category);
    renderPins(shuffleArray(result));
}

// Search Function
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = curatedPins.filter(pin => 
        pin.title.toLowerCase().includes(term) || 
        pin.category.toLowerCase().includes(term)
    );
    renderPins(filtered);
});

// Save Function
function toggleSave(id, btnElement) {
    const isSaved = localStorage.getItem(`saved-${id}`) === 'true';
    if (isSaved) {
        localStorage.removeItem(`saved-${id}`);
        if(btnElement) { btnElement.innerText = 'Save'; btnElement.classList.remove('saved'); }
    } else {
        localStorage.setItem(`saved-${id}`, 'true');
        if(btnElement) { btnElement.innerText = 'Saved'; btnElement.classList.add('saved'); }
        showToast();
    }
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// MODAL DETAIL Logic
function openModal(id) {
    const pin = curatedPins.find(p => p.id === id);
    if (!pin) return;

    document.getElementById('modalImg').src = pin.img;
    document.getElementById('modalTitle').innerText = pin.title;
    document.getElementById('modalDesc').innerText = defaultDesc;

    const modalSaveBtn = document.getElementById('modalSaveBtn');
    const isSaved = localStorage.getItem(`saved-${id}`) === 'true';
    updateModalSaveBtn(modalSaveBtn, isSaved);
    
    modalSaveBtn.onclick = () => {
        toggleSave(id, null); 
        const newState = localStorage.getItem(`saved-${id}`) === 'true';
        updateModalSaveBtn(modalSaveBtn, newState);
        renderPins(curatedPins); 
    };

    const commentList = document.getElementById('commentList');
    commentList.innerHTML = '';
    const randomComments = commentsData.sort(() => 0.5 - Math.random()).slice(0, 3);
    randomComments.forEach(c => {
        const div = document.createElement('div');
        div.className = 'comment-item';
        div.innerHTML = `<strong>${c.user}</strong> ${c.text}`;
        commentList.appendChild(div);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalSaveBtn(btn, isSaved) {
    if (isSaved) { btn.innerText = "Saved to Profile"; btn.classList.add('saved'); } 
    else { btn.innerText = "Save"; btn.classList.remove('saved'); }
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modal.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.modal-card')) return;
    if (e.target === modal) closeModal();
});

// --- FITUR PROFILE & ABOUT (FIXED) ---

// 1. Fungsi Buka Profile
function openProfile() {
    const profileModal = document.getElementById('profileModal');
    const profileGrid = document.getElementById('profileGrid');
    const savedCount = document.getElementById('savedCount');
    
    // Bersihkan grid lama
    profileGrid.innerHTML = '';
    
    // Cari gambar mana saja yang sudah di-save
    const savedPins = curatedPins.filter(pin => 
        localStorage.getItem(`saved-${pin.id}`) === 'true'
    );
    
    // Update angka statistik
    savedCount.innerHTML = `<strong>${savedPins.length}</strong> Saved`;

    // Jika ada yang disimpan, tampilkan
    if (savedPins.length > 0) {
        savedPins.forEach(pin => {
            const img = document.createElement('img');
            img.src = pin.img;
            img.onclick = () => {
                closeProfile(); // Tutup profil dulu
                openModal(pin.id); // Buka detail gambar
            };
            profileGrid.appendChild(img);
        });
    } else {
        // Jika belum ada yang disimpan
        profileGrid.innerHTML = `
            <div class="empty-state">
                <i class="ri-heart-add-line" style="font-size: 30px; margin-bottom:10px; display:block;"></i>
                Belum ada koleksi yang disimpan. <br> Klik 'Save' pada gambar yang kamu suka!
            </div>
        `;
    }

    profileModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProfile() {
    document.getElementById('profileModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// 2. Fungsi Buka About
function openAbout() {
    document.getElementById('aboutModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAbout() {
    document.getElementById('aboutModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Menutup modal jika klik di luar area (Overlay)
window.addEventListener('click', (e) => {
    const profileModal = document.getElementById('profileModal');
    const aboutModal = document.getElementById('aboutModal');

    if (e.target === profileModal) closeProfile();
    if (e.target === aboutModal) closeAbout();
});

// Load More (Simulasi)
document.getElementById('loadMoreBtn').addEventListener('click', function() {
    const btn = this;
    btn.innerText = "Finding Inspiration...";
    setTimeout(() => {
        btn.innerText = "All Images Loaded";
        btn.style.opacity = "0.5";
        btn.style.pointerEvents = "none";
    }, 1500);
});