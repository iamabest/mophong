export function SiteHeader() {
  return (
    <header>
      <a className="logo-container brand-link" href="./index.html" aria-label="SkillMath9">
        <div className="logo-icon">∑</div>
        <div className="logo-text">SkillMath9</div>
        <span className="badge">Kết nối tri thức</span>
      </a>
      <a href="./docs/pedagogy_guide.md" className="btn-open">
        Tài liệu sư phạm
      </a>
    </header>
  );
}
