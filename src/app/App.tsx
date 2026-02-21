import { useState, useEffect, useCallback } from "react";
import newScreen1 from "figma:asset/0d74e763d1004077c7b70046a0d291805d5e6da5.png";
import newScreen2 from "figma:asset/554a4e4e21ece1bc446352c52ef4fc9e229d57c7.png";
import newScreen3 from "figma:asset/82a1c1442e9c3ce01e025e0a0c00772c155a44c4.png";
import newScreen4 from "figma:asset/0e3d48f7713dcb3340f31ca4ea08857acc6e18ae.png";
import newScreen5 from "figma:asset/f2256d4925c1006d16ad820b7443e1993e94ce92.png";
import newScreen6 from "figma:asset/caa726a39e154faae3476df6e143c851506927e9.png";
import newScreen7 from "figma:asset/d1597967c507a282d07ac2da812971a1e1bd275b.png";
import newScreen8 from "figma:asset/a2e9d23c2872cd909ffd431f6504ab8ebabb8b69.png";
import solutionPhone from "figma:asset/e8069d625fa5fe1a2c51f40d7dca6c43c595d14b.png";
import allScreens from "figma:asset/9a5d466dde09a01f53062d829277d6fece4224b0.png";
import loginScreen from "figma:asset/2d55a037cba1ab95bc1d9c0141205a7c3140df40.png";
import aiAnalysisScreen from "figma:asset/f33c5ab6756e8e9b1afc3834ed3a68e3cb199333.png";
import healthProfileScreen from "figma:asset/dee2dad0ebb406afbd4ff8b33b707f8a69261846.png";
import aiAssistantScreen from "figma:asset/70379806bef159f54567ff014d7553ec23375cce.png";
import profileScreen from "figma:asset/a6196ce0a614243dde8f6b8fc5600ff11ba3fc59.png";
import productDetailScreen from "figma:asset/f9e69285c4f26658a60bf01b9bbef16683b1d40b.png";
import homeScreen from "figma:asset/09c39431d71bbe54c27d1adfb1cb2833a5c93bc4.png";

// ─── Palet ───────────────────────────────────────────────
const C = {
  white:   "#FFFFFF",
  light:   "#F3F3F3",
  green:   "#65BC86",   // ana vurgu
  midGreen:"#52996B",   // ikincil
  teal:    "#297074",   // orta arka plan
  dark:    "#005267",   // en koyu arka plan
};

function FoyasLogo({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="27" stroke={C.green} strokeWidth="2" />
      <polygon points="28,8 48,20 48,36 28,48 8,36 8,20" stroke={C.green} strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="16" y="16" width="24" height="24" rx="4" stroke={C.green} strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="28" cy="28" r="6" fill={C.dark} stroke={C.green} strokeWidth="1.5" />
      <path d="M28 25 C28 25 25 28 28 31 C31 28 28 25 28 25Z" fill={C.green} />
      <circle cx="8"  cy="20" r="2" fill={C.green} />
      <circle cx="48" cy="20" r="2" fill={C.green} />
      <circle cx="48" cy="36" r="2" fill={C.green} />
      <circle cx="8"  cy="36" r="2" fill={C.green} />
      <circle cx="28" cy="8"  r="2" fill={C.green} />
      <circle cx="28" cy="48" r="2" fill={C.green} />
      <line x1="8"  y1="20" x2="28" y2="8"  stroke={C.green} strokeWidth="0.8" opacity="0.45" />
      <line x1="28" y1="8"  x2="48" y2="20" stroke={C.green} strokeWidth="0.8" opacity="0.45" />
      <line x1="48" y1="20" x2="48" y2="36" stroke={C.green} strokeWidth="0.8" opacity="0.45" />
      <line x1="48" y1="36" x2="28" y2="48" stroke={C.green} strokeWidth="0.8" opacity="0.45" />
      <line x1="28" y1="48" x2="8"  y2="36" stroke={C.green} strokeWidth="0.8" opacity="0.45" />
      <line x1="8"  y1="36" x2="8"  y2="20" stroke={C.green} strokeWidth="0.8" opacity="0.45" />
    </svg>
  );
}

function SlideWrapper({ children, active }: { children: React.ReactNode; active: boolean }) {
  return (
    <div
      className="absolute inset-0 transition-all duration-700"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "scale(1) translateY(0)" : "scale(0.97) translateY(18px)",
        pointerEvents: active ? "auto" : "none",
        zIndex: active ? 10 : 0,
      }}
    >
      {children}
    </div>
  );
}

