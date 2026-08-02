import { useEffect, useState } from "react";
import api, { authHeader } from "../api/axios";
import { useAuth } from "../context/AuthContext";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all"); // all | new | read | replied
  const [selected, setSelected] = useState(null); // enquiry being viewed in detail
  const { logout } = useAuth();

  function loadEnquiries() {
    setLoading(true);
    api.get("/enquiries/admin/all", authHeader())
      .then((res) => setEnquiries(res.data.data))
      .catch(() => setError("Could not load enquiries."))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadEnquiries();
  }, []);

  async function markReplied(id) {
    try {
      await api.patch(`/enquiries/admin/${id}`, { status: "replied" }, authHeader());
      loadEnquiries();
      if (selected?._id === id) setSelected(null);
    } catch {
      alert("Failed to update status.");
    }
  }

  async function deleteEnquiry(id) {
    if (!confirm("Delete this enquiry? This cannot be undone.")) return;
    try {
      await api.delete(`/enquiries/admin/${id}`, authHeader());
      loadEnquiries();
      if (selected?._id === id) setSelected(null);
    } catch {
      alert("Failed to delete enquiry.");
    }
  }

  const visibleEnquiries = filter === "all"
    ? enquiries
    : enquiries.filter((e) => e.status === filter);

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Enquiries</h1>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>

      <div className="filter-bar">
        {["all", "new", "read", "replied"].map((f) => (
          <button
            key={f}
            className={filter === f ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {loading && <p>Loading enquiries...</p>}
      {error && <p className="error-text">{error}</p>}
      {!loading && !error && visibleEnquiries.length === 0 && <p>No enquiries here.</p>}

      <table className="enquiry-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visibleEnquiries.map((e) => (
            <tr key={e._id}>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td className="message-cell">{e.message.slice(0, 40)}{e.message.length > 40 ? "..." : ""}</td>
              <td>{new Date(e.createdAt).toLocaleDateString()}</td>
              <td><span className={`status-badge status-${e.status}`}>{e.status}</span></td>
              <td className="actions-cell">
                <button onClick={() => setSelected(e)}>View</button>
                {e.status !== "replied" && (
                  <button onClick={() => markReplied(e._id)}>Mark Replied</button>
                )}
                <button className="delete-btn" onClick={() => deleteEnquiry(e._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selected.name}</h2>
            <p><strong>Email:</strong> {selected.email}</p>
            <p><strong>Phone:</strong> {selected.phone || "—"}</p>
            <p><strong>Status:</strong> {selected.status}</p>
            <p><strong>Received:</strong> {new Date(selected.createdAt).toLocaleString()}</p>
            <p className="modal-message">{selected.message}</p>
            <button className="close-btn" onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;