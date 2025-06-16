'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    // hero parallax effect
    const onScroll = () => {
      const scrolled = window.pageYOffset;
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollMenu = (amount) => {
    const container = document.getElementById('menuContainer');
    if (container) {
      container.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-subtitle">和と韓の融合</div>
          <h1 className="hero-title">KORIAN</h1>
          <p className="hero-description">
            — 本場の韓国料理。
            <br />
            MSG不使用・身体に優しい —
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">Instagramを見る</a>
            <a href="#" className="btn btn-secondary">予約はこちら</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div style={{ fontSize: '2rem' }}>↓</div>
          <div style={{ fontSize: '0.9rem' }}>スクロール</div>
        </div>
      </section>

      {/* About Section */}
      <section className="about fade-in">
        <div className="container">
          <h2 className="section-title">大人の隠れ家で味わう大切なひと時</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                私たち<span className="highlight">&quot;KORIAN&quot;</span>は、日本にあっても
                <strong>&quot;本物の韓国料理&quot;</strong>を提供します。
              </p>
              <p>
                化学調味料（MSG）は一切使用せず、厳選された旬の食材だけを使って、
                身体にも心にも優しい料理をお届けしています。
              </p>
              <p>
                料理長は韓国出身。
                <br />
                本場の技と心を、日本のお客様へ。
                <br />
                ここでしか味わえない<span className="highlight">&quot;リアル韓国の味&quot;</span>
                をご堪能ください。
              </p>
            </div>
            <div className="about-image">
              <div>本場の技と心を込めて</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu fade-in">
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>代表料理</h2>
          <div className="menu-carousel">
            <button className="scroll-indicator-left" onClick={() => scrollMenu(-340)}>‹</button>
            <button className="scroll-indicator-right" onClick={() => scrollMenu(340)}>›</button>
            <div className="menu-container" id="menuContainer">
              <div className="menu-grid">
                {[
                  ['石焼ビビンバ', '한식의 대표 주자！고소한 참기름 향과 푸짐한 채소、무첨가 양념으로 건강하게 완성。'],
                  ['チヂミ（海鮮＆ネギ）', '外はカリッ、中はもちもち。たまご不使用で素材そのものの味を活かしました。'],
                  ['スンドゥブチゲ', '豆腐の旨みと香ばしさに、コクのあるスープ。化学調味料なしでも深い味わいです。'],
                  ['トッポッキ', '韓国屋台の定番。甘辛ソースも手作りで、安心して食べられます。'],
                  ['キムチチゲ', '発酵の旨みが凝縮された本格キムチを使用。深いコクと辛さのバランスが絶妙です。'],
                  ['プルコギ', '特製タレに漬け込んだ牛肉を丁寧に焼き上げました。甘辛い味付けが食欲をそそります。'],
                ].map(([title, desc]) => (
                  <div className="menu-item" key={title}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="scroll-hint">
              <span className="scroll-hint-icon">→</span>
              <span>スワイプしてメニューをご覧ください</span>
            </div>
          </div>
          <div className="menu-btn">
            <a href="#" className="btn btn-primary">全メニューを見る</a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values fade-in">
        <div className="container">
          <div className="values-content">
            <h2>なぜ化学調味料を使わないのか？</h2>
            <p>
              KORIANでは、食材そのものの美味しさを尊重し、
              <br />
              身体に負担をかけない調理法を選びました。
              <br />
              毎日でも通いたくなる<span>&quot;安心・健康・本物&quot;</span>の韓国料理を、
              <br />
              日本で楽しんでいただきたいからです。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>KORIAN</h3>
          <p>〒000-0000 大阪府大阪市○○区○○</p>
          <p>TEL: 06-0000-0000</p>
          <p>営業時間: 17:00 - 23:00（月曜定休）</p>
          <br />
          <p style={{ opacity: '0.6' }}>© 2025 KORIAN. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function scrollMenu(amount) {
  const container = document.getElementById('menuContainer');
  if (container) {
    container.scrollBy({ left: amount, behavior: 'smooth' });
  }
}