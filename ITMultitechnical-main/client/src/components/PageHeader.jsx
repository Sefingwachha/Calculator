import "./PageHeader.css";

function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <div className="page-header-glow"></div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default PageHeader;
