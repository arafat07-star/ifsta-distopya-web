<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <title>İFSAT Cumhuriyeti</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        sans-serif;
      background: radial-gradient(circle at top, #020617, #000000 60%);
      color: #e5e7eb;
      min-height: 100vh;
      position: relative;
      overflow-x: hidden;
    }

    /* Neon grid arka plan overlay */
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px);
      background-size: 40px 40px, 40px 40px;
      opacity: 0.7;
      pointer-events: none;
      z-index: -2;
    }
    body::after {
      content: "";
      position: fixed;
      inset: -100px;
      background: radial-gradient(circle at 20% 0%, rgba(56, 189, 248, 0.18), transparent 55%),
                  radial-gradient(circle at 80% 100%, rgba(244, 63, 94, 0.18), transparent 55%);
      filter: blur(4px);
      z-index: -1;
      pointer-events: none;
      animation: glowShift 18s infinite alternate;
    }
    @keyframes glowShift {
      0% { transform: translate3d(0,0,0); }
      100% { transform: translate3d(-40px, 30px, 0); }
    }

    /* ÜST MENÜ */

    .top-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(16px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      z-index: 100;
      border-bottom: 1px solid rgba(129, 140, 248, 0.6);
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
    }
    .logo {
      font-weight: 800;
      letter-spacing: 0.16em;
      font-size: 14px;
      color: #a5b4fc;
      text-shadow: 0 0 8px rgba(129, 140, 248, 0.9);
    }
    .top-nav nav a {
      margin-left: 16px;
      text-decoration: none;
      font-size: 13px;
      color: #e5e7eb;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .top-nav nav a:hover {
      opacity: 1;
      text-shadow: 0 0 8px rgba(56, 189, 248, 0.9);
    }

    /* BÖLÜMLER */

    .section {
      padding: 100px 16px 72px;
      max-width: 1100px;
      margin: 0 auto;
    }
    .section h2 {
      font-size: 28px;
      margin-bottom: 16px;
      text-shadow: 0 0 10px rgba(96, 165, 250, 0.9);
    }
    .section p {
      line-height: 1.6;
      margin-bottom: 16px;
      color: #e5e7eb;
    }

    /* HERO */

    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: relative;
    }
    .hero-content h1 {
      font-size: 42px;
      letter-spacing: 0.26em;
      margin-bottom: 12px;
      text-transform: uppercase;
      text-shadow:
        0 0 8px rgba(129, 140, 248, 0.8),
        0 0 18px rgba(56, 189, 248, 0.9);
    }
    .hero-content p {
      font-size: 16px;
      margin-bottom: 24px;
      color: #a5b4fc;
    }
    #explore-btn {
      padding: 10px 24px;
      border-radius: 999px;
      border: 1px solid #22d3ee;
      background: rgba(15, 23, 42, 0.9);
      color: #e5e7eb;
      cursor: pointer;
      font-size: 14px;
      box-shadow: 0 0 14px rgba(34, 211, 238, 0.9);
    }
    #explore-btn:hover {
      background: linear-gradient(90deg, #22d3ee, #6366f1);
      box-shadow:
        0 0 12px rgba(56, 189, 248, 0.9),
        0 0 24px rgba(88, 28, 135, 0.8);
    }
    .hero-glitch {
      position: absolute;
      bottom: 80px;
      font-size: 12px;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      opacity: 0.6;
      animation: flicker 2.5s infinite;
      color: #f97316;
      text-shadow:
        -2px 0 rgba(56, 189, 248, 0.8),
        2px 0 rgba(244, 63, 94, 0.8);
    }
    @keyframes flicker {
      0%, 100% { opacity: 0.3; transform: translateX(0); }
      20% { opacity: 0.9; transform: translateX(1px); }
      40% { opacity: 0.4; transform: translateX(-1px); }
      60% { opacity: 0.8; transform: translateX(1px); }
      80% { opacity: 0.5; transform: translateX(-1px); }
    }

    /* KARTLAR */

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-top: 12px;
    }
    .card {
      background: radial-gradient(circle at top left, rgba(56, 189, 248, 0.12), rgba(15, 23, 42, 0.95));
      border-radius: 14px;
      padding: 16px;
      border: 1px solid rgba(129, 140, 248, 0.5);
      box-shadow: 0 0 0 1px rgba(15, 23, 42, 0.6);
      transition: transform 0.18s ease, box-shadow 0.18s ease,
        border-color 0.18s ease;
    }
    .card h3 {
      margin-bottom: 8px;
      font-size: 18px;
      color: #e0f2fe;
    }
    .card p {
      font-size: 14px;
      color: #d1d5db;
    }
    .card:hover {
      transform: translateY(-4px);
      border-color: #22d3ee;
      box-shadow:
        0 10px 26px rgba(15, 23, 42, 0.9),
        0 0 18px rgba(56, 189, 248, 0.8);
    }

    /* KOYU BÖLÜM */

    .section.dark {
      background: rgba(15, 23, 42, 0.82);
      border-radius: 24px;
      margin-top: 32px;
      margin-bottom: 32px;
      border: 1px solid rgba(129, 140, 248, 0.45);
      box-shadow: 0 0 24px rgba(30, 64, 175, 0.6);
    }

    .manifesto-list {
      display: grid;
      gap: 12px;
      margin-top: 12px;
    }
    .manifesto-item {
      padding: 12px 14px;
      border-radius: 10px;
      border: 1px dashed rgba(148, 163, 184, 0.7);
      background: rgba(15, 23, 42, 0.95);
    }
    .manifesto-item h3 {
      font-size: 16px;
      margin-bottom: 4px;
      color: #bfdbfe;
    }

    /* SÖZLÜK */

    #search-input {
      width: 100%;
      padding: 10px 12px;
      margin: 8px 0 16px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.5);
      background: rgba(15, 23, 42, 0.9);
      color: #e5e7eb;
      box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
    }
    .glossary {
      display: grid;
      gap: 10px;
    }
    .term {
      padding: 10px 12px;
      border-radius: 10px;
      border: 1px solid rgba(148, 163, 184, 0.4);
      background: rgba(15, 23, 42, 0.95);
    }
    .term h3 {
      font-size: 15px;
      margin-bottom: 4px;
      color: #e5e7eb;
    }

    /* SKOR TABLOSU */

    .score-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 16px;
      font-size: 13px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      border-radius: 999px;
      font-size: 12px;
      border: 1px solid rgba(148, 163, 184, 0.7);
      background: rgba(15, 23, 42, 0.9);
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
    }
    .dot.green { background: #22c55e; box-shadow: 0 0 10px rgba(34, 197, 94, 0.9); }
    .dot.yellow { background: #eab308; box-shadow: 0 0 10px rgba(234, 179, 8, 0.9); }
    .dot.red { background: #ef4444; box-shadow: 0 0 10px rgba(239, 68, 68, 0.9); }

    .score-table-wrapper {
      margin-top: 10px;
      overflow-x: auto;
      border-radius: 14px;
      border: 1px solid rgba(148, 163, 184, 0.5);
      box-shadow:
        0 0 18px rgba(30, 64, 175, 0.9),
        0 0 20px rgba(236, 72, 153, 0.5);
    }
    .score-table {
      width: 100%;
      border-collapse: collapse;
      background: rgba(15, 23, 42, 0.96);
    }
    .score-table thead {
      background: linear-gradient(90deg, rgba(56, 189, 248, 0.4), rgba(129, 140, 248, 0.5));
    }
    .score-table th,
    .score-table td {
      padding: 10px 12px;
      font-size: 13px;
      text-align: left;
      border-bottom: 1px solid rgba(31, 41, 55, 0.9);
    }
    .score-table th {
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 11px;
      color: #e0f2fe;
    }

    .zone-green {
      background: linear-gradient(to right, rgba(34, 197, 94, 0.18), transparent);
      color: #dcfce7;
    }
    .zone-yellow {
      background: linear-gradient(to right, rgba(234, 179, 8, 0.18), transparent);
      color: #fef9c3;
    }
    .zone-red {
      background: linear-gradient(to right, rgba(239, 68, 68, 0.2), transparent);
      color: #fee2e2;
    }
    .score-chip {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 12px;
      border: 1px solid rgba(148, 163, 184, 0.7);
      background: rgba(15, 23, 42, 0.9);
    }

    .footer {
      text-align: center;
      padding: 24px 16px 40px;
      font-size: 12px;
      opacity: 0.6;
    }

    @media (max-width: 640px) {
      .hero-content h1 {
        font-size: 30px;
        letter-spacing: 0.18em;
      }
      .top-nav nav a {
        font-size: 11px;
        margin-left: 10px;
      }
    }
  </style>
</head>
<body>
  <header class="top-nav">
    <div class="logo">İFSAT</div>
    <nav>
      <a href="#hero">Giriş</a>
      <a href="#world">Dünya</a>
      <a href="#scores">Skorlar</a>
      <a href="#characters">Karakterler</a>
      <a href="#institutions">Kurumlar</a>
      <a href="#manifesto">Manifesto</a>
      <a href="#glossary">Sözlük</a>
    </nav>
  </header>

  <!-- HERO -->
  <section id="hero" class="section hero">
    <div class="hero-content">
      <h1>İFSAT CUMHURİYETİ</h1>
      <p>Gerçeğe değil, onun güncellenmiş sürümüne inan.</p>
      <button id="explore-btn">Distopyayı Keşfet</button>
    </div>
    <div class="hero-glitch">2040 // VERİ ÇAĞI</div>
  </section>

  <!-- DÜNYA -->
  <section id="world" class="section">
    <h2>İfsat Dünyası</h2>
    <p>
      21. yüzyılın sonunda bilgi, gerçeği koruyan bir şey olmaktan çıkıp,
      sistemin duygusal uyumu için yeniden yazılan bir veriye dönüştü.
      Gerçeklik Bakanlığı, insanların görebileceği her şeyi filtreliyor;
      İfsat Skoru düşük olanlar ise sessizce toplumsal arınmaya gönderiliyor.
    </p>
    <div class="cards">
      <article class="card">
        <h3>Gerçeklik Filtreleri</h3>
        <p>
          Her vatandaşın haber akışı, duygusal olarak “uygun” hale getirilir.
          Rahatsız edici gerçekler silinir, yerini huzurlu yalanlar alır.
        </p>
      </article>
      <article class="card">
        <h3>İfsat Skoru</h3>
        <p>
          0–100 arası bir uyum puanı. 70’in altı tehlikelidir.
          Düşük skor, ya görünmez olmak ya da yok edilmek demektir.
        </p>
      </article>
      <article class="card">
        <h3>Dijital Hapishane Şehirler</h3>
        <p>
          Neon kubbeler, sonsuz veri yağmuru, her köşede gözetim dronları
          ve dev ekranlarda bakanlığın manifestoları.
        </p>
      </article>
    </div>
  </section>

  <!-- İFSAT SKOR PANOSU -->
  <section id="scores" class="section dark">
    <h2>İfsat Skor Panosu</h2>
    <p>
      Aşağıdaki tabloda örnek vatandaşların İfsat Skorları, risk bölgeleri ve
      sistemin onlar hakkında verdiği kararlar gösterilir.
    </p>

    <div class="score-legend">
      <span class="badge">
        <span class="dot.green dot"></span>
        80–100: Yeşil Bölge (Tam Uyum)
      </span>
      <span class="badge">
        <span class="dot yellow"></span>
        50–79: Sarı Bölge (İzleme)
      </span>
      <span class="badge">
        <span class="dot red"></span>
        0–49: Kırmızı Bölge (Arınma / Silme)
      </span>
    </div>

    <div class="score-table-wrapper">
      <table class="score-table">
        <thead>
          <tr>
            <th>Vatandaş ID</th>
            <th>Şehir</th>
            <th>İfsat Skoru</th>
            <th>Bölge</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          <tr class="zone-green">
            <td>#AF-2040</td>
            <td>Kubbe 03</td>
            <td><span class="score-chip">92</span></td>
            <td>Yeşil</td>
            <td>Örnek Vatandaş, içerik üretimi teşvik ediliyor.</td>
          </tr>
          <tr class="zone-yellow">
            <td>#BZ-771</td>
            <td>Alt Katman 12</td>
            <td><span class="score-chip">68</span></td>
            <td>Sarı</td>
            <td>Gözetim listesinde, haber akışı yeniden düzenleniyor.</td>
          </tr>
          <tr class="zone-red">
            <td>#ZX-009</td>
            <td>Perifer Bölge</td>
            <td><span class="score-chip">41</span></td>
            <td>Kırmızı</td>
            <td>Hafıza Arıtma Merkezi için davet gönderildi.</td>
          </tr>
          <tr class="zone-red">
            <td>#SH-666</td>
            <td>Veri Yeraltı Ağı</td>
            <td><span class="score-chip">23</span></td>
            <td>Kırmızı</td>
            <td>Sistem dışı içerik yaydığı için “Mürekkepçi” şüphesi.</td>
          </tr>
          <tr class="zone-yellow">
            <td>#ZF-013</td>
            <td>Eski Merkez</td>
            <td><span class="score-chip">57</span></td>
            <td>Sarı</td>
            <td>Raporlanmış anomaliler var, ek sorgulama planlanıyor.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- KARAKTERLER -->
  <section id="characters" class="section dark">
    <h2>Karakterler</h2>
    <div class="cards">
      <article class="card">
        <h3>Zafir – Bozuk Gözlü Dedektif</h3>
        <p>
          Eskiden Gerçeklik Bakanlığı’nın siber suçlar biriminde çalışıyordu.
          Bozuk Göz sendromu sayesinde filtrelerin arkasındaki hakikati ve
          veri iblislerini görebiliyor.
        </p>
      </article>
      <article class="card">
        <h3>Şahbaz – Kaçak Mühendis</h3>
        <p>
          Gerçeklik Filtreleri’nin ilk sürümünü yazan eski mühendis.
          Sistem çürüyünce yeraltına kaçtı. Zafir’e, her şeyi değiştirebilecek
          “Truth.exe” kodunu veriyor.
        </p>
      </article>
      <article class="card">
        <h3>Veri İblisleri</h3>
        <p>
          Yalan, Gözetim, Takıntı ve Sansür. İnsanların nefretinden,
          korkularından ve paylaştıkları yanlış bilgilerden doğan
          dijital varlıklar.
        </p>
      </article>
    </div>
  </section>

  <!-- KURUMLAR -->
  <section id="institutions" class="section">
    <h2>İfsat Cumhuriyeti Kurumları</h2>
    <div class="cards">
      <article class="card">
        <h3>Gerçeklik Bakanlığı</h3>
        <p>
          Bilgi akışını, tarih kayıtlarını ve kültürel verileri kontrol eder.
          Her sabah “Gerçeklik Güncellemesi” paketini bilinç çiplerine yükler.
        </p>
      </article>
      <article class="card">
        <h3>Etik Veri Kurulu</h3>
        <p>
          Vatandaşların davranışlarını, duygularını ve paylaşımlarını analiz eder.
          Herkese bir İfsat Skoru verir ve toplumsal arınma programlarını yönetir.
        </p>
      </article>
      <article class="card">
        <h3>Veri Mezhebi</h3>
        <p>
          Teknolojiyi kutsallaştıran dini yapı. Günahları etik hata,
          arınmayı sistem güncellemesi olarak yorumlar; ruh formatını uygular.
        </p>
      </article>
      <article class="card">
        <h3>Hafıza Arıtma Merkezleri</h3>
        <p>
          Düşük skorlu bireylerin hatıralarını siler, duygularını bastırır.
          Çıkan kişiye “Yeni Sürüm Vatandaş” denir.
        </p>
      </article>
    </div>
  </section>

  <!-- MANİFESTO -->
  <section id="manifesto" class="section dark">
    <h2>İfsat Cumhuriyeti Manifestosu</h2>
    <div class="manifesto-list">
      <div class="manifesto-item">
        <h3>Madde 1 – Hakikatin Mülkiyeti</h3>
        <p>
          Gerçek, bireylerin değil devletin ortak mülküdür. Kişisel doğrular,
          kamu düzenine aykırı dijital tehdit olarak kabul edilir.
        </p>
      </div>
      <div class="manifesto-item">
        <h3>Madde 3 – Dijital Ahlak</h3>
        <p>
          Vatandaşların gülmesi, susması, neyi paylaştığı puanlanır.
          İfsat skoru 70’in altına düşenler arınma programına alınır.
        </p>
      </div>
      <div class="manifesto-item">
        <h3>Madde 6 – Gerçeklik Güncellemeleri</h3>
        <p>
          Gerçek, her gün sistem tarafından yeniden yazılır.
          Dünün doğrusu, bugünün tehlikesi sayılabilir.
        </p>
      </div>
    </div>
  </section>

  <!-- SÖZLÜK -->
  <section id="glossary" class="section">
    <h2>İfsat Sözlüğü</h2>
    <input
      type="text"
      id="search-input"
      placeholder="Terim ara… (örn: BozGöz, Gerçekpak)"
    />
    <div id="glossary-list" class="glossary">
      <div class="term" data-term="ifsat skoru">
        <h3>İfsat Skoru</h3>
        <p>
          Vatandaşların devlete uyumunu gösteren puan. 70’in altı tehlikeli,
          sessizleştirilme veya arınma riski taşır.
        </p>
      </div>
      <div class="term" data-term="gerçekpak">
        <h3>Gerçekpak</h3>
        <p>
          Her sabah bilinç çiplerine yüklenen “güncel gerçek” paketi.
          Eski fikirler silinir, yerlerine yeni sürümler konur.
        </p>
      </div>
      <div class="term" data-term="bozgöz">
        <h3>BozGöz (Bozuk Göz Sendromu)</h3>
        <p>
          Filtrelerin sakladığı çıplak gerçeği ve veri iblislerini görebilme hâli.
          Zafir bu sendroma sahip olduğu için sistemi fark edebiliyor.
        </p>
      </div>
      <div class="term" data-term="ruhformat">
        <h3>Ruhformat</h3>
        <p>
          Hafıza ve duyguları silip bireyi uyumlu hâle getiren arınma işlemi.
        </p>
      </div>
      <div class="term" data-term="mürekkepçi">
        <h3>Mürekkepçi</h3>
        <p>
          Gerçeği dijital değil, kâğıtla yayan yeraltı yazarı. Sistem onların
          metinlerini okuyamaz.
        </p>
      </div>
    </div>
  </section>

  <footer class="footer">
    <p>İFSAT Evreni – Distopik Web Deneyimi</p>
  </footer>

  <script>
    // "Keşfet" butonuna basınca dünyaya kaydır
    const exploreBtn = document.getElementById("explore-btn");
    const worldSection = document.getElementById("world");
    if (exploreBtn && worldSection) {
      exploreBtn.addEventListener("click", () => {
        worldSection.scrollIntoView({ behavior: "smooth" });
      });
    }

    // Menüdeki linkler için smooth scroll
    document.querySelectorAll('header nav a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Sözlük arama
    const searchInput = document.getElementById("search-input");
    const terms = document.querySelectorAll(".term");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const q = searchInput.value.toLowerCase();
        terms.forEach((term) => {
          const text =
            term.dataset.term.toLowerCase() +
            " " +
            term.innerText.toLowerCase();
          term.style.display = text.includes(q) ? "block" : "none";
        });
      });
    }
  </script>
</body>
</html>