// ── Badge & Section Label helpers ──���───────────────────────
function SlideLabel({ num, text }: { num: string; text: string }) {
  return (
    <span style={{ color: C.green, fontSize: "0.82rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
      {num} / {text}
    </span>
  );
}

// ── Phone Mockup ────────────────────────────────────────────
function PhoneMockup({ src }: { src: string }) {
  // Dimensions: frame 220×440, screen inside
  const fw = 220;
  const fh = 440;
  const border = 10;
  const radius = 38;

  return (
    <div style={{ position: "relative", width: fw, height: fh, flexShrink: 0, filter: "drop-shadow(0 24px 56px rgba(0,0,0,0.65)) drop-shadow(0 0 40px rgba(101,188,134,0.18))" }}>

      {/* ── Outer frame ── */}
      <div style={{
        position: "absolute", inset: 0,
        borderRadius: radius,
        background: "linear-gradient(160deg, #1a1a1a 0%, #2d2d2d 40%, #111 100%)",
        boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,0.08), inset 0 2px 4px rgba(255,255,255,0.05)",
      }} />

      {/* ── Screen area ── */}
      <div style={{
        position: "absolute",
        top: border, left: border,
        right: border, bottom: border,
        borderRadius: radius - border + 2,
        overflow: "hidden",
        background: "#000",
      }}>
        <img
          src={src}
          alt="FOYAS ekran"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
          }}
        />
      </div>

      {/* ── Dynamic Island ── */}
      <div style={{
        position: "absolute",
        top: border + 10,
        left: "50%", transform: "translateX(-50%)",
        width: 72, height: 22,
        background: "#0a0a0a",
        borderRadius: 12,
        zIndex: 10,
        boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
        display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 7, gap: 4
      }}>
        {/* camera dot */}
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#1a1a1a", border: "1.5px solid rgba(255,255,255,0.12)" }} />
      </div>

      {/* ── Home bar ── */}
      <div style={{
        position: "absolute",
        bottom: border + 6,
        left: "50%", transform: "translateX(-50%)",
        width: 60, height: 4,
        background: "rgba(255,255,255,0.35)",
        borderRadius: 3,
        zIndex: 10,
      }} />

      {/* ── Left side buttons (volume) ── */}
      {[62, 98].map((top, i) => (
        <div key={i} style={{
          position: "absolute",
          left: -4, top,
          width: 4, height: 28,
          background: "linear-gradient(180deg, #2a2a2a, #1a1a1a)",
          borderRadius: "3px 0 0 3px",
          boxShadow: "-1px 0 2px rgba(0,0,0,0.5)",
        }} />
      ))}

      {/* ── Right side button (power) ── */}
      <div style={{
        position: "absolute",
        right: -4, top: 90,
        width: 4, height: 50,
        background: "linear-gradient(180deg, #2a2a2a, #1a1a1a)",
        borderRadius: "0 3px 3px 0",
        boxShadow: "1px 0 2px rgba(0,0,0,0.5)",
      }} />

      {/* ── Frame shine overlay ── */}
      <div style={{
        position: "absolute", inset: 0,
        borderRadius: radius,
        background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Slide 1 — Cover
// ═══════════════════════════════════════════════════════════
function CoverSlide() {
  return (
    <div
      className="size-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: `radial-gradient(ellipse at 55% 35%, ${C.teal} 0%, ${C.dark} 60%, #002e3d 100%)` }}
    >
      {/* Decorative rings */}
      {[600, 420, 240].map((s, i) => (
        <div key={i} className="absolute pointer-events-none" style={{
          width: s, height: s,
          border: `1px solid rgba(101,188,134,${0.06 + i * 0.05})`,
          borderRadius: "50%", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)"
        }} />
      ))}
      {/* Floating particles */}
      {[...Array(14)].map((_, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none" style={{
          width: (i % 3) + 2, height: (i % 3) + 2,
          background: `rgba(101,188,134,${0.3 + (i % 3) * 0.1})`,
          top: `${12 + Math.sin(i * 2.1) * 38 + 38}%`,
          left: `${12 + Math.cos(i * 1.7) * 40 + 38}%`,
        }} />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-8">
        <FoyasLogo size={108} />
        <div className="flex flex-col items-center gap-3">
          <h1 style={{ color: C.white, fontSize: "clamp(2.6rem,6vw,5.2rem)", fontWeight: 800, letterSpacing: "0.35em", margin: 0 }}>
            FO<span style={{ color: C.green }}>Y</span>AS
          </h1>
          <div style={{ width: 88, height: 2, background: `linear-gradient(90deg, transparent, ${C.green}, transparent)` }} />
          <p style={{ color: C.green, fontSize: "clamp(0.9rem,2vw,1.2rem)", letterSpacing: "0.14em", margin: 0 }}>
            Bilinçli beslenmenin adresi
          </p>
        </div>
        <div style={{
          background: "rgba(101,188,134,0.1)",
          border: `1px solid rgba(101,188,134,0.25)`,
          borderRadius: 14, padding: "14px 40px", marginTop: 12
        }}>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.78rem,1.4vw,0.95rem)", margin: 0 }}>
            Startup Sunum Dosyası · 2026
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Slide 2 — Problem
// ═══════════════════════════════════════════════════════════
function ProblemSlide() {
  const problems = [
    { title: "İçerik Okuma Zorluğu",  desc: "Tüketicilerin büyük çoğunluğu paketli gıda içeriklerini anlamakta zorlanıyor" },
    { title: "Pazarlama Yanıltması",   desc: "\"Doğal\", \"Sağlıklı\" gibi etiketler gerçeği yansıtmıyor" },
    { title: "Alerjen Riski",          desc: "Gizli alerjenler tüketici sağlığını tehdit ediyor" },
    { title: "Bilinçsiz Seçim",        desc: "Kişiselleştirilmiş beslenme tavsiyesine erişim yok" },
  ];
  return (
    <div className="size-full flex flex-col relative overflow-hidden"
      style={{ background: C.dark }}>
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="mb-9">
          <SlideLabel num="01" text="Sorun" />
          <h2 style={{ color: C.white, fontSize: "clamp(1.8rem,4vw,3.5rem)", fontWeight: 800, margin: "8px 0 0" }}>
            Tüketici <span style={{ color: C.green }}>Ne Yediğini</span><br />Bilmiyor
          </h2>
          <p style={{ color: "rgba(243,243,243,0.6)", fontSize: "clamp(0.85rem,1.5vw,1.05rem)", maxWidth: 600, marginTop: 12, lineHeight: 1.65 }}>
            Paketli gıda tüketimi her geçen yıl artarken, tüketiciler ürün içerikleri hakkında yeterli bilgiye sahip deil.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ maxWidth: 860 }}>
          {problems.map((p, i) => (
            <div key={i} style={{
              background: "rgba(101,188,134,0.07)",
              border: `1px solid rgba(101,188,134,0.2)`,
              borderRadius: 16, padding: "18px 22px",
              display: "flex", gap: 14, alignItems: "flex-start",
            }}>
              <div>
                <h3 style={{ color: C.white, fontWeight: 700, fontSize: "clamp(0.88rem,1.4vw,1rem)", margin: 0 }}>{p.title}</h3>
                <p style={{ color: "rgba(243,243,243,0.52)", fontSize: "clamp(0.74rem,1.1vw,0.88rem)", marginTop: 4 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Slide 3 — Solution
// ═══════════════════════════════════════════════════════════
function SolutionSlide() {
  const aiFeatures = [
    { text: "Profil bazlı ürün uyum skoru üretir" },
    { text: "Sağlık durumuna göre risk uyarısı verir" },
    { text: "Daha sağlıklı alternatif ürünler önerir" },
    { text: "Beslenme sorularını anlık yanıtlar" },
  ];
  return (
    <div className="size-full flex flex-col relative overflow-hidden"
      style={{ background: `linear-gradient(158deg, ${C.dark} 0%, #004558 45%, ${C.teal} 100%)` }}>
      <div className="flex-1 flex items-center px-8 md:px-16 lg:px-24 py-10 gap-12">
        {/* Left content */}
        <div className="flex-1 flex flex-col gap-5">
          <div>
            <SlideLabel num="02" text="Çözüm" />
            <h2 style={{ color: C.white, fontSize: "clamp(1.5rem,3.2vw,2.6rem)", fontWeight: 800, margin: "8px 0 0", lineHeight: 1.25 }}>
              <span style={{ color: C.green }}>FOYAS</span> ile Her Ürün<br />İçeriğini Öğren
            </h2>
            <p style={{ color: "rgba(243,243,243,0.6)", fontSize: "clamp(0.82rem,1.3vw,1rem)", maxWidth: 500, marginTop: 10, lineHeight: 1.7 }}>
              Barkod okutma özelliğiyle ürünün içerik analizini saniyeler içinde gerçekleştirir; katkı maddelerini ve alerjenleri sade bir dille açıklar, anlaşılır bir kalite puanı sunar.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-3" style={{ maxWidth: 460 }}>
            {[
              { step: "01", text: "Barkodu kameraya göster" },
              { step: "02", text: "Anlık içerik & kalite analizi al" },
              { step: "03", text: "AI destekli kişisel öneri gör" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "rgba(101,188,134,0.18)",
                  border: `2px solid ${C.green}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: C.green, fontWeight: 800, fontSize: "0.75rem", flexShrink: 0
                }}>{s.step}</div>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, rgba(101,188,134,0.4), transparent)` }} />
                <div style={{
                  background: "rgba(101,188,134,0.09)",
                  border: `1px solid rgba(101,188,134,0.22)`,
                  borderRadius: 10, padding: "9px 16px",
                  color: C.white, fontSize: "clamp(0.78rem,1.1vw,0.9rem)", flex: 2
                }}>{s.text}</div>
              </div>
            ))}
          </div>

          {/* AI section */}
          <div style={{
            background: "rgba(101,188,134,0.08)",
            border: `1px solid rgba(101,188,134,0.25)`,
            borderRadius: 16, padding: "16px 20px",
            maxWidth: 460
          }}>
            <div className="flex items-center gap-2 mb-3">
              <span style={{ color: C.green, fontWeight: 700, fontSize: "clamp(0.85rem,1.2vw,0.95rem)" }}>
                Yapay Zekâ Ne İşe Yarıyor?
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {aiFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.green, flexShrink: 0 }} />
                  <span style={{ color: "rgba(243,243,243,0.75)", fontSize: "clamp(0.74rem,1.05vw,0.85rem)" }}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <div style={{
              background: `linear-gradient(135deg, ${C.midGreen}, ${C.green})`,
              borderRadius: 12, padding: "11px 26px",
              color: C.white, fontWeight: 700, fontSize: "0.93rem"
            }}>Ücretsiz & Erişilebilir</div>
            <div style={{
              background: "rgba(101,188,134,0.12)",
              border: `1px solid rgba(101,188,134,0.35)`,
              borderRadius: 12, padding: "11px 26px",
              color: C.green, fontWeight: 700, fontSize: "0.93rem"
            }}>AI Destekli</div>
          </div>
        </div>

        {/* Right side - Phone mockup */}
        <div className="hidden lg:flex flex-col items-center" style={{ flexShrink: 0 }}>
          <img 
            src={homeScreen} 
            alt="FOYAS Giriş Ekranı"
            style={{
              height: "440px",
              width: "auto",
              filter: "drop-shadow(0 24px 56px rgba(0,0,0,0.65))",
              borderRadius: "6px"
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Slide 4 — Features
// ═══════════════════════════════════════════════════════════
function FeaturesSlide() {
  const features = [
    { title: "Barkod Tarama",              desc: "Barkod okutarak anlık ürün içerik analizi",                    color: C.green },
    { title: "Katkı Maddesi Analizi",      desc: "Katkı maddeleri ve E-numaraların sade açıklaması",             color: C.midGreen },
    { title: "Alerjen Uyarı Sistemi",      desc: "Gluten, laktoz, fındık vb. alerjen uyarıları",                color: "#e8c96e" },
    { title: "Kalite & Sağlık Puanı",      desc: "Anlaşılır kalite ve sağlık puanı",                            color: C.green },
    { title: "Yapay Zekâ Değerlendirmesi", desc: "Yapay zekâ destekli kişisel değerlendirme",                   color: "#8fb4d4" },
    { title: "Alternatif Ürün Önerileri",  desc: "Sağlıklı alternatif ürün önerileri",                          color: C.midGreen },
    { title: "Topluluk",                   desc: "Topluluk yorumları ve kullanıcı puanlaması",                   color: C.green },
    { title: "AI Beslenme Asistanı",       desc: "AI destekli kişisel beslenme asistanı",                       color: "#e8c96e" },
  ];
  return (
    <div className="size-full flex flex-col relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${C.dark} 0%, #004156 60%, ${C.dark} 100%)` }}>
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="mb-8">
          <SlideLabel num="03" text="Özellikler" />
          <h2 style={{ color: C.white, fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, margin: "8px 0 0" }}>
            Uygulama <span style={{ color: C.green }}>Özellikleri</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div key={i} style={{
              background: "rgba(101,188,134,0.06)",
              border: `1px solid rgba(101,188,134,0.16)`,
              borderRadius: 16, padding: "18px 16px",
              display: "flex", flexDirection: "column", gap: 10,
            }}>
              <div>
                <h3 style={{ color: C.white, fontWeight: 700, fontSize: "clamp(0.8rem,1.2vw,0.95rem)", margin: 0 }}>{f.title}</h3>
                <p style={{ color: "rgba(243,243,243,0.5)", fontSize: "clamp(0.68rem,1vw,0.78rem)", marginTop: 4 }}>{f.desc}</p>
              </div>
              <div style={{ height: 2, width: 30, background: f.color, borderRadius: 2, marginTop: "auto" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Slide 5 — Target Audience
// ═══════════════════════════════════════════════════════════
function TargetSlide() {
  const targets = [
    { age: "18–35 Yaş",   label: "Dijital Yerliler",       desc: "Mobil uygulama kullanımı yüksek, sağlıklı yaşam bilinci artan gençler" },
    { age: "Sporcular",   label: "Aktif Bireyler",         desc: "Beslenme takibi yapan, protein ve besin değeri sorgulayan spor yapanlar" },
    { age: "Diyet",       label: "Diyet Sürecindekiler",   desc: "Kalori ve içerik takibi yapan, diyetisyen desteği alan kullanıcılar" },
    { age: "Ebeveynler", label: "Bilinçli Aileler",       desc: "Çocuklarına doğal ve sağlıklı ürün seçmek isteyen ebeveynler" },
  ];
  return (
    <div className="size-full flex flex-col relative overflow-hidden"
      style={{ background: `linear-gradient(142deg, ${C.dark} 0%, #003d50 55%, ${C.dark} 100%)` }}>
      <div className="flex-1 flex gap-8 items-center px-8 md:px-16 lg:px-24 py-12">
        <div className="flex-1">
          <SlideLabel num="04" text="Hedef Kitle" />
          <h2 style={{ color: C.white, fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, margin: "8px 0 0" }}>
            Kimi <span style={{ color: C.green }}>Hedefliyoruz?</span>
          </h2>
          <p style={{ color: "rgba(243,243,243,0.55)", fontSize: "clamp(0.8rem,1.3vw,1rem)", maxWidth: 450, marginTop: 12 }}>
            16 yaş üstü, mobil uygulama kullanımı yüksek ve sağlıklı yaşam bilinci gelişmiş her tüketici.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-4" style={{ maxWidth: 520 }}>
            {targets.map((t, i) => (
              <div key={i} style={{
                background: "rgba(101,188,134,0.07)",
                border: `1px solid rgba(101,188,134,0.18)`,
                borderRadius: 14, padding: "13px 20px",
                display: "flex", gap: 14, alignItems: "center"
              }}>
                <span style={{ fontSize: "1.9rem", flexShrink: 0 }}>{t.emoji}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 style={{ color: C.white, fontWeight: 700, fontSize: "0.93rem", margin: 0 }}>{t.label}</h3>
                    <span style={{
                      background: "rgba(101,188,134,0.18)", color: C.green,
                      borderRadius: 20, padding: "2px 10px", fontSize: "0.68rem", fontWeight: 600
                    }}>{t.age}</span>
                  </div>
                  <p style={{ color: "rgba(243,243,243,0.48)", fontSize: "0.78rem", marginTop: 3 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Slide 6 — Market
// ══════════════════════════════════════════════════════════
function MarketSlide() {
  return (
    <div className="size-full flex flex-col relative overflow-hidden"
      style={{ background: `linear-gradient(138deg, ${C.dark} 0%, #004052 60%, ${C.dark} 100%)` }}>
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <SlideLabel num="05" text="Pazar" />
        <h2 style={{ color: C.white, fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, margin: "8px 0 36px" }}>
          Pazar <span style={{ color: C.green }}>Büyüklüğü</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
          {/* TAM */}
          <div style={{ flex: 1, maxWidth: 260 }}>
            <div style={{
              background: `rgba(101,188,134,0.18)`,
              border: `2px solid rgba(101,188,134,0.45)`,
              borderRadius: 20, padding: "28px 22px",
              textAlign: "center", position: "relative"
            }}>
              <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: C.green, color: C.dark, borderRadius: 20, padding: "3px 18px", fontWeight: 800, fontSize: "0.78rem", whiteSpace: "nowrap" }}>TAM</div>
              <div style={{ color: C.white, fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 800, marginTop: 8 }}>$100B+</div>
              <div style={{ color: "rgba(243,243,243,0.6)", fontSize: "0.78rem", marginTop: 6 }}>Global Dijital Sağlık & Beslenme Uygulamaları Pazarı</div>
              <div style={{ color: C.green, fontSize: "0.73rem", marginTop: 8 }}>Yıllık %15+ büyüme</div>
            </div>
          </div>
          {/* SAM */}
          <div style={{ flex: 1, maxWidth: 240 }}>
            <div style={{
              background: "rgba(101,188,134,0.1)",
              border: `1px solid rgba(101,188,134,0.3)`,
              borderRadius: 18, padding: "24px 20px",
              textAlign: "center", position: "relative"
            }}>
              <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: C.midGreen, color: C.white, borderRadius: 20, padding: "3px 18px", fontWeight: 800, fontSize: "0.78rem", whiteSpace: "nowrap" }}>SAM</div>
              <div style={{ color: C.white, fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 800, marginTop: 8 }}>$2.5B</div>
              <div style={{ color: "rgba(243,243,243,0.6)", fontSize: "0.78rem", marginTop: 6 }}>Türkiye + Yakın Çevre Beslenme Uygulamaları</div>
              <div style={{ color: C.green, fontSize: "0.73rem", marginTop: 8 }}>18–35 yaş, mobil tüketici</div>
            </div>
          </div>
          {/* SOM */}
          <div style={{ flex: 1, maxWidth: 220 }}>
            <div style={{
              background: "rgba(101,188,134,0.06)",
              border: `1px solid rgba(101,188,134,0.2)`,
              borderRadius: 16, padding: "20px 18px",
              textAlign: "center", position: "relative"
            }}>
              <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: C.teal, color: C.green, border: `1px solid ${C.green}`, borderRadius: 20, padding: "3px 18px", fontWeight: 800, fontSize: "0.78rem", whiteSpace: "nowrap" }}>SOM</div>
              <div style={{ color: C.white, fontSize: "clamp(1.3rem,2vw,1.7rem)", fontWeight: 800, marginTop: 8 }}>500K+</div>
              <div style={{ color: "rgba(243,243,243,0.6)", fontSize: "0.78rem", marginTop: 6 }}>Türkiye'de ilk 2 yılda hedef aktif kullanıcı</div>
              <div style={{ color: C.green, fontSize: "0.73rem", marginTop: 8 }}>Sonra: Avrupa & Global</div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6" style={{ maxWidth: 680 }}>
          {[
            { icon: "📈", text: "Artan sağlık bilinci" },
            { icon: "📱", text: "Yükselen mobil kullanım" },
            { icon: "✨", text: "Kişisel sağlık çözüm talebi" },
          ].map((d, i) => (
            <div key={i} className="flex items-center gap-3">
              <span style={{ fontSize: "1.35rem" }}>{d.icon}</span>
              <span style={{ color: "rgba(243,243,243,0.6)", fontSize: "0.83rem" }}>{d.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Slide 7 — Business Model
// ═══════════════════════════════════════════════════════════
function BusinessSlide() {
  const revenues = [
    { icon: "📣", title: "Uygulama İçi Reklamlar",  desc: "Hedeflenmiş reklam gösterimleri" },
    { icon: "🤝", title: "Marka İşbirlikleri",       desc: "Sağlıklı marka partnerlikleri" },
    { icon: "⭐", title: "Sponsorlu Listeler",        desc: "Ürün öne çıkarma & listeleme" },
    { icon: "📊", title: "Veri Entegrasyonu",         desc: "Market & perakende zincirleri ile B2B" },
  ];
  return (
    <div className="size-full flex flex-col relative overflow-hidden"
      style={{ background: `linear-gradient(145deg, ${C.dark} 0%, #003d50 60%, ${C.dark} 100%)` }}>
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <SlideLabel num="06" text="İş Modeli" />
        <h2 style={{ color: C.white, fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, margin: "8px 0 10px" }}>
          Nasıl <span style={{ color: C.green }}>Para Kazanıyoruz?</span>
        </h2>
        <p style={{ color: "rgba(243,243,243,0.55)", fontSize: "clamp(0.8rem,1.3vw,1rem)", maxWidth: 580, marginBottom: 36 }}>
          Uygulama kullanıcılar için <span style={{ color: C.green }}>tamamen ücretsiz</span>. Gelir, markalar ve iş ortakları üzerinden üretiliyor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ maxWidth: 780 }}>
          {revenues.map((r, i) => (
            <div key={i} style={{
              background: "rgba(101,188,134,0.07)",
              border: `1px solid rgba(101,188,134,0.19)`,
              borderRadius: 16, padding: "20px 22px",
              display: "flex", gap: 16, alignItems: "center",
            }}>
              <div style={{
                width: 50, height: 50,
                background: "rgba(101,188,134,0.16)",
                borderRadius: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.55rem", flexShrink: 0
              }}>{r.icon}</div>
              <div>
                <h3 style={{ color: C.white, fontWeight: 700, fontSize: "clamp(0.88rem,1.3vw,1rem)", margin: 0 }}>{r.title}</h3>
                <p style={{ color: "rgba(243,243,243,0.5)", fontSize: "0.8rem", marginTop: 3 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8" style={{
          background: `linear-gradient(135deg, rgba(101,188,134,0.12), rgba(82,153,107,0.12))`,
          border: `1px solid rgba(101,188,134,0.28)`,
          borderRadius: 16, padding: "16px 24px", maxWidth: 780,
          display: "flex", alignItems: "center", gap: 16
        }}>
          <span style={{ fontSize: "1.75rem" }}>🆓</span>
          <div>
            <h3 style={{ color: C.white, fontWeight: 700, margin: 0 }}>Kullanıcıya Ücretsiz Model</h3>
            <p style={{ color: "rgba(243,243,243,0.52)", fontSize: "0.84rem", marginTop: 4 }}>
              Geniş kullanıcı tabanına ulaşmak önceliğimiz. Geniş kitle → Marka için değer → Sürdürülebilir gelir
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Slide 8 — App Screens
// ══════════════════════════════════════════════════════════
function ScreensSlide() {
  const screens = [
    { src: homeScreen, label: "Ana Ekran" },
    { src: productDetailScreen, label: "Ürün Detay" },
    { src: aiAnalysisScreen, label: "AI Analiz" },
    { src: healthProfileScreen, label: "Sağlık Profili" },
    { src: aiAssistantScreen, label: "AI Asistan" },
    { src: profileScreen, label: "Profil" },
  ];

  return (
    <div className="size-full flex flex-col relative overflow-hidden"
      style={{ background: `linear-gradient(138deg, #002e3d 0%, ${C.teal} 55%, #002e3d 100%)` }}>
      <div className="flex-1 flex flex-col justify-center items-center px-8 md:px-12 lg:px-20 py-12 gap-8">
        <div className="text-center">
          <SlideLabel num="05" text="Arayüz" />
          <h2 style={{ color: C.white, fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, margin: "8px 0 0" }}>
            Uygulama <span style={{ color: C.green }}>Ekranları</span>
          </h2>
          <p style={{ color: "rgba(243,243,243,0.6)", fontSize: "clamp(0.82rem,1.3vw,1rem)", maxWidth: 600, marginTop: 12, lineHeight: 1.7 }}>
            Kullanıcı deneyimini önceliklendiren, sade ve etkili arayüz tasarımı
          </p>
        </div>
        
        {/* All 6 screens in one row */}
        <div className="flex justify-center items-end gap-4" style={{ maxWidth: "1300px" }}>
          {screens.map((screen, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <img 
                src={screen.src} 
                alt={screen.label}
                style={{
                  height: "280px",
                  width: "auto",
                  filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.5))",
                  borderRadius: "6px"
                }}
              />
              <span style={{
                color: "rgba(243,243,243,0.65)",
                fontSize: "0.72rem",
                fontWeight: 600
              }}>
                {screen.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Slide 9 — Closing
// ═══════════════════════════════════════════════════════════
function ClosingSlide() {
  return (
    <div className="size-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: `radial-gradient(ellipse at 50% 55%, ${C.teal} 0%, ${C.dark} 55%, #002030 100%)` }}>
      {[700, 500, 310].map((s, i) => (
        <div key={i} className="absolute pointer-events-none" style={{
          width: s, height: s,
          border: `1px solid rgba(101,188,134,${0.05 + i * 0.05})`,
          borderRadius: "50%", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)"
        }} />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-8">
        <FoyasLogo size={86} />
        <h2 style={{ color: C.white, fontSize: "clamp(1.5rem,4vw,3.5rem)", fontWeight: 800, margin: 0 }}>
          Bilinçli Beslenmenin<br /><span style={{ color: C.green }}>Geleceği Burada</span>
        </h2>
        <p style={{ color: "rgba(243,243,243,0.6)", maxWidth: 500, fontSize: "clamp(0.85rem,1.5vw,1.05rem)", lineHeight: 1.7, margin: 0 }}>
          FOYAS ile kullanıcılar artık ne yediğini biliyor. Sağlıklı seçimler, bilinçli nesiller.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mt-2">
          {["Barkod Tarama", "AI Destekli", "Ücretsiz", "Kişiselleştirilmiş"].map((t, i) => (
            <div key={i} style={{
              background: "rgba(101,188,134,0.12)",
              border: `1px solid rgba(101,188,134,0.32)`,
              borderRadius: 30, padding: "8px 20px",
              color: C.green, fontSize: "0.88rem", fontWeight: 600
            }}>{t}</div>
          ))}
        </div>

        <a 
          href="https://craft-window-02518586.figma.site" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            background: `linear-gradient(135deg, ${C.teal}, ${C.midGreen})`,
            borderRadius: 16, padding: "20px 44px", textAlign: "center", marginTop: 6,
            textDecoration: "none", display: "block",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(101,188,134,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div style={{ color: C.white, fontWeight: 800, fontSize: "1.05rem" }}>Uygulamaya Git</div>
          <div style={{ color: C.green, fontSize: "0.84rem", marginTop: 2 }}>→ Hemen Keşfet</div>
        </a>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════
// App — Navigation shell
// ══════════════════════════════════════════════════════════
const slideComponents = [
  CoverSlide, ProblemSlide, SolutionSlide, FeaturesSlide,
  TargetSlide, ScreensSlide, ClosingSlide,
];
const slideLabels = [
  "Kapak", "Sorun", "Çözüm", "Özellikler",
  "Hedef Kitle", "Ekranlar", "Kapanış"
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const total = slideComponents.length;

  const goNext = useCallback(() => setCurrent(c => Math.min(c + 1, total - 1)), [total]);
  const goPrev = useCallback(() => setCurrent(c => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " "].includes(e.key)) goNext();
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) goPrev();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [goNext, goPrev]);

  return (
    <div className="size-full flex flex-col" style={{ background: C.dark, userSelect: "none" }}>
      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        {slideComponents.map((Comp, i) => (
          <SlideWrapper key={i} active={i === current}>
            <Comp />
          </SlideWrapper>
        ))}
      </div>

      {/* Nav bar */}
      <div style={{
        background: "rgba(0,42,54,0.97)",
        borderTop: `1px solid rgba(101,188,134,0.18)`,
        padding: "10px 22px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 14, backdropFilter: "blur(12px)", flexShrink: 0,
      }}>
        {/* Dots */}
        <div className="flex items-center gap-1.5 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {slideLabels.map((label, i) => (
            <button key={i} onClick={() => setCurrent(i)} title={label} style={{
              width: i === current ? 30 : 7, height: 7,
              borderRadius: 4,
              background: i === current ? C.green : "rgba(101,188,134,0.28)",
              border: "none", cursor: "pointer",
              transition: "all 0.3s", flexShrink: 0,
            }} />
          ))}
        </div>
        {/* Label + counter */}
        <div className="flex items-center gap-3">
          <span className="hidden md:block" style={{ color: "rgba(243,243,243,0.4)", fontSize: "0.78rem" }}>
            {slideLabels[current]}
          </span>
          <span style={{ color: C.green, fontSize: "0.84rem", fontWeight: 700, flexShrink: 0 }}>
            {current + 1} / {total}
          </span>
        </div>
        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button onClick={goPrev} disabled={current === 0} style={{
            background: current === 0 ? "rgba(101,188,134,0.05)" : "rgba(101,188,134,0.15)",
            border: `1px solid rgba(101,188,134,0.22)`,
            borderRadius: 10, padding: "7px 18px",
            color: current === 0 ? "rgba(101,188,134,0.3)" : C.green,
            cursor: current === 0 ? "not-allowed" : "pointer",
            fontSize: "0.83rem", fontWeight: 600, transition: "all 0.2s",
          }}>← Geri</button>
          <button onClick={goNext} disabled={current === total - 1} style={{
            background: current === total - 1 ? "rgba(101,188,134,0.05)" : `linear-gradient(135deg, ${C.midGreen}, ${C.green})`,
            border: "none",
            borderRadius: 10, padding: "7px 18px",
            color: current === total - 1 ? "rgba(101,188,134,0.3)" : C.white,
            cursor: current === total - 1 ? "not-allowed" : "pointer",
            fontSize: "0.83rem", fontWeight: 700, transition: "all 0.2s",
          }}>İleri →</button>
        </div>
      </div>
    </div>
  );
}